exports.up = function(knex) {
    return knex.schema.createTable("reviews", tbl => {
      tbl.increments();
      tbl.integer("user_id", 255).notNullable().references('id').inTable("user").onDelete("RESTRICT").onUpdate("CASCADE");
      tbl.integer("restaurant_id", 255).notNullable().references('id').inTable("restaurants").onDelete("RESTRICT").onUpdate("CASCADE");
      tbl.string("review_disc", 255).notNullable();
      tbl.integer('price_rating');
      tbl.integer('service_rating');
      tbl.integer('food_rating');
      tbl.boolean('eat_again');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("reviews");
  };
  