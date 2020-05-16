import * as Yup from 'yup';
import Solicitation from '../models/Solicitation';
import User from '../models/User';

class SolicitationController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      user_type: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const solicitationExists = await Solicitation.findOne({
      where: { email: req.body.email },
    });

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (solicitationExists) {
      return res.status(400).json({ error: 'Solicitation under analysis.' });
    }

    if (userExists) {
      return res.status(400).json({ error: 'User already registered.' });
    }

    const { id, name, email, user_type } =
      req.body.user_type === 'donator'
        ? await User.create(req.body)
        : await Solicitation.create(req.body);

    return res.json({ id, name, email, user_type });
  }

  async delete(req, res) {
    const solicitation = await Solicitation.findOne({
      where: { id: req.params.id },
    });

    if (!solicitation) {
      return res.status(400).json({ error: 'Solicitation not found.' });
    }

    const { approved } = req.body;

    const { name, email, password_hash, user_type } = solicitation.dataValues;
    if (approved) {
      User.create({
        name,
        email,
        password_hash,
        user_type,
      });
    }
    await solicitation.destroy();
    return res.status(200).json({ id: req.params.id, approved });
  }
}

export default new SolicitationController();
