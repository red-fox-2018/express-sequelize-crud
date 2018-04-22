'use strict';
module.exports = (sequelize, DataTypes) => {
  var subject = sequelize.define('subject', {
    subject_name: DataTypes.STRING
  }, {});
  return subject;
};