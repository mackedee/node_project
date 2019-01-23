
import express from 'express';
import bodyParser from 'body-parser';
import {
  getAll,
  getDog,
  postDog,
  updateDog,
  deleteDog,
} from './routes/routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/users', getAll);
app.get('/users/:user_id', getDog);
app.post('/users', postDog);
app.put('/users/:id', updateDog);
app.delete('/users/:id', deleteDog);


app.listen(80);
