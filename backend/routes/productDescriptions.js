const express = require('express')
const Description = require('../models/description')
const router = express.Router()
const {
    getDescription,
    getDescriptions,
    updateDescription,
    createDescription
} = require('../controllers/productController')

router.get('/', getDescriptions)

router.get('/:name', getDescription)

router.patch('/:name', updateDescription)

// Register the POST route with the handler
router.post('/', createDescription);


module.exports = router