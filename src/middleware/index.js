// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  // Add your custom middleware here. Remember that
  // in Express, the order matters.

  // Grab the user id if it is available
  app.use(function(req, res, next) {
    if (req && req.user) {
      req.feathers.userId = req.user.sub;
      // console.log(`middleware/index.js -- ${req.feathers.userId}`);
    }
    next();
  });
};
