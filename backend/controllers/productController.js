const Description = require('../models/description')
const mongoose = require('mongoose')

//get all descriptions
const getDescriptions = async(req,res) => {
    const descriptions= await Description.find({}) //get all leave {} blank, desending order

    res.status(200).json(descriptions)
}

//get a single description
const getDescription = async(req,res) => {
    const name = req.params.names;

    const description = await Description.findOne({name: name});

    if(!description) {
        return res.status(404).json({error: 'No such description'})
    }

    res.status(200).json(description)
}

//update a descriptions

module.exports= {
    getDescription,
    getDescriptions,
}