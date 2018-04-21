'use strict';
const Model = require('../models');

class Controller {
  static read_all(callback) {
    Model.Teacher.findAll()
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

  static add(first_name, last_name, email, callback) {
    Model.Teacher.create({
        first_name,
        last_name,
        email
      })
      .then(teacher => {
        callback(null, teacher);
      })
      .catch(err => {
        callback(err, null);
      })
  }

  static edit(id, first_name, last_name, email, callback) {
    Model.Teacher.update({
        first_name,
        last_name,
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