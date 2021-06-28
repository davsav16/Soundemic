// import seed files
const seedComments = require('./comment-seeds');
const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedVotes = require('./vote-seeds');

// import database connection
const sequelize = require('../config/connection');

// seed all data 
const seedAll = async () => {

  await sequelize.sync({ force: true });
  console.log('----- DATABASE SYNCED -----');

  await seedUsers();
  console.log('----- USERS SEEDED -----');
  
  await seedPosts();
  console.log('----- POSTS SEEDED -----');
  
  await seedComments();
  console.log('----- COMMENTS SEEDED -----');

  await seedVotes();
  console.log('----- VOTES SEEDED -----');

  process.exit(0);
};

seedAll();