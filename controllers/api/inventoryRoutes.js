const router = require("express").Router();
const { Inventory, User } = require('../../models');
const withAuth = require('../../utils/auth');
const withAdmin = require('../../utils/admin');

// get all from inventory 
router.get('/', async (req, res) => {
  try {
    // get all projects and JOIN with user data
    const inventoryData = await Inventory.findAll({
      include: [
        {
          model: User,
          attributes: ['user_id'],
        },
      ],
    });

    // serialize data so the template can read it
    const inventories = inventoryData.map((stock) => stock.get({ plain: true }));

    // pass serialized data and session flag into template
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

// update quantity based on inventory id 
router.put('/:id', withAuth, async (req, res) => {

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

//Delete an inventory item
router.delete('/:id', withAdmin, async (req, res) => {
  try {
    const inventoryData = await Inventory.destroy({
      where: {
        id: req.params.id,
      },
   })

   if (!inventoryData) {
    res.status(404).json({ message: 'No inventory product found with this id!' });
    return;
  }

    res.status(200).json(inventoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

module.exports = router;