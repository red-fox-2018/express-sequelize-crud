/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

'use strict';
module.exports = (sequelize, DataTypes) => {
   var Student = sequelize.define('Student', {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      gender: DataTypes.STRING,
      birthday: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING
   }, {
   });
   Student.associate = function(models) {
      // associations can be defined here
   };
   return Student;
};
