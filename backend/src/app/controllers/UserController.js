import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      password: Yup.string().min(6),
      user_type: Yup.string(),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, user_type } = req.body;

    // Achando o usuario
    const user = await User.findByPk(req.userId);

    // se ele tentar alterar o email e verificar se ele não vai alterar pra um email já em uso
    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already registered' });
      }
    }

    // Caso tente trocar seu tipo de usuario
    if (user_type === user.user_type) {
      return res.status(400).json({ error: `you are already ${user_type}` });
    }

    const { id, name, password } = await user.update(req.body);

    return res.json({ id, name, email, user_type, password });
  }
}

export default new UserController();
