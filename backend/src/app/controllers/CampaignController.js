import * as Yup from 'yup';

import Campaign from '../models/Campaign';
import CampaignFile from '../models/CampaignFile';
import User from '../models/User';

class CampaignController {
  async store(req, res) {
    const data = req.body;
    const { userId, file } = req;

    const user = await User.findByPk(userId);

    if (!user || (user.user_type !== 'admin' && user.user_type !== 'entity')) {
      return res.status(401).json({ error: 'Unauthorized.' });
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      full_description: Yup.string(),
      tags: Yup.array().required(),
    });

    if (!(await schema.isValid(data))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const campaignAlreadyExists = await Campaign.findOne({
      where: {
        name: data.name,
      },
    });

    if (campaignAlreadyExists) {
      return res.status(400).json({ error: 'Campaign already exists.' });
    }

    const campaign = await Campaign.create({ ...data, creator: userId });
    const proprietary = campaign.dataValues.id;

    await CampaignFile.create({
      name: file.originalname,
      path: file.filename,
      proprietary,
    });

    return res.status(200).json({ campaign, file });
  }

  async update(req, res) {
    const user = await User.findByPk(req.userId);

    if (!user || (user.user_type !== 'admin' && user.user_type !== 'entity')) {
      return res.status(401).json({ error: 'Unauthorized.' });
    }

    const schema = Yup.object().shape({
      name: Yup.string(),
      description: Yup.string(),
      full_description: Yup.string(),
      tags: Yup.array(),
      active: Yup.boolean(),
    });

    const data = req.body;
    const { userId, file } = req;
    const { id } = req.params;

    if (!(await schema.isValid(data))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const campaign = await Campaign.findOne({
      where: {
        id,
        creator: userId,
      },
    });

    if (!campaign) {
      return res
        .status(400)
        .json({ error: 'Campaign not found or insufficient permission.' });
    }

    await campaign.update(data);
    campaign.save();

    const proprietary = campaign.id;

    const photos = await CampaignFile.findAll({
      where: {
        proprietary,
      },
    });

    if (file) {
      photos.forEach(async (photo) => {
        await photo.destroy();
      });


      await CampaignFile.create({
        name: file.originalname,
        path: file.filename,
        proprietary,
      });
    }

    return res.status(200).json({ campaign });
  }
}

export default new CampaignController();
