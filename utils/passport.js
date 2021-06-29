const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy; 
const api = require('/index.js');

passport.use(new GitHubStrategy ({
    clientID:b298404790358d6d3b61, 
    clientSecret:"474c275f6bdc7a03b128a7e73dfc00ad6092fada",
    callbackURL:'https://soundemic.herokuapp.com/'
}, 

function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));   
