const models = require("../config/sequelize");
const repository = models.User;

module.exports = {
  getAll: () => repository.findAll(),
  get: id => repository.findById(id),
  find: params => repository.findAll({ where: params }),
  search: params => repository.findAll({ where: params }),
  create: user =>
    repository.create(user, {
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
  update: (id, user) => repository.update(user, { where: { id } })
};
