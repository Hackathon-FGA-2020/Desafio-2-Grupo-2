import Sequelize, { Model } from 'sequelize';

export default class Donation extends Model {
  static init(sequelize) {
    super.init(
      {
        items: Sequelize.ARRAY(Sequelize.STRING),
        pending_delivery: Sequelize.BOOLEAN,
        closed: Sequelize.BOOLEAN,
        origin: Sequelize.ARRAY(Sequelize.STRING),
        destiny: Sequelize.ARRAY(Sequelize.STRING),
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'donor_id',
      as: 'donor',
    });
    this.belongsTo(models.User, {
      foreignKey: 'entity_id',
      as: 'entity',
    });
    this.belongsTo(models.Campaign, {
      foreignKey: 'campaign_id',
      as: 'campaign',
    });
  }
}
