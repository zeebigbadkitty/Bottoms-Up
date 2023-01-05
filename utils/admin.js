const withAdmin = (req, res, next) => {

  if (req.session.loggedIn == true && req.session.userAdmin == true) {
    next();
  } else {
    res.redirect("/");
  }
};

module.exports = withAdmin;