const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('./../config/keys');
const User = mongoose.model('users');

//SERIALIZEUSER helps to fetch user details if that recently used, verifies the token
passport.serializeUser((currentUser, done) => {
    done(null, currentUser.id);
    //the above ID is the default ID generated by mongoDB 
});

//to get the ID from cookie and turn it into actual user model
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
       async (accessToken, refreshToken, profile, done) => { //to take user details
            // it checks if User already exists
            const existingUser =  await User.findOne({ googleId: profile.id });
            if(existingUser) { //if already exists
               return done(null, existingUser);
            } 
             //if new user
            const user = await new User({ googleId: profile.id }).save();
            done(null, user);
        } 
        
    )
);

// OLD CODE FOR WHICH WE REFACTORED

/* passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => { //to take user details
            // it checks if User already exists
            User.findOne({ googleId: profile.id })
                .then(existingUser => {
                    if(existingUser) { //if already exists
                        done(null, existingUser);
                    } else { //if new user
                        new User({ 
                            googleId: profile.id,
                            userName: profile.displayName
                        })
                        .save()
                        .then(currentUser => done(null, currentUser));
                    }
                })
        }
    )
); */