// import routes
const router = require('express').Router();
const apiRoutes = require('./api');

// prefix routes
router.use('/api', apiRoutes);

// send error message for wrong routes
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;