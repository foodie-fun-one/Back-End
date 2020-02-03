const express = require('express');
const router = require("express").Router();
const verifyToken = require('../../data/helpers/middleware/verifyToken');
const CuisineValuesModel = require("../../data/helpers/models/cuisine_values-model");

router.use(express.json());


// GET all cuisine values

router.get('/', verifyToken, (req, res) => {
    CuisineValuesModel.find()
    .then(cuisines => {
        res.status(200).json(cuisines);
    })
    .catch(err => {
        res.status(500).json({
            serverMessage: `There is something wrong with the server.`
        })
    })
})

// GET cuisine value by ID

router.get('/:id', verifyToken, (req, res) => {
    const { id } = req.params;

    CuisineValuesModel.findById(id)
    .then(cuisine => {
        if (cuisine) {
            res.status(200).json(cuisine)
        } else {
            res.status(404).json({
                errorMessage: `Could not find cuisine by given ID.`
            })
        }
    })
    .catch(error => {
        res.status(500).json({
            serverMessage: `There is something wrong with the server.`
        })
    })
})

// POST new cuisine value

router.post('/', verifyToken, (req, res) => {
    const cuisineData = req.body;
    CuisineValuesModel.add(cuisineData)
    .then(cuisineSaved => {
        res.status(201).json(cuisineSaved[0])
    })
    .catch(error => {
        res.status(500).json({
            serverMessage: `There is something wrong with the server.`
        })
    })
})


// PUT/UPDATE a cuisine value

router.put('/:id',verifyToken, (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    CuisineValuesModel.findById(id)
    .then(cuisineFound => {
      if (cuisineFound) {
        CuisineValuesModel.update(changes, id)
        .then(updatedCuisineValue => {
          res.status(201).json(updatedCuisineValue);
        });
      } else {
        res.status(404).json({ 
            errorMessage: `Could not find cuisine by given ID.`
        });
      }
    })
    .catch(error => {
        res.status(500).json({
            serverMessage: `There is something wrong with the server.`
        })
    })
  });

  // DELETE a cuisine value

  router.delete('/:id', verifyToken, (req, res) => {
      const { id } = req.params;

      CuisineValuesModel.remove(id)
      .then(deleted => {
          if (deleted) {
              res.status(204).json({
                  removed: deleted
              })
          } else {
            res.status(404).json({ 
                errorMessage: `Could not find cuisine by given ID.`
            });
          }
      })
      .catch(error => {
        res.status(500).json({
            serverMessage: `There is something wrong with the server.`
        })
    })
  })

module.exports = router;