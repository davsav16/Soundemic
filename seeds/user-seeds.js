// import User model
const { User } = require('../models');

// array of data for User class
const userData = [
  {
    username: 'Musicman123',
    password: 'Password1'
  },
  {
    username: 'MusicKing95',
    password: 'Password2'
  },
  {
    username: 'ImagineDragonsLover',
    password: 'Password3'
  },
  {
    username: 'Songsaremyjams33',
    password: 'Password4'
  }
];

// create and insert multiple Users using userData
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;