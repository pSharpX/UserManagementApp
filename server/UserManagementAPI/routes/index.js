const models = require('../config/sequelize');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/prueba', function(req, res, next) {
  models.User.findAll().then(function(users) {
    res.json(users);
  }).catch(err => {
    console.log(err);
  });
});

module.exports = router;
