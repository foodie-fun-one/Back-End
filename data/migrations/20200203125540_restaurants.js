
exports.up = function(knex) {
  return knex.schema.createTable('restaurants', tbl => {
      tbl.increments();

      tbl.string('name', 255)
        .notNullable();
    
      tbl.string('address', 255)

      tbl.string('hours', 255)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('restaurants');
};
