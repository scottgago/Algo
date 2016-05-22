exports.passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

exports.passport.use(new GitHubStrategy({
    clientID: '95623bd8939d8ef21576',
    clientSecret: '543ba896eba62954f02c0231baee1129558b7b36',
    callbackURL: "http://localhost:3000/login/github/return"
  },
  function(accessToken, refreshToken, profile, cb) {
      return cb(null, profile)
  }
));


exports.passport.serializeUser(function(user, cb) {
    cb(null, user);
});

exports.passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});         

console.log("Initializing authentication module: Complete")
