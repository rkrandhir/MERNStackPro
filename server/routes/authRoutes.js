const passport = require('passport');
// to get the access token authority
require('https').globalAgent.options.rejectUnauthorized = false;
module.exports = app => {
    app.get('/auth/google', 
        passport.authenticate('google', {
            scope:  ['profile','email']
        })
    );

    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys')
        }
        );
    //to logout
    app.get('/api/logout', (req, res) => {
        req.logout();
        //it takes the cookie and kill the ID
        res.redirect('/')
    })
    //to get the current user
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })

};