'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    field_id: DataTypes.INTEGER
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};