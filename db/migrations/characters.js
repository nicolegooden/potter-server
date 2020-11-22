exports.up = function(knex) {
  return knex.schema
   .createTable('characters', function (table) {
    table.increments('_id').primary();
    table.string('boggart');
    table.string('name');
    table.string('house');
    table.string('role');
    table.string('bloodStatus');
    table.string('species').defaultTo('human');
    table.string('school').defaultTo('Hogwarts School of Witchcraft and Wizardry');
    table.boolean('dumbledorsArmy');
    table.boolean('orderOfThePhoenix');
    table.boolean('deathEater');
    table.boolean('ministryOfMagic');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('characters');
};
