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
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  age: Sequelize.INTEGER,
  location: Sequelize.STRING,
  looking: Sequelize.BOOLEAN,
  img: Sequelize.STRING,
  instrument: Sequelize.STRING,
  password_digest: Sequelize.STRING,
  looking: Sequelize.BOOLEAN,
});


const Band = sequelize.define('band', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  genre: Sequelize.STRING,
  img: Sequelize.STRING,
});

const Comment = sequelize.define('comment', {
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  as_band: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  for_band: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

Artist.belongsTo(Band);
Band.hasMany(Artist);

Artist.belongsToMany(Artist, {
  as: 'commenter',
  foreignKey: 'commenter_id',
  otherKey: 'topic_id',
  constraints: false,
  through: Comment,
});
Artist.belongsToMany(Artist, {
  as: 'topic',
  foreignKey: 'topic_id',
  otherKey: 'commenter_id',
  constraints: false,
  through: Comment,
})

module.exports = {
  sequelize,
  Artist,
  Band,
  Comment,
}
