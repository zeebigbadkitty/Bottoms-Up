const User = require('./User');
const Inventory = require('./Inventory');

User.hasMany(Inventory, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Inventory.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Inventory };
