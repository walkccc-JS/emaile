const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/free', requireLogin, async (req, res) => {
    req.user.credits += 4.99;
    const user = await req.user.save();

    res.send(user);
  });

  app.post('/api/reset', requireLogin, async (req, res) => {
    req.user.credits = 0;
    const user = await req.user.save();

    res.send(user);
  });
};
