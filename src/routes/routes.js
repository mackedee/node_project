import { Client } from 'pg';
import knex from '../../db/knex';

export const getAll = async (req, res) => {
  const dogs = await knex.select().from('dogs');
  res.send(dogs);
}

export const getDog = async (req, res) => {
  const dog = await knex.select().from('dogs').where('id', req.params.dog_id);
  res.send(dog);
};

export const postDog = async (req, res) => {
  await knex('dogs').insert({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  })
  const dogs = await knex.select().from('dogs');
  res.send(dogs);
};

export const updateDog = async (req, res) => {
  await knex('dogs').where('id', req.params.id)
    .update({
      [req.body.field_name]: req.body.field_value,
    });
  const dogs = await knex.select().from('dogs');
  res.send(dogs);
};

export const deleteDog = async (req, res) => {
  await knex('dogs').where('id', req.params.id).delete();
  const dogs = await knex.select().from('dogs');
  res.send(dogs);
};

export const deleteAll = async (req, res) => {
  await knex('dogs').delete();
  const dogs = await knex.select().from('dogs');
  res.send(dogs);
}
