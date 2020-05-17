import Sequelize, { Model } from 'sequelize';

export default class Campaign extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        full_description: Sequelize.TEXT,
        tags: Sequelize.ARRAY(Sequelize.STRING),
        active: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'creator',
      as: 'campaignCreator',
    });
  }
}
