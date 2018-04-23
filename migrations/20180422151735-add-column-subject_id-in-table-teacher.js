/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Teachers', 'SubjectId', {
         type: Sequelize.INTEGER
      });
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Teachers', 'SubjectId');
   }
};
