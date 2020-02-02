
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.string('username', 128).notNullable().unique();
      tbl.string('email', 255).notNullable().unique();
      tbl.string('password', 128).notNullable();
      tbl.date('data_created');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
