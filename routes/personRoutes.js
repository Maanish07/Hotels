const express = require('express');

const router = express.Router();


app.post('/person',async (req,res) => {
    try{
        const data = req.body 
        const newPerson = new Person(data);

        const response = await newPerson.save();

        console.log('data is saved');

        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'internal Server Error'});

    }
})




