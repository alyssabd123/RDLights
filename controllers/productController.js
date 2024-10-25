const Description = require('../models/description')
const mongoose = require('mongoose')

//get all descriptions
const getDescriptions = async(req,res) => {
    const descriptions= await Description.find({}).sort({createdAt: -1}) //get all leave {} blank, desending order

    res.status(200).json(descriptions)
}

//get a single description
const getDescription = async(req,res) => {
    const {name} = req.params

    if(!mongoose.Types.ObjectId.isValid(name)){
        return res.status(404).json({error: 'No such descriptions'})
    }

    const description = await Description.findOne({name: name})

    if(!description) {
        return res.status(404).json({error: 'No such description'})
    }

    res.status(200).json(description)
}


//delete a description

//update a descriptions

//create a description
const createDescription =  async(req,res) => {
    console.log(req.body); 
    const {name, description} = req.body

    //add doc to db
    try{
        const product= await Description.create({name, description})
        res.status(200).json(product)
    }catch(error){
        res.status(200).json({error: error.message})
    }
}

module.exports= {
    createDescription,
    getDescription,
    getDescriptions,
}