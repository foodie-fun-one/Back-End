
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        {id: 1, name: 'Japanese Place', address: '567 Essex Drive, Hartsville, SC 29550', hours: '8am-9pm'},
        {id: 2, name: 'Thai Place', address: '91 Fairway Road, Neptune, NJ 07753', hours: '8am-5pm'},
        {id: 3, name: 'American Place', address: '7582 Mountainview Court, Middletown, CT 06457', hours: '9am-9pm'},
        {id: 4, name: 'German Place', address: '7099 Virginia St, Circle Pines, MN 55014', hours: '7am-11pm'},
      ]);
    });
};
