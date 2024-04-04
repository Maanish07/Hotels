const express = require('express')
const app = express();
require('dotenv').config();
const db = require('./db');
app.use(express.json());
const passport = require('passport');
const { Passport } = require('passport');
const LocalStrategy = require('passport-local').Strategy;






const logRequest = (req, res, next ) => {
    console.log(`[${new Date().toLocaleDateString()}] Request made to : ${req.originalUrl}`);
    next();
}
app.use(logRequest);




passport.use(new LocalStrategy(async (username , password , done) => {
    try {
        console.log('Received credentials: ', USERNAME , password);
        const username = await Person.findOne({username : USERNMAE});
        if(!user){
            return done(null, false, {message : 'Incorrect Username.'});
        }
        const isPasswordMatch = user.password === password ? true : false;
        if(isPasswordMatch){
            return done(null, user);
        }
        else{
            return done(null, false, {message : 'Incorrect password.'});
        }
    }catch (err){
        return done(err);
    }
}))

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session : false});
app.get('/',localAuthMiddleware ,function(req,res){
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
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
    
});








