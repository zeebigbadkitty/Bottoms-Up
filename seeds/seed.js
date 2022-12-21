const sequelize = require('../config/connection');
const { User, Inventory } = require('../models');

const userData = require('./userData.json');
const inventoryData = require('./inventoryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const inventory of inventoryData) {
    await Inventory.create({
      ...inventory,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
