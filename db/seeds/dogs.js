exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {
          breed: 'German Shepard',
          size: 'large'
        }, {
          breed: 'Golden Retriever',
          size: 'medium'
        }, {
          breed: 'Dashound',
          size: 'small'
        }
      ]);
    });
};
