
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {id: 1, user_id: 1, restaurant_id: 1, review_disc: 'Very amazing JAPANEESE FOOD!', price_rating: 5, service_rating: 5, food_rating: 5, eat_again: true},
        {id: 2, user_id: 1, restaurant_id: 2, review_disc: 'Wasnt that good tbh', price_rating: 3, service_rating: 2, food_rating: 1, eat_again: false},
        {id: 3, user_id: 2, restaurant_id: 4, review_disc: 'Very amazing GERMAN FOOD!', price_rating: 3, service_rating: 5, food_rating: 5, eat_again: true},
        {id: 4, user_id: 1, restaurant_id: 3, review_disc: 'MEH', price_rating: 3, service_rating: 5, food_rating: 5, eat_again: false},

      ]);
    });
};

// res id
// 1 = Japanese Place
// 2 = Thai Place
// 3 = American Place
// 4 = German Place