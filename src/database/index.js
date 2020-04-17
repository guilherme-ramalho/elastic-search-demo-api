import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import Product from '../app/models/Product';

const models = [Product];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
