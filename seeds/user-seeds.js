// import User model
const { User } = require('../models');

// array of data for User class
const userData = [
  {
    firstName: 'Natalie',
    lastName: 'Smith',
    email: 'natalie.smith12345@gmail.com',
    password: 'Password1',
    socialSite: 'Facebook', 
    bio: 'I like Rock music and concerts hit me up if you want to rock!',
},
  {
    firstName: 'Sarah',
    lastName: 'Jimenez',
    email: 'sarah.jimenez12345@gmail.com',
    password: 'Password2',
    socialSite: 'Github', 
    bio: 'I like to pop and lock hit me up if you want to jam out and dance to your favorite jam!',
  },
  {
    firstName: 'Kate',
    lastName: 'Johnson',
    email: 'kate.johnson12345@gmail.com',
    password: 'Password3',
    socialSite: 'Facebook', 
    bio: 'I like pop music and top 40 hit me up to talk about the most current songs!',
  },
  {
    firstName: 'David',
    lastName: 'Carillo',
    email: 'david.carillo12345@gmail.com',
    password: 'Password4',
    socialSite: 'Github', 
    bio: 'I like latin and EDM hits hit me up if you like Enrique Iglesias!',
  },
];

// create and insert multiple Users using userData
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;