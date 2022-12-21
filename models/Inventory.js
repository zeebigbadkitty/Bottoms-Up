const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Inventory extends Model {}

Inventory.init(
    {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // quantity max is ensuring user to order too much bottles at the same time
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      max: 10,                  
      min: 0, 
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    // use to send out alert to user when inventory is low
    par_min: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  }, 
  {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'inventory',
  }
);

module.exports = Inventory;