'use strict';
module.exports = (sequelize, DataTypes) => {
  const Field = sequelize.define('Field', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Field.associate = function(models) {
    // associations can be defined here
  };
  return Field;
};