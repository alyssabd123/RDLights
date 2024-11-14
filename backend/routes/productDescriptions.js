const express = require('express')
const Description = require('../models/description')
const router = express.Router()
const {
    getDescription,
    getDescriptions,
    updateDescription
} = require('../controllers/productController')

router.get('/', getDescriptions)

router.get('/:name', getDescription)

router.patch('/:name', updateDescription)


module.exports = router