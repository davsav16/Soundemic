// import Comment model
const { Comment } = require('../models');

// array of data for Comment class
const commentData = [
  {
    comment: `I found the music relatable. Eager to listen to more`,
    user_id: '4',
    post_id: '1'
  },
  {
    comment: `I love this band!`,
    user_id: '4',
    post_id: '2'
  },
  {
    comment: `This is going on my playlist for sure!`,
    user_id: '1',
    post_id: '5'
  },
  {
    comment: `Can't wait to listen to this albulm!`,
    user_id: '3',
    post_id: '4'
  },
  {
    comment: `I like the alternative rock genre`,
    user_id: '2',
    post_id: '2'
  }
];

// create and insert multiple Comments using commentData
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;