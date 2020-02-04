
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cuisine_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('cuisine_type').insert([
        {id: 1, cuisine_value_id: 7, restaurant_id: 1},
        {id: 2, cuisine_value_id: 4, restaurant_id: 2},
        {id: 3, cuisine_value_id: 9, restaurant_id: 3},
        {id: 4, cuisine_value_id: 8, restaurant_id: 3},
        {id: 5, cuisine_value_id: 10, restaurant_id: 4},
      ]);
    });
};

// {id: 1, name: 'Japanese Place', address: '567 Essex Drive, Hartsville, SC 29550', hours: '8am-9pm'},
// {id: 2, name: 'Thai Place', address: '91 Fairway Road, Neptune, NJ 07753', hours: '8am-5pm'},
// {id: 3, name: 'American Place', address: '7582 Mountainview Court, Middletown, CT 06457', hours: '9am-9pm'},
// {id: 4, name: 'German Place', address: '7099 Virginia St, Circle Pines, MN 55014', hours: '7am-11pm'},

// {id: 1, name: 'Italian Cuisine'},
// {id: 2, name: 'Indian Cuisine'},
// {id: 3, name: 'Soul Food'},
// {id: 4, name: 'Thai Food'},
// {id: 5, name: 'Greek Food'},
// {id: 6, name: 'Chinese Food'},
// {id: 7, name: 'Japaneese Cuisine'},
// {id: 8, name: 'Lebanese Cuisine'},
// {id: 9, name: 'American Food'},
// {id: 10, name: 'German Food'},