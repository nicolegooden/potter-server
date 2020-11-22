
exports.up = function(knex) {
  return knex.schema
    .createTable('houses', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('headOfHouse');
      table.string('founder');
      table.string('houseGhost');
      table.string('mascot');
      table.string('color1');
      table.string('color2');
      table.string('value1');
      table.string('value2');
      table.string('value3');
      table.string('value4');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('houses');
};
