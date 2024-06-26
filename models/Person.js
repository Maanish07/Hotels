const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,

    },
    age: {
        type : Number,
        required : true
    },
    work: {
        type: String,
        enum : ['chef','waiter','manger'],
        required : true,
    },
    mobile: {
        type : String,
        required : true,
        unique : true,
    },
    email: {
        type : String,
        required : true,
        unique: true,
    },
    address: {
        type : String,

    },
    username :{
        type : String,
        required : true,

    },
    password : {
        type : String,
        required : true,
    }
});


const Person = mongoose.model('Person', personSchema);
module.export = Person;