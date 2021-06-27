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
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  
  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');
  
  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  await seedVotes();
  console.log('\n----- VOTES SEEDED -----\n');

  process.exit(0);
};

seedAll();