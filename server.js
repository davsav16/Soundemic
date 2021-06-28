const path = require('path');
const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
const session = require('express-session');
const passport = require('passport');


const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });


const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'super secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

// app.use(session({
//   secret: process.env.DB_SECRET,
//   saveUninitialized: false,
//   resave: false
// }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);



sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});

///loging-off 

router.get('login',(req,res) => {
  //passport 
  res.send('login'); 
})

router.get('logout',(req,res) => {
  //passport 
  res.send('logout'); 
})

//Github
app.get('/auth/github',
  passport.authenticate('github'));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

//Google 
app.get('/auth/google',
  passport.authenticate('google', { 
    scope: ['profile'] }));

route.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });