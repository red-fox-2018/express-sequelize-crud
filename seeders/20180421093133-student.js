'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

     return queryInterface.bulkInsert('Students', [{
        first_name: 'Zen',
        last_name: 'Gomo',
        email: 'zen@mail.com'
      },{
        first_name: 'Troy',
        last_name: 'Fins',
        email: 'fins@mail.com'
      }], {});
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
