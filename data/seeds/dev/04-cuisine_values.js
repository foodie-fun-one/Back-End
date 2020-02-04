
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cuisine_values').del()
    .then(function () {
      // Inserts seed entries
      return knex('cuisine_values').insert([
        {id: 1, name: 'Italian Cuisine'},
        {id: 2, name: 'Indian Cuisine'},
        {id: 3, name: 'Soul Food'},
        {id: 4, name: 'Thai Food'},
        {id: 5, name: 'Greek Food'},
        {id: 6, name: 'Chinese Food'},
        {id: 7, name: 'Japaneese Cuisine'},
        {id: 8, name: 'Lebanese Cuisine'},
        {id: 9, name: 'American Food'},
        {id: 10, name: 'German Food'},
      ]);
    });
};
