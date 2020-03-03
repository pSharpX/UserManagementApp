const _ = require("lodash");
const models = require("../config/sequelize");
const repository = models.Role;

const userRepository = models.User;
const sequelize = models.sequelize;
const Sequelize = models.Sequelize;
const Op = Sequelize.Op;

module.exports = {
  getAll: () => repository.findAll(),
  get: id => repository.findById(id),
  find: params =>
    repository.findAll({
      where: params
    }),
  search: params =>
    repository.findAll({
      where: params
    }),
  create: role =>
    repository.create(role, {
      fields: [
        "uuid",
        "firstName",
        "lastName",
        "address",
        "email",
        "position",
        "birthday",
        "dni"
      ]
    }),
  update: (id, role) =>
    repository.update(role, {
      where: {
        id
      }
    }),
  delete: id =>
    repository.destroy({
      where: {
        id
      }
    })
};
