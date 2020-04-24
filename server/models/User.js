const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
//this is ES6 destrcturing syntax and same as above commented line 
const { Schema } = mongoose; 

const userSchema = new Schema({
    googleId: String,
    userName: String
});

mongoose.model('users', userSchema)