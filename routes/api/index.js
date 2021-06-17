// import seed files
const seedUsername = require('./username-seeds');
const seedPassword = require('./password-seeds');
const seedEmail = require('./email-seeds');

// import database connection from connection.js
const sequelize = require('../config/connection');

// seed all data 
const seedAll = async () => {
  
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedCategories();
  console.log('\n----- USERNAME SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PASSWORD SEEDED -----\n');

  await seedTags();
  console.log('\n----- EMAIL SEEDED -----\n')

  process.exit(0);
};

seedAll();