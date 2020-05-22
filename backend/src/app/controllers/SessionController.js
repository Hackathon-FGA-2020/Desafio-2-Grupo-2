import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import authConfig from '../../config/auth';
import User from '../models/User';
import Avatar from '../models/Avatar';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Unregistered user' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    const { id, name, user_type, avatar_id } = user;
    const avatar = await Avatar.findByPk(avatar_id);

    return res.json({
      user: {
        id,
        name,
        email,
        user_type,
        avatar,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
