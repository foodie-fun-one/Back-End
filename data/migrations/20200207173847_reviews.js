
exports.up = function(knex) {
  return knex.schema.createTable('reviews', tbl => {
      tbl.increments();

      tbl.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users');

      tbl.integer('restaurant_id')
        .notNullable()
        .references('id')
        .inTable('restaurants');


      tbl.string('review_disc', 500)
        .notNullable();
    
      tbl.integer('price_rating')

      tbl.integer('service_rating')

      tbl.integer('food_rating')

      tbl.boolean('eat_again')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('reviews')
};
