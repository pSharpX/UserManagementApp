const joi = require("joi");
const validate = require("express-validation");

const userService = require("../../services/user.service");

module.exports = {
  get: (req, res, next) => {
    return new Promise((resolve, reject) => {
      const id = parseInt(req.params[0]);
      userService
        .get(id)
        .then(user => {
          res.status(200).json({
            data: {
              user
            }
          });
        })
        .catch(err => {
          return next(err);
        });
    });
  },

  getAll: (req, res, next) => {
    return new Promise((resolve, reject) => {
      userService
        .getAll(req)
        .then(users => {
          res.status(200).json({
            data: {
              users
            }
          });
        })
        .catch(err => {
          return next(err);
        });
    });
  },
  search: (req, res, next) => {
    return new Promise((resolve, reject) => {
      const params = req.query;
      userService
        .search(params)
        .then(users => {
          res.status(200).json({
            data: {
              users
            }
          });
        })
        .catch(err => {
          return next(err);
        });
    });
  },
  create: (req, res, next) => {
    return new Promise((resolve, reject) => {
      const user = req.body;
      userService
        .create(user)
        .then(created => {
          res.status(200).json({
            data: {
              created
            }
          });
        })
        .catch(err => {
          return next(err);
        });
    });
  },

  update: (req, res, next) => {
    return new Promise((resolve, reject) => {
      const id = parseInt(req.params[0]);
      const user = req.body;
      userService
        .update(id, user)
        .then(updated => {
          res.status(200).json({
            data: {
              updated
            }
          });
        })
        .catch(err => {
          return next(err);
        });
    });
  },
  remove: (req, res, next) => {}
};
