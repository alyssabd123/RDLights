const express = require('express')
const Description = require('../models/description')
const router = express.Router()
const {
    createDescription,
    getDescription,
    getDescriptions,
} = require('../controllers/productController')

//Get 
router.get('/', getDescriptions)

router.get('/:name', getDescription)

router.post('/', createDescription)

router.delete('/:id', (req,res) => {
    res.json({mssg:'DELETE a description'})
})

router.patch('/:id', (req,res) => {
    res.json({mssg:'PATCH a description'})
})

module.exports = router