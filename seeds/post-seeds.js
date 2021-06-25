
const { Post } = require('../models');

// array of data for Post class
const postData = [
  {
    artist: 'lilwayne',
    title: `balk opps`,
    genre: 'rock',
    user_id: '1'
  },
  {
    artist: 'johnyboy',
    title: `live it up`,
    genre: 'rock',
    user_id: '1'
  }
];

// create and insert multiple Posts using postData
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;