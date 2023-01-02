const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Inventory, User } = require('../../models');
const withAuth = require('../../utils/auth');
const { QueryTypes } = require('sequelize');

// Go to item-management page
router.get('/', async (req, res) => {
  try {
    const categories = await sequelize.query("SELECT DISTINCT category FROM inventory", { type: QueryTypes.SELECT });

    res.render('item-management', {
      loggedIn: req.session.loggedIn,
      userAdmin: req.session.userAdmin,
      categories,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new item in inventory 
router.post('/', async (req, res) => {
  try {
    const newItem = await Inventory.create({
      ...req.body,
      user_id: req.session.userId,
    });

    res.status(200).json(newItem);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;