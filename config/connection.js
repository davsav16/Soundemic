const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('music_app', 'root', '2021$@uofu#byu9D', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    query: {
      raw: true
    }
  });

module.exports = sequelize;
