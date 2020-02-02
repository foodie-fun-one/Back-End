const router = require('express').Router();
const knex = require('knex');
const config = require('../../knexfile');
const db = knex(config.development);
const restricted = require('../../auth/auth-restricted');
const model = require('./users-model');

// GET REQUEST

router.get('/:id', (req, res) => {
    const { id } = req.params;
    model.findById(id)
    .then(user => {
        if (user) {
            res.json(user)
        } else {
            res.status(404).json({
                errorMessage: `Could not find user with given ID.`
            })
        }
    })
    .catch(error => {
        res.status(500).json({
            errorMessage: `Failed to get user.`
        })
    })
})


