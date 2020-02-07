const db = require("../../../data/dbConfig"); // dbconfig connects with knexfile

module.exports = {
  findByUser,
  findByRest,
  add,
  update,
  remove,
  find,
  findReviewForUser
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

function findReviewForUser(id) {
    return db('reviews')
    .where('id', id)
    .select(id, 'restaurants.id', 'reviews.restaurant_id', 'restaurants.name', 'reviews.review_disc', 'reviews.food_rating', 'reviews.price_rating', 'reviews.service_rating', 'reviews.eat_again')
    .from('reviews')
    .join('users', 'reviews.user_id', "=", id)
    .join('restaurants', 'reviews.restaurant_id', "=", 'restaurants.id')
}
