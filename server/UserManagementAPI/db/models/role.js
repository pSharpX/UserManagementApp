module.exports = (sequelize, DataType) => {
  const Role = sequelize.define("Role", {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    roleName: {
      type: DataType.STRING,
      field: "roleName",
      allowNull: false
    },
    description: DataType.STRING,
    enabled: DataType.BOOLEAN
  });

  Role.associate = function(models) {
    Role.hasMany(models.User);
  };

  return Role;
};
