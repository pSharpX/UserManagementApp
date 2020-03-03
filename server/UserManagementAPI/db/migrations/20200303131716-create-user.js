"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: Sequelize.STRING,
      password: Sequelize.STRING,
      name: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        field: "email",
        allowNull: false,
        unique: true
      },
      profileImagePath: Sequelize.STRING,
      userGroup: Sequelize.STRING,
      roleId: {
        type: Sequelize.INTEGER,
        field: "roleId",
        references: {
          model: "roles",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      lastVisit: {
        type: Sequelize.DATE,
        field: "lastVisit",
        allowNull: true
      },
      enabled: Sequelize.BOOLEAN,
      activated: Sequelize.BOOLEAN
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
    return queryInterface.dropTable("users");
  }
};
