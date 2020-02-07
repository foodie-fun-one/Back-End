const express = require('express');
const bc = require('bcryptjs');
const jwt = require('jsonwebtoken');
const reviewModel = require('../../data/helpers/models/reviews-model.js');
const verifyToken = require('../../data/helpers/middleware/verifyToken');
const router = express.Router();
router.use(express.json());

//get all reviews by user
router.get('/user/:id', (req, res) => {
    reviewModel.findByUser(req.params.id)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                errorMessage: "An error occured while attempting to get this user's reviews."
            })
        })
})

//get all reviews by restaurant
router.get('/restaurant/:id', (req, res) => {
    reviewModel.findByRest(req.params.id)
        .then(rest => {
            res.status(200).json(rest.rows[0]);
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: "An error occured while attempting to get this restaurant's reviews."
            })
        })
})


// find combo

router.get('/combo/:id', (req, res) => {
    reviewModel.combo(req.params.id)
    .then(comboing => {
        res.status(200).json(comboing)
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: "An error occured while attempting to get this reviews combo."
        })
    })
})

//add a review
router.post('/restaurant/:id', (req, res) => {
    req.body.restaurant_id = req.params.id;
    reviewModel.add(req.body)
        .then(rest => {
            res.status(201).json(rest);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                errorMessage: "An error occured attempting to add a review."
            })
        })
})

//update a review
router.put('/:id', (req, res) => {
    reviewModel.update(req.params.id, req.body)
        .then(review => {
            res.status(200).json(review);
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: "An error occured while attempting to update this review."
            })
        })
})

//remove a review
router.delete('/:id', (req, res) => {
    reviewModel.remove(req.params.id)
        .then(review => {
            res.status(200).json(review);
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: "An error has occured while trying to remove this review."
            });
        })
})

module.exports = router;

