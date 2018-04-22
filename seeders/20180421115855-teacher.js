'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers',
    [
      {
        firstName: 'Khabib',
        lastName: 'Nurmagamedov',
        email: 'khabib@gmail.com'
      },
      {
        firstName: 'Tony',
        lastName: 'Ferguson',
        email: 'tony@gmail.com'
      }
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
