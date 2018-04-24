'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('students',[
      {
        firstName: 'Bambang',
        lastName: 'Suprapto',
        email: 'bambangsuprapto@student.id',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Rukmana',
        lastName: 'Fatmawati',
        email: 'rukmanafatmawati@student.id',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Butet',
        lastName: 'Naiborhu',
        email: 'butetnaiborhu@student.id',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Yulius',
        lastName: 'Prawiranegara',
        email: 'yuliusprawiranegara@student.id',
      createdAt: new Date(),
      updatedAt: new Date()
      }
    ])
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
