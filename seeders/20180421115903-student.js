'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Students',
   [
     {
       firstName: 'John',
       lastName: 'Doe',
       email: 'doe@gmail.com'
     },
     {
       firstName: 'John',
       lastName: 'Falas',
       email: 'falas@gmail.com'
     },
   ], {});
  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
