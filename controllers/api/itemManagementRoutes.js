const router = require("express").Router();
const { Inventory, User } = require('../../models');
const withAuth = require('../../utils/auth');

// Go to item-management page
router.get('/', (req, res) => {
  res.render('item-management', {
    logged_in: req.session.logged_in
  });
});

// Create a new item in inventory 
router.post('/', async (req, res) => {
  console.log("Finally, I am here");
  console.log(req.body);
  console.log("emm...this is " + req.session.userId);
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