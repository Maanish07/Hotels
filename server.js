const express = require('express')
const app = express();

const db = require('./db');

app.get('/' ,function(req,res){
    var hello = {
        name : 'hello',
        size : '10 cm',
        is_sambhar : true,
        
    }
    res.send('hello');
    res.send(hello);
    

});

app.get('/' ,function(req,res){
    var customised_idli = {
        name : 'rava',
        size : '10 cm',
        is_sambhar : true,
        
    }
    res.send(customised_idli);
});


var path = '/hello'

if(path == '/hello'){
    app.get(path,function (req, res){
    res.send("welcome to south")
    console.log('hello');
    });
}

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
const PORT = 8000;

app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
    
});








