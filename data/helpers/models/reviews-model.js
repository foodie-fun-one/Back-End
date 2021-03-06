const db = require("../../../data/dbConfig"); // dbconfig connects with knexfile


module.exports = {
  findByUser,
  findByRest,
  add,
  update,
  remove,
  find,
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
//     return db.users.raw(
//         `
//         SELECT users.id, reviews.restaurant_id, restaurants.name, reviews.review_disc, reviews.food_rating, reviews.price_rating, reviews.service_rating, reviews.eat_again
//         FROM reviews
//         JOIN restaurants on restaurants.id = reviews.restaurant_id
//         JOIN users on reviews.user_id = users.id
//         WHERE users.id = ${id}
//         `
//     )
// }
