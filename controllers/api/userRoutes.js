const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      user_id: req.body.user_id, 
      password: req.body.password
  });

  req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.user_id = newUser.user_id;
      req.session.loggedIn = true;

      res.json(newUser);
  });
} catch (err) {
  res.status(500).json(err)
}
});

router.post('/login', async (req, res) => {
  try {
    console.log(req.body.user_id, req.body.password)
    const userData = await User.findOne({ where: { user_id: req.body.user_id } });
console.log(userData)
    if (!userData) {
      console.log(2)
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      console.log(3)
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.userId = userData.id
      req.session.user_id = userData.user_id
      req.session.loggedIn = true;
      res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
