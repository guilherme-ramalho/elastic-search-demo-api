import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false.valueOf,
        },
        unitPrice: {
          type: Sequelize.DECIMAL,
          allowNull: false,
        },
        brand: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    this.tableName = 'products';

    return this;
  }
}

export default Product;
