const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,

    },
    price :{
        type : String,
        required : true,

    },
    taste :{
        type : String,
        
    },
    is_drink :{
        type : Boolean,
        
    }
    

})

const MenuItem = mongoose.model('MenuItem',menuItemSchema);

module.exports = MenuItem;
