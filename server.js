require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose') //require mongoose package
const productRoutes= require('./routes/productDescriptions')

//express app
const app=express()

//MIDDLEWARE
app.use(express.json())

app.use((req,res,next) =>{
    console.log(req.path, req.method) //log requests coming in to console
    next()
})

//routes
app.use('/api/descriptions',productRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{ //after connected to db
        console.log('MongoDB connected!')
    })
    .catch((error) =>{
        console.log(error)
    })

//listen on port for requests
app.listen(process.env.PORT, async () =>{
    console.log('listening on port 4000!')
    // // Dynamically import the 'open' module
    // const open = (await import('open')).default;
    // await open(`http://localhost:${process.env.PORT}`);
})
