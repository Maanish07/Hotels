
const { Passport, default: passport } = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('/models/Person')

passport.use(new LocalStrategy(async (username , password , done) => {
    try {
        console.log('Received credentials: ', USERNAME , password);
        const user = await Person.findOne({username : USERNMAE});
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
}));


module.export =  passport;