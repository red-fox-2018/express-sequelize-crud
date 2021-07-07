/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Teachers', 'email', {
         type: Sequelize.STRING
      });
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Teachers', 'email');
   }
};
