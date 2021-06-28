const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
  res.render('home',);
});

router.get('/feed', (req, res) => {
  // res.render('feed', {
  //   id: 1,
  //   artist: 'don',
  //   title: 'Yolo',
  //   genre: 'rock',
  //   created_at: new Date(),
  //   vote_count: 10,
  //   comments: [{}, {}],
  //   user: {
  //     firstName: 'Juan',
  //     lastName: 'McDougal'
  //   }
  // })
  Post.findAll({
    attributes: [
      'id',
      'artist',
      'title',
      'genre',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['firstName', 'lastName']
        }
      },
      {
        model:User,
        attributes: ['firstName', 'lastName']
      }
    ]
  })
  .then(dbPostData => {
    const posts = dbPostData.map(post => post.get({ plain: true }));
    res.render('feed', {posts} )
    // const posts = dbPostData.map(post => post.get({ plain: true }));
    // res.render('feed', { posts });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/user', (req, res) => {
  res.render('user');
});

module.exports = router;