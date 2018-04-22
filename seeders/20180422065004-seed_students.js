'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [{
        firstName: 'Sebas',
        lastName: 'Tian',
        gender: 'male',
        birthday: '1 June 1993',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Renner',
        lastName: 'Jou',
        gender: 'female',
        birthday: '2 February 1995',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Climb',
        lastName: 'High',
        gender: 'male',
        birthday: '10 November 1995',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        firstName: 'Shall',
        lastName: 'Tear',
        gender: 'female',
        birthday: '20 October 1990',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
