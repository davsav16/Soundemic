const { Vote } = require('../models');

const voteData = [
    {
        user_id: '4',
        post_id: '1'
      },
      {
        user_id: '4',
        post_id: '2'
      },
      {
        user_id: '1',
        post_id: '5'
      },
      {
        user_id: '3',
        post_id: '4'
      },
      {
        user_id: '2',
        post_id: '2'
      }
];

const seedVotes = () => Vote.bulkCreate(voteData, { returning: true });

module.exports = seedVotes;