/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', [{
      first_name: 'Bambang',
      last_name: 'Suprapto',
      email: 'bambangsuprapto@sekolah.id',
      phone: '111-999-000',
      SubjectId: 1
    },{
      first_name: 'Rukmana',
      last_name: 'Fatmawati',
      email: 'rukmanafatmawati@sekolah.id',
      phone: '555-786-987',
      SubjectId: 2
    },{
      first_name: 'Butet',
      last_name: 'Naiborhu',
      email: 'butetnaiborhu@sekolah.id',
      phone: '345-678-123',
      SubjectId: 3
    },{
      first_name: 'Yulius',
      last_name: 'Prawinegara',
      email: 'yuliusprawinegara@sekolah.id',
      phone: '021-322-223',
      SubjectId: 4
    },{
      first_name: 'Andrew',
      last_name: 'Wommack',
      email: 'andrewwommack@sekolah.id',
      phone: '021-355-225',
      SubjectId: 5
    },{
      first_name: 'Paul',
      last_name: 'Milligan',
      email: 'paulmilligan@sekolah.id',
      phone: '555-665-556',
      SubjectId: 4
    },{
      first_name: 'Jammy',
      last_name: 'Gracies',
      email: 'jammygracias@sekolah.id',
      phone: '021-333-888',
      SubjectId: 3
    },{
      first_name: 'Sharon',
      last_name: 'Rich',
      email: 'sharonrich@sekolah.id',
      phone: '033-333-888',
      SubjectId: 1
    },{
      first_name: 'Barry',
      last_name: 'Burns',
      email: 'barryburns@sekolah.id',
      phone: '432-111-222',
      SubjectId: 2
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {});
  }
};
