// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  // Add your custom middleware here. Remember that
  // in Express, the order matters.
  app.use(function(req, res, next) {
    req.feathers.userId = req.user.sub;
    next();
  });
};
