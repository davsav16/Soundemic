const path = require('path');
const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// app.use(session({
//   secret: process.env.DB_SECRET,
//   saveUninitialized: false,
//   resave: false
// }));

app.engine('hbs', exphbs({ extname: 'hbs' })); // setting up express to use handlebars templating engine
app.set('view engine', 'hbs'); // setting up default view engine



sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});
