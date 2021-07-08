'use strict';
module.exports = (sequelize, DataTypes) => {
  var addEmail = sequelize.define('Teacher', {
    email: DataTypes.STRING
  }, {});
  addEmail.associate = function(models) {
    // associations can be defined here
  };
  return addEmail;
};