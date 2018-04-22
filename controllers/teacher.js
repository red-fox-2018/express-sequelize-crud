'use strict';
const Model = require('../models');

class Controller {
  static read_all(callback) {
    Model.Teacher.findAll({order: [['id', 'ASC']]})
      .then(teachers => {
        callback(null, teachers);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static read_one(id, callback) {
    Model.Teacher.findOne({
        where: {
          id: id
        }
      })
      .then(teacher => {
        callback(null, teacher);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static add(firstname, lastname, email, callback) {
    Model.Teacher.create({
        firstname,
        lastname,
        email
      })
      .then(teacher => {
        callback(null, teacher);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static edit(id, firstname, lastname, email, callback) {
    Model.Teacher.update({
        firstname,
        lastname,
        email
      }, {
        where: {
          id: id
        }
      })
      .then(teacher => {
        callback(null, teacher);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static erase(id, callback) {
    Model.Teacher.destroy({
      where: {
        id: id
      }
    })
    .then(teacher => {
      callback(null, teacher);
    })
    .catch(err => {
      callback(err, null);
    })
  }
}

module.exports = Controller;
