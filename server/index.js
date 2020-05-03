const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });


/*****************/
/* 
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://randhir:jamshedpur12#@cluster0-qikmc.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test");
  console.log("err $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$" + err)
  client.close();
}); */

/*********************/

const app = express();

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey] //it should be array, allows multiple key
    })
);

app.use(passport.initialize());
app.use(passport.session());

//crating instance
require('./routes/authRoutes')(app);


//if env variable defined by HEROKU process || use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);

 


/*
// get - watch for incoming req with the MSInputMethodContext
// '/' - watch for requests 
// req - incoming req Obj
// res - outgoing res Obj
// res.send  - immediately send some JSON back to who ever made this req

METHOD:
app.get/post/put/delete/patch
app.put == update all the properties of something
app.patch == update one or two properties of something

*/