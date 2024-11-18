const Description = require('../models/description')
const mongoose = require('mongoose')


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

// Update a description by name
const updateDescription = async (req, res) => {
    const name = req.params.name;
    const updates = req.body;

      // Log the name and updates to verify the correct values
      console.log("Updating description with name:", name);
      console.log("Updates:", updates);

    try {
        const data = await Description.findOneAndUpdate({ name: name }, updates, {
            new: true, // return the updated document
            runValidators: true, // validate updates against the schema
        });

        if (!data) {
            return res.status(404).json({ error: "Description not found" });
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports= {
    getDescription,
    getDescriptions,
    updateDescription,
    createDescription
}