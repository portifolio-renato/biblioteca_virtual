const create = require('../controllers/user.controller')

const userRoutes = (app) => {
  app.post("/user", create);
};

module.exports = userRoutes
