'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        notEmpty: true,
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        notEmpty: true,
      }
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        notEmpty: true
      }
    },
    birthday: {
      type: DataTypes.DATEONLY,
      validate: {
        notEmpty: true,
        isDate: true
      }
    }
  }, {});

  //CLASS METHOD



  //INSTANCE METHOD

  Student.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;

  }

  return Student;
};
