const express = require("express");
const router = require("express").Router();
const verifyToken = require("../../data/helpers/middleware/verifyToken");
const CuisineTypeModel = require("../../data/helpers/models/cuisine_type-model");
const validateCuisineType = require("../../data/helpers/middleware/validateCuisineType");
router.use(express.json());

// /api/cuisinetype/

// GET ALL CUISINE TYPE COMBOS

router.get("/", verifyToken, (req, res) => {
  CuisineTypeModel.find()
    .then(types => {
      res.status(200).json(types);
    })
    .catch(err => {
      res.status(500).json({
        serverMessage: `There is something wrong with the server.`
      });
    });
});

// GET cuisine type DB ID

router.get("/:id", verifyToken, (req, res) => {
  const { id } = req.params; // gets id from body

  CuisineTypeModel.findById(id)
    .then(cuisineType => {
      if (cuisineType) {
        res.status(200).json(cuisineType);
      } else {
        res.status(404).json({
          errorMessage: `Could not find cuisine type combo by given ID.`
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        serverMessage: `There is something wrong with the server.`
      });
    });
});

// GET cuisine type by value id

router.get("/value/:id", verifyToken, (req, res) => {

  const { id } = req.params;

  CuisineTypeModel.findByValue(id)
    .then(cuisineTypeValue => {
      if (cuisineTypeValue) {
        res.status(200).json(cuisineTypeValue.rows);
      } else {
        res.status(404).json({
          errorMessage: `Could not find cuisine type combo by given ID.`
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        serverMessage: `There is something wrong with the server.`
      });
    });
});

// GET cuisine type by restaurant ID

router.get("/restaurant/:id", verifyToken, (req, res) => {
    const { id } = req.params;
    CuisineTypeModel.findByRestaurant(id)
      .then(cuisineTypeRes => {
        if (cuisineTypeRes) {
          res.status(200).json(cuisineTypeRes);
        } else {
          res.status(404).json({
            errorMessage: `Could not find cuisine type combo by given ID.`
          });
        }
      })
      .catch(error => {
        res.status(500).json({
          serverMessage: `There is something wrong with the server.`
        });
      });
  });

// POST new cuisine type combo

router.post("/", verifyToken, validateCuisineType, async (req, res) => {
  const cuisineTypeData = req.body;
  const validateResult = validateCuisineType(cuisine_type);


  try {
    if (validateResult.isSuccessfull === true) {
        const add = await CuisineTypeModel.add(cuisineTypeData);
        res.status(200).json(add);
    }
  } catch (error) {
    res.status(500).json({
      serverMessage: `There is something wrong with the server.`
    });
  }
});

// update a combo

router.put('/:id', verifyToken, validateCuisineType, (req, res) => {
    const validateResult = validateCuisineType(cuisine_type);
    const { id } = req.params;
    const changes = req.body;
  
    CuisineTypeModel.findById(id)
    .then(cuisineComboFound => {
      if (cuisineComboFound) {
        if (validateResult.isSuccessfull === true) { 
            CuisineTypeModel.update(changes, id)
            .then(updatedCuisineCombo => {
                res.status(201).json(updatedCuisineCombo);
              });   
        }
      } else {
        res.status(404).json({ 
            errorMessage: `Could not find cuisine combo by given ID.`
        });
      }
    })
    .catch(error => {
        res.status(500).json({
            serverMessage: `There is something wrong with the server.`
        })
    })
  });

// remove a combo


router.delete('/:id', verifyToken, (req, res) => {
    const { id } = req.params;

    CuisineTypeModel.remove(id)
    .then(deleted => {
        if (deleted) {
            res.status(204).json({
                removed: deleted
            })
        } else {
          res.status(404).json({ 
              errorMessage: `Could not find cuisine type combo by given ID.`
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