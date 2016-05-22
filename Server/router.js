const server = require('../server.js'),
	  auth = require('./Authentication/authentication.js'),
	  db = require('./Database/database.js')

server.app.use(auth.passport.initialize());
server.app.use(auth.passport.session());

/**

    Authentication Routes

**/

server.app.get('/login',
    function(req, res){
        res.render('login');
  }
);

server.app.get('/login/github',
  auth.passport.authenticate('github'));

server.app.get('/login/github/return', 
    auth.passport.authenticate('github',
    {failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/profile');
    }
);

/**

    Main Routes

**/

server.app.get('/',
  function(req, res) {
    res.render('home', { user: req.user });
  }
);

server.app.get('/profile',
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res){
    // TODO: render main page
    }
);

console.log("Initializing Router: Complete")
