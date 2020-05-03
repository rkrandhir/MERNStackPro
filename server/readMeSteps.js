// created by RANDHIR 
// DATE: 11 April 2020

/*
STEPS:


=============================================
installations
=============================================

npm install --save express
npm install --save passport passport-google-oauth20 (UDEMY19)
npm install --save nodemon //helps to start the server on every change detection
npm install --save mongoose
npm install --save cookie-server //U46
npm install --save concurrently //U60

client directory installation  - inside client folder
npm install http-proxy-middleware //u61
npm install --save redux react-redux react-router-dom
npm install --save materialize-css@next
npm install --save axios redux-thunk

HEROKU -- deploy project
    1. signup heroku.com rkrandhir.in/jpur
    2. install git
    3. in GIT command
        a) git init
        b) git add .
        c) git commit -m "initial commit"
    4. install HEROKU Cli (https://devcenter.heroku.com/articles/heroku-cli)
    5. In giv cmd, heroku -v
    6. The heroku cli has been installed

=============================================
FIRST TIME DEPLOYMENT
=============================================
+ Create Heroku account
+ Commit our codebase to git
+ Install Heroku CLI and Create App
+ Deploy App with Git
+ Heroku deploys project
(Refer above steps under INSTALLATION for details)

=============================================
SUBSEQUENT DEPLOYMENT
=============================================
+ Commit codebase to GIT
+ Deploy app with GIT

=============================================
Google OAuth 
=============================================
+ Passport JS (PassportJs.org) #19 udemy
    + Passport -- General helper for handling auth in Express apps
    + Passport Strategy -- Helpers for authenticating with one very specific method (Email/password, Google, Facebook etc)


=============================================
server folder structure
=============================================

+ server
    + congig - Protected API Keys or settings
    + routes - All route handlers, grouped by purpose
    + services - Helper modules and business logic
    - Index.js

=============================================
AUTHENTICATION FLOW (U47)
=============================================

+ Request comes in 
    |
    |
-----------  
| Request |             //request sent to route handler 
 ----------
    |
 -----------------  
| Cookie Session |      //Extracts cookies data
 -----------------
    |   
 -----------  
| Passport |            //Pulls user id out of cookie data  
 -----------
    |
 --------------------  
| Deserialize User  |  //Functions we write to turn user id into an user
 --------------------
    |
 --------------------------------------------------------  
| User model instance added to req object as 'req.user' |  
 --------------------------------------------------------
    
*/