'use strict';
module.exports = (sequelize, DataTypes) => {
  var teacher = sequelize.define('teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'your input Is\'nt email'
        }
      }
    }
  }, {});
  teacher.associate = function(models) {
    // associations can be defined here
  };
  return teacher;
};