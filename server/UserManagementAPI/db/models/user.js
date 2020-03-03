"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: DataTypes.STRING,
    //password: DataTypes.STRING,
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      field: "email",
      allowNull: false,
      unique: true
    },
    profileImagePath: DataTypes.STRING,
    userGroup: DataTypes.STRING,
    lastVisit: {
      type: DataTypes.DATE,
      field: "lastVisit",
      allowNull: true
    },
    enabled: DataTypes.BOOLEAN,
    activated: DataTypes.BOOLEAN
  });

  User.associate = function(models) {
    User.belongsTo(models.Role);
  };

  return User;
};
