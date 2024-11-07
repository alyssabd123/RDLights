const express = require('express')
const Description = require('../models/description')
const router = express.Router()
const {
    getDescription,
    getDescriptions,
} = require('../controllers/productController')


router.get('/', getDescriptions)

router.get('/:name', getDescription)

router.patch('/:id', (req,res) => {
    res.json({mssg:'PATCH a description'})
})

module.exports = router