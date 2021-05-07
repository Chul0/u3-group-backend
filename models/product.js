'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.product.belongsToMany(models.user, {through:'myCart'})
      models.product.belongsToMany(models.order, {through:'productOrder'})
      models.product.hasMany(models.myCart)
    }
  };
  product.init({
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    price: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};