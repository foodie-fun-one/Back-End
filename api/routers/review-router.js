const express = require("express");
const db = require("../../data/dbConfig"); // dbconfig connects with knexfile
const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");
const reviewModel = require("../../data/helpers/models/reviews-model.js");
const usersModel = require("../../data/helpers/models/user-model");
const verifyToken = require("../../data/helpers/middleware/verifyToken");
const router = express.Router();
router.use(express.json());

//get all reviews by user
router.get("/user/:id", (req, res) => {
  reviewModel
    .findByUser(req.params.id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        errorMessage:
          "An error occured while attempting to get this user's reviews."
      });
    });
});

//get all reviews by restaurant
router.get("/restaurant/:id", (req, res) => {
  reviewModel
    .findByRest(req.params.id)
    .then(rest => {
      res.status(200).json(rest);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage:
          "An error occured while attempting to get this restaurant's reviews."
      });
    });
});

// find combo

// router.get('/combo/:id', (req, res) => {
//     reviewModel.combo(req.params.id)
//     .then(comboing => {
//         res.status(200).json(comboing)
//     })
//     .catch(err => {
//         res.status(500).json({
//             errorMessage: "An error occured while attempting to get this reviews combo."
//         })
//     })
// })

// async combo

router.get("/combo/:id", async (req, res) => {

    const { id } = req.params;

  try {
    const getUserID = await db('users').where({id}).first()
    const reviews = await db("users")
      .select(
        "users.id",
        "reviews.restaurant_id",
        "restaurants.name",
        "reviews.review_disc",
        "reviews.food_rating",
        "reviews.price_rating",
        "reviews.service_rating",
        "reviews.eat_again"
      )
      .from("reviews")
      .join("restaurants", "restaurants.id", "=", "reviews.restaurant_id")
      .join("users", "reviews.user_id", "=", "users.id")
      .where("users.id", getUserID.id)
    res.status(200).json(reviews);
  } catch (error) {
    console.log(error);
  }
});

function findById(id) {
    return db('users')
    .where({ id }).first();
}

//add a review
router.post("/restaurant/:id", (req, res) => {
  req.body.restaurant_id = req.params.id;
  reviewModel
    .add(req.body)
    .then(rest => {
      res.status(201).json(rest);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        errorMessage: "An error occured attempting to add a review."
      });
    });
});

//update a review
router.put("/:id", (req, res) => {
  reviewModel
    .update(req.params.id, req.body)
    .then(review => {
      res.status(200).json(review);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: "An error occured while attempting to update this review."
      });
    });
});

//remove a review
router.delete("/:id", (req, res) => {
  reviewModel
    .remove(req.params.id)
    .then(review => {
      res.status(200).json(review);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: "An error has occured while trying to remove this review."
      });
    });
});

module.exports = router;
