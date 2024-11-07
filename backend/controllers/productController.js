const Description = require('../models/description')
const mongoose = require('mongoose')

//get all descriptions
const getDescriptions = async(req,res) => {
    const data = await Description.find({}) //get all leave {} blank, desending order

    res.status(200).json(data)
}

//get a single description
const getDescription = async(req,res) => {
    const name = req.params.name

    const data = await Description.findOne({name: name})

    res.status(200).json(data)
}

//update a descriptions

module.exports= {
    getDescription,
    getDescriptions,
}