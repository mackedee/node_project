'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./routes/routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.get('/dogs', _routes.getAll);
app.get('/dogs/:dog_id', _routes.getDog);
app.post('/dogs', _routes.postDog);
app.put('/dogs/:id', _routes.updateDog);
app.delete('/dogs/:id', _routes.deleteDog);
app.delete('/dogs');

app.listen(80);