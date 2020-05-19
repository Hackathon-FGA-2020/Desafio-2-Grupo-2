import * as Yup from 'yup';
import Donation from '../models/Donation';
import User from '../models/User';
import Campaign from '../models/Campaign';
import Avatar from '../models/Avatar';

class DonationController {
  async index(req, res) {
    const campaigns = await Donation.findAll({
      // Depois que a entrega for realizada, deve atualizar o closed para true
      where: { pending_delivery: true, closed: false },
      order: ['updated_at'],

      include: [
        {
          model: User,
          as: 'donor',
          attributes: ['name', 'email'],
          include: [
            {
              model: Avatar,
              as: 'avatar',
            },
          ],
        },
        {
          model: User,
          as: 'entity',
          attributes: ['name', 'email'],
          include: [
            {
              model: Avatar,
              as: 'avatar',
            },
          ],
        },
      ],
    });

    return res.json(campaigns);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      items: Yup.string().required(),
      entity_id: Yup.number().required(),
      campaign_id: Yup.number().required(),
      origin: Yup.string().required(),
      destiny: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const {
      items,
      entity_id,
      campaign_id,
      pending_delivery,
      origin,
      destiny,
    } = req.body;

    const isEntity = await User.findOne({
      where: {
        id: entity_id,
        user_type: 'entity',
      },
    });

    if (!isEntity) {
      return res
        .status(401)
        .json({ error: 'This user cannot receive donations' });
    }

    const campaignValid = await Campaign.findOne({
      where: {
        id: campaign_id,
        active: true,
      },
    });

    if (!campaignValid) {
      return res
        .status(401)
        .json({ error: 'This campaign is no longer available' });
    }

    const campaignBelongsTo = await Campaign.findOne({
      where: {
        id: campaign_id,
        creator: entity_id,
      },
    });

    if (!campaignBelongsTo) {
      return res
        .status(401)
        .json({ error: 'This campaign does not belong to that user' });
    }

    const donation = await Donation.create({
      donor_id: req.userId,
      entity_id,
      campaign_id,
      items,
      pending_delivery,
      origin,
      destiny,
    });

    return res.json(donation);
  }

  async delete(req, res) {
    const donation = await Donation.findByPk(req.params.id);

    if (donation.donor_id !== req.userId) {
      return res
        .status(401)
        .json({ error: 'You cannot make changes to this donation' });
    }

    if (donation.closed === true) {
      return res.status(400).json({ error: 'This donation has ended' });
    }

    donation.closed = true;
    await donation.save();
    return res.json(donation);
  }
}

export default new DonationController();
