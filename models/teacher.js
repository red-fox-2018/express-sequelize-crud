/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

'use strict';
module.exports = (sequelize, DataTypes) => {
   var Teacher = sequelize.define('Teacher', {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      SubjectId: DataTypes.INTEGER
   }, {
   });
   Teacher.associate = function(models) {
      // associations can be defined here
      Teacher.belongsTo(models.Subject);
   };
   return Teacher;
};
