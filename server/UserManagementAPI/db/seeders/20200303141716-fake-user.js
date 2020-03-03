"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    // return queryInterface.bulkInsert('user', [{
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   email: 'demo@demo.com'
    // }], {});
    return queryInterface.sequelize.query("SELECT id FROM Roles").then(roles => {
      const rolesRows = roles[0];
      return queryInterface.bulkInsert(
        "users",
        [
          {
            roleId: rolesRows[0].id,
            username: "Christian",
            //password: "password",
            name: "Christian",
            email: "crivera2093@gmail.com",
            profileImagePath: "./upload/image.png",
            userGroup: "Registered",
            lastVisit: new Date(),
            enabled: true,
            activated: true
          }
        ],
        {}
      );
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("users", null, {});
  }
};
