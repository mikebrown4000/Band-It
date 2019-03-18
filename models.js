const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'bandit_project_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true,
  }
});


const Artist = sequelize.define('artist', {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  age: Sequelize.INTEGER,
  location: Sequelize.STRING,
  looking: Sequelize.BOOLEAN,
  instrument: Sequelize.STRING,
  password_digest: Sequelize.STRING
});


const Band = sequelize.define('band', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  genre: Sequelize.STRING
});

Artist.belongsTo(Band);
Band.hasMany(Artist);

module.exports = {
  sequelize,
  Artist,
  Band
}
