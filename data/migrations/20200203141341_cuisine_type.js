exports.up = function(knex) {
    return knex.schema.createTable("cuisine_type", tbl => {
      tbl.increments();
      tbl.integer("cuisine_value_id", 255).notNullable().references('id').inTable("cuisine_values").onDelete("RESTRICT").onUpdate("CASCADE");
      tbl.integer("restaurant_id", 255).notNullable().references('id').inTable("reviews").onDelete("RESTRICT").onUpdate("CASCADE");
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cuisine_type");
  };
  