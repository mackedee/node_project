
import express from 'express';
import bodyParser from 'body-parser';
import {
  getAll,
  getDog,
  postDog,
  updateDog,
  deleteDog,
  deleteAll,
} from './routes/routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/dogs', getAll);
app.get('/dogs/:dog_id', getDog);
app.post('/dogs', postDog);
app.put('/dogs/:id', updateDog);
app.delete('/dogs/:id', deleteDog);
app.delete('/dogs')


app.listen(80);
