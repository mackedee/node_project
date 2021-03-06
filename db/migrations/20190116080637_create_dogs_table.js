exports.up = function(knex, Promise) {
  return knex.schema.createTable('dogs', (table) => {
    table.increments();
    table.string('breed').notNullable();
    table.string('size').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dogs')
};
