const Joi = require("joi");
const moment = require("moment");
const validate = require("express-validation");

const roleService = require("../../services/role.service");

// const intervalSchema = Joi.object().keys({
//   from: Joi.date()
//     .max("1-1-2050")
//     .required(),
//   to: Joi.date()
//     .max("1-1-2050")
//     .required()
// });

// const optionalIntervalSchema = Joi.object().keys({
//   employeeId: Joi.number()
//     .integer()
//     .positive()
//     .required(),
//   from: Joi.date()
//     .max("1-1-2050")
//     .optional(),
//   to: Joi.date()
//     .max("1-1-2050")
//     .optional()
// });

// const paginationSchema = Joi.object().keys({
//   page: Joi.number()
//     .integer()
//     .positive()
//     .max(150)
//     .required(),
//   limit: Joi.number()
//     .integer()
//     .positive()
//     .max(100)
//     .required()
// });

module.exports = {
  get: (req, res, next) =>
    new Promise((resolve, reject) => {
      const id = parseInt(req.params[0]);
      roleService
        .get(id)
        .then(role => {
          res.status(200).json({
            data: {
              role
            }
          });
        })
        .catch(err => {
          return next(err);
        });
    }),
  getAll: (req, res, next) => {
    return new Promise((resolve, reject) => {
      roleService
        .getAll(req)
        .then(roles => {
          res.status(200).json({
            data: {
              roles
            }
          });
        })
        .catch(err => {
          return next(err);
        });
    });
  },

  search: (req, res, next) =>
    new Promise((resolve, reject) => {
      const params = req.query;
      roleService
        .search(params)
        .then(roles => {
          res.status(200).json({
            data: {
              roles
            }
          });
        })
        .catch(err => {
          return next(err);
        });
    }),

  create: (req, res, next) =>
    new Promise((resolve, reject) => {
      const role = req.body;
      roleService
        .create(role)
        .then(created => {
          res.status(200).json({
            data: {
              role: created
            }
          });
        })
        .catch(err => {
          reject(err);
        });
    }).catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    }),
  update: (req, res, next) =>
    new Promise((resolve, reject) => {
      const id = parseInt(req.params[0]);
      const role = req.body;
      roleService
        .update(id, role)
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
    }),
  remove: (req, res, next) =>
    new Promise((resolve, reject) => {
      const id = parseInt(req.params[0]);
      roleService
        .delete(id)
        .then(deleted => {
          res.status(200).json({
            data: {
              deleted
            }
          });
        })
        .catch(err => {
          return next(err);
        });
    })
};
