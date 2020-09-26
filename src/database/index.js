import Sequelize from 'sequelize';
import mongoose from 'mongoose';
import database from '../config/database';

import Building from '../app/models/Building';
import Category from '../app/models/Category';
import Favor from '../app/models/Favor';
import Item from '../app/models/Item';
import Resident from '../app/models/Resident';
import Seal from '../app/models/Seal';

const models = [Building, Category, Favor, Item, Resident, Seal]; // import SQL models

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(database);
    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongo.connection = mongoose.connect(
      process.env.MONGO_DB_URL,
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      },
    );
  }
}

export default new Database();
