exports.up = function(knex) {
    return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl.string("username", 128).notNullable().unique();
      tbl.string("email", 255).notNullable().unique();
      tbl.string("password", 128).notNullable();
      tbl.string("city", 255).notNullable();
    })

    .createTable("restaurants", tbl => {
        tbl.increments();
        tbl.string("name", 255).notNullable();
        tbl.string("address", 255).notNullable();
        tbl.string("hours", 128).notNullable();
      })

      .createTable("reviews", tbl => {
        tbl.increments();
        tbl.integer("user_id", 255).notNullable().references('id').inTable("users").onDelete("CASCADE").onUpdate("CASCADE");
        tbl.integer("restaurant_id", 255).notNullable().references('id').inTable("restaurants").onDelete("CASCADE").onUpdate("CASCADE");
        tbl.text("review_disc").notNullable();
        tbl.float('price_rating');
        tbl.float('service_rating');
        tbl.float('food_rating');
        tbl.boolean('eat_again');
      })

      .createTable("cuisine_values", tbl => {
        tbl.increments().unique();
        tbl.string("name", 255).notNullable();
      })
      
      .createTable("cuisine_type", tbl => {
        tbl.increments();
        tbl.integer("cuisine_value_id", 255).notNullable().references('id').inTable("cuisine_values").onDelete("CASCADE").onUpdate("CASCADE");
        tbl.integer("restaurant_id", 255).notNullable().references('id').inTable("reviews").onDelete("CASCADE").onUpdate("CASCADE");
      });

  };

  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("restaurants")
    .dropTableIfExists("reviews")
    .dropTableIfExists("cuisine_type")
    .dropTableIfExists("cuisine_values");
  };
  
