import Donation from '../models/Donation';
import User from '../models/User';
import Avatar from '../models/Avatar';

class DeliveryController {
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
}

export default new DeliveryController();
