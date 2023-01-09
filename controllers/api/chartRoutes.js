const router = require("express").Router();
const sequelize = require("../../config/connection");
const withAdmin = require('../../utils/admin');
const { QueryTypes } = require('sequelize');

// raw query to select sum category quantity
router.get('/', withAdmin, async (req, res) => {
  try {
    const categories = await sequelize.query("SELECT DISTINCT category, SUM(quantity) AS quantity FROM inventory GROUP BY category", { type: QueryTypes.SELECT });
    const categoryData = categories.map((name) => name.category);
    const quantityData = categories.map((quantity) => quantity.quantity);

    // pass serialized data and session flag into template
    res.render('chart', {
      loggedIn: req.session.loggedIn,
      userAdmin: req.session.userAdmin,
      categoryData,
      quantityData,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;