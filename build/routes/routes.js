'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAll = exports.deleteDog = exports.updateDog = exports.postDog = exports.getDog = exports.getAll = undefined;

var _pg = require('pg');

var _knex = require('../../db/knex');

var _knex2 = _interopRequireDefault(_knex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getAll = exports.getAll = async function getAll(req, res) {
  var dogs = await _knex2.default.select().from('dogs');
  res.send(dogs);
};

var getDog = exports.getDog = async function getDog(req, res) {
  var dog = await _knex2.default.select().from('dogs').where('id', req.params.dog_id);
  res.send(dog);
};

var postDog = exports.postDog = async function postDog(req, res) {
  await (0, _knex2.default)('dogs').insert({
    first_name: req.body.first_name,
    last_name: req.body.last_name
  });
  var dogs = await _knex2.default.select().from('dogs');
  res.send(dogs);
};

var updateDog = exports.updateDog = async function updateDog(req, res) {
  await (0, _knex2.default)('dogs').where('id', req.params.id).update(_defineProperty({}, req.body.field_name, req.body.field_value));
  var dogs = await _knex2.default.select().from('dogs');
  res.send(dogs);
};

var deleteDog = exports.deleteDog = async function deleteDog(req, res) {
  await (0, _knex2.default)('dogs').where('id', req.params.id).delete();
  var dogs = await _knex2.default.select().from('dogs');
  res.send(dogs);
};

var deleteAll = exports.deleteAll = async function deleteAll(req, res) {
  await (0, _knex2.default)('dogs').delete();
  var dogs = await _knex2.default.select().from('dogs');
  res.send(dogs);
};