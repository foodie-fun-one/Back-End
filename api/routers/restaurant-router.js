const express = require('express');
const bc = require('bcryptjs');
const jwt = require('jsonwebtoken');
const restModel = require('../../data/helpers/models/restaurant-model.js');
const verifyToken = require('../../data/helpers/middleware/verifyToken');

const router = express.Router();
router.use(express.json());

//get all restaurants
router.get('/', verifyToken, (req, res) => {
    restModel.find()
        .then(rest => {
            res.status(200).json(rest)
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: "An error has occured attempting to retrieve a list of restaurants."
            })
        })
})

//get restaurant by id
router.get('/:id', verifyToken, (req, res) => {
    restModel.findById(req.params.id)
        .first()
        .then(rest => {
            if(rest === undefined || rest.length === 0) {
                res.status(404).json({
                    errorMessage: "A restaurant with this ID could not be found."
                })
            }
            else {
                res.status(200).json(rest);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                errorMessage: "An error has occured attempting to acquire information on this restaurant."
            })
        })
})

//add restaurant
router.post('/', verifyToken, (req, res) => {
    restModel.add(req.body)
        .then(rest => {
            const keys = Object.keys(req.body);

            if(keys.includes('name') && keys.includes('hours') && keys.includes('address')) {
                console.log(res)
                res.status(201).json({
                    message: `Restaurant has been created`,
                    id: `${req.req_id}`
                });
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                errorMessage: "An error occured attempting to add this restaurant."
            })
        })
})

//update restaurant
router.put('/:id', verifyToken, (req, res) => {
    restModel.update(req.params.id, req.body)
        .then(rest => {
            restModel.findById(req.params.id)
                .then(item => {
                    if(item.length === 0) {
                        res.status(404).json({
                            errorMessage: "A restaurant with this ID could not be found."
                        })
                    }
                    else {
                        const keys = Object.keys(req.body);

                        if(keys.includes('name') || keys.includes('address') || keys.includes('hours')) {
                            res.status(200).json(rest);
                        }
                        else {
                            res.status(400).json({
                                errorMessage: "Please ensure all fields are included.(name, address, and hours)."
                            })
                        }
                    }
                })
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: "An error occured while attempting to update this restaurant."
            })
        })
})

//remove restaurant
router.delete('/:id', verifyToken, (req, res) => {
    restModel.remove(req.params.id)
        .then(rest => {
            if(rest === 1) {
                res.status(200).json(rest);
            }
            else {
                res.status(404).json({
                    errorMessage: "A restaurant with this ID could not be found."
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                errorMessage: "An error occured attempting to delete the restaurant with the following ID."
            })
        })
})

module.exports = router;