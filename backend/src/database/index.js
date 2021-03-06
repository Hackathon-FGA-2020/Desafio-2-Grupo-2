import Sequelize from 'sequelize';

import User from '../app/models/User';
import Solicitation from '../app/models/Solicitation';
import Avatar from '../app/models/Avatar';
import Campaign from '../app/models/Campaign';
import CampaignFile from '../app/models/CampaignFile';
import Donation from '../app/models/Donation';
import Chat from '../app/models/Chat';

import databaseConfig from '../config/database';

const models = [User, Solicitation, Avatar, Campaign, CampaignFile, Donation, Chat];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
