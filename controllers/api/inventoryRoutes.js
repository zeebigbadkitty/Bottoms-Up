const router = require("express").Router();
const { Inventory, User } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all from inventory 
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
    const inventories = inventoryData.map((stock) => stock.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('inventory', { 
      layout: "main",
      inventories, 
      loggedIn: req.session.loggedIn,
      userAdmin: req.session.userAdmin,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update quantity based on inventory id 
router.put('/:id', withAuth, async (req, res) => {
  console.log("Quantity is here " +req.body.quantity);
  try {
    const inventoryData = await Inventory.update(
      {
        quantity: req.body.quantity,
      },      
      {
      where: {
        id: req.params.id,
      },
    });

    if (!inventoryData) {
      res.status(404).json({ message: 'No inventory found with this id!' });
      return;
    }

    res.status(200).json(inventoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;