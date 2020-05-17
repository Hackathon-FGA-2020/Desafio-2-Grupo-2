import * as Yup from 'yup';
import Solicitation from '../models/Solicitation';
import User from '../models/User';
import Avatar from '../models/Avatar';

class SolicitationController {
  async index(req, res) {
    const user = await User.findByPk(req.userId);

    if (!user || user.user_type !== 'admin') {
      return res.status(401).json({ error: 'Unauthorized.' });
    }

    const solicitations = await Solicitation.findAll({
      attributes: ['id', 'name', 'email', 'user_type'],
      order: ['created_at'],
      include: [
        {
          model: Avatar,
          as: 'avatar',
          attributes: ['id', 'url', 'name', 'path', 'url'],
        },
      ],
    });
    return res.json(solicitations);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      user_type: Yup.string().required(),
    });

    const { originalname, filename: path } = req.file;
    const { name, email, password, user_type } = req.body;
    const user_data = {
      name,
      email,
      password,
      user_type,
    };
    const file = {
      name: originalname,
      path,
    };

    if (!(await schema.isValid(user_data))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const solicitationExists = await Solicitation.findOne({
      where: { email: user_data.email },
    });

    const userExists = await User.findOne({
      where: { email: user_data.email },
    });

    if (solicitationExists) {
      return res.status(400).json({ error: 'Solicitation under analysis.' });
    }

    if (userExists) {
      return res.status(400).json({ error: 'User already registered.' });
    }

    const avatar = await Avatar.create(file);

    if (user_type === 'donator' || user_type === 'admin') {
      const user = await User.create({ ...user_data, avatar_id: avatar.id });
      return res.status(200).json({ 'User succesfully registered': user });
    }

    const solicitation = await Solicitation.create({
      ...user_data,
      avatar_id: avatar.id,
    });

    return res
      .status(200)
      .json({ 'Solicitation succesfully registered': solicitation });
  }

  async delete(req, res) {
    const user = await User.findByPk(req.userId);
    if (!user || user.user_type !== 'admin') {
      return res.status(401).json({ error: 'Unauthorized.' });
    }

    const solicitation = await Solicitation.findOne({
      where: { id: req.params.id },
    });

    if (!solicitation) {
      return res.status(400).json({ error: 'Solicitation not found.' });
    }

    const { approved } = req.body;

    const {
      name,
      email,
      password_hash,
      user_type,
      avatar_id,
    } = solicitation.dataValues;

    if (approved) {
      User.create({
        name,
        email,
        password_hash,
        user_type,
        avatar_id,
      });
    }
    const avatar = await Avatar.findByPk(avatar_id);

    if (avatar && !approved) await avatar.destroy();

    await solicitation.destroy();

    return res.status(200).json({ id: req.params.id, approved });
  }
}

export default new SolicitationController();
