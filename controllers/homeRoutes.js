const router = require('express').Router();
const { Inventory, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const inventoryData = await Inventory.findAll({
      include: [
        {
          model: User,
          attributes: ['user_id'],
        },
      ],
    });

    // Serialize data so the template can read it
    const inventory = inventoryData.map((stock) => stock.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('holdplease', { 
      layout: "main",
      inventory, 
      loggedIn: req.session.loggedIn 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/register", (req, res) => {
  res.render("register", {
    layout: "main",
  });
});

router.get('/inventory/:id', async (req, res) => {
  try {
    const inventoryData = await Inventory.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const inventory = inventoryData.get({ plain: true });

    res.render('inventory', {
      ...inventory,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect('/');

  } else {
    res.render("login", {});
  }
});

module.exports = router;
