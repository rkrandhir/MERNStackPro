const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();
//crating instance
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken) => { //to take user details
            console.log(accessToken)
        }
    )
);

app.get('/auth/google', 
    passport.authenticate('google', {
        scope:  ['profile','email']
    })
);

app.get('/auth/google/callback', passport.authenticate('google'))

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