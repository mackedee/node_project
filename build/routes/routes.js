'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteDog = exports.updateDog = exports.postDog = exports.getDog = exports.getAll = undefined;

var _pg = require('pg');

var _knex = require('../../db/knex');

var _knex2 = _interopRequireDefault(_knex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getAll = exports.getAll = async function getAll(req, res) {
  var users = await _knex2.default.select().from('users');
  res.send(users);
};

var getDog = exports.getDog = async function getDog(req, res) {
  var user = await _knex2.default.select().from('users').where('id', req.params.user_id);
  res.send(user);
};

var postDog = exports.postDog = async function postDog(req, res) {
  await (0, _knex2.default)('users').insert({
    first_name: req.body.first_name,
    last_name: req.body.last_name
  });
  var users = await _knex2.default.select().from('users');
  res.send(users);
};

var updateDog = exports.updateDog = async function updateDog(req, res) {
  await (0, _knex2.default)('users').where('id', req.params.id).update(_defineProperty({}, req.body.field_name, req.body.field_value));
  var users = await _knex2.default.select().from('users');
  res.send(users);
};

var deleteDog = exports.deleteDog = async function deleteDog(req, res) {
  await (0, _knex2.default)('users').where('id', req.params.id).delete();
  var users = await _knex2.default.select().from('users');
  res.send(users);
};
