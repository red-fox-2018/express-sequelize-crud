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


    return queryInterface.bulkInsert('Teachers', [{
        first_name: 'Bambang',
        last_name:'Suprapto',
        Email:'bambangsuprapto@sekolah.id'
      },{
        first_name: 'Rukmana',
        last_name:'Fatmawati',
        Email:'rukmanafatmawati@sekolah.id'
      },{
        first_name: 'Butet',
        last_name:'Naiborhu',
        Email:'butetnaiborhu@sekolah.id'
      },{
        first_name: 'Yulius',
        last_name:'Prawiranegara',
        Email:'yuliusprawiranegara@sekolah.id'
      

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
