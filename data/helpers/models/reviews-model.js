const db = require("../../../data/dbConfig"); // dbconfig connects with knexfile
const { findById }  = require('./user-model');

module.exports = {
  findByUser,
  findByRest,
  add,
  update,
  remove,
  find,
  combo,
  comboTwo
};

function find(id) {
  return db("reviews").where("id", id);
}

function findByUser(id) {
  return db("reviews").where("user_id", id);
}

function findByRest(id) {
  return db("reviews").where("restaurant_id", id);
}

function add(body) {
  return db("reviews").insert(body);
}

function update(id, body) {
  return db("reviews")
    .where("id", id)
    .update(body);
}

function remove(id) {
  return db("reviews")
    .where("id", id)
    .del();
}


// function combo(id) {
//     return db.raw(
//         `
//         SELECT restaurants.id as RestaurantID, reviews.restaurant_id as ReviewRestaurantID, restaurants.name, reviews.review_disc, reviews.food_rating, reviews.price_rating, reviews.service_rating, reviews.eat_again
//         FROM reviews
//         JOIN users on reviews.user_id = ${id}
//         JOIN restaurants on reviews.restaurant_id = restaurants.id
//         `
//     )
// }

function combo(id) {
    return db('users')
    .select('users.id', 'reviews.restaurant_id', 'restaurants.name', 'reviews.review_disc', 'reviews.food_rating', 'reviews.price_rating', 'reviews.service_rating', 'reviews.eat_again')
    .from('reviews')
    .join('restaurants', 'restaurants.id', '=', 'reviews.restaurant_id')
    .join('users', 'reviews.user_id', '=', id)
    .where('users.id', id)
}

function comboTwo(id) {
    return db.raw(
        `
        SELECT users.id, reviews.restaurant_id, restaurants.name, reviews.review_disc, reviews.food_rating, reviews.price_rating, reviews.service_rating, reviews.eat_again
        FROM reviews
        JOIN restaurants on restaurants.id = reviews.restaurant_id
        JOIN users on reviews.user_id = users.id
        WHERE users.id = ${id}
        `
    )
}
