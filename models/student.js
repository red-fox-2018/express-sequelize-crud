'use strict';
module.exports = (sequelize, DataTypes) => {
  var student = sequelize.define('student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type:DataTypes.STRING, 
      validate:{
        isEmail:{
          args:true,
          msg: 'your input Is\'nt email'
        }
      }
    }
  }, {});
  student.associate = function(models) {
    // associations can be defined here
  };
  return student;
};