exports.up = function(knex) {
  return knex.schema
    .createTable('spells', function (table) {
      table.increments('_id').primary();
      table.string('spell');
      table.string('type');
      table.string('effect');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('spells');
};
