require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose') //require mongoose package

//express app
const app=express()

//MIDDLEWARE
app.use((req,res,next) =>{
    console.log(req.path, req.method) //log requests coming in to console
    next()
})

//request object and response object to send backt to browser
app.get('/', (req,res) =>{
    res.json({mssg: 'Welcome'})
})

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{ //after connected to db
        console.log('MongoDB connected!')
    })
    .catch((error) =>{
        console.log(error)
    })

//listen on port for requests
app.listen(process.env.PORT, () =>{
    console.log('listening on port 4000!')
})


// e9bWkcIhAtDiUMaK mongo password 1
//g4oIGq8qhC6y9NDL pass 2