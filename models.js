const Sequelize = require('sequelize');

let sequelize;

if (process.env.DATABASE_URL){
  console.log('called');
  sequelize = new Sequelize(process.env.DATABASE_URL, {
  database: 'bandit_project_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true,
  }
  });
  } else {
  sequelize = new Sequelize({
    database: 'bandit_project_db',
    dialect: 'postgres',
    operatorsAliases: false,
    define: {
      underscored: true,
      }
    })
  }

const Artist = sequelize.define('artist', {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  artist_description: Sequelize.TEXT,
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
  band_description: Sequelize.TEXT,
  genre: Sequelize.STRING,
  band_img: Sequelize.STRING,
});

const Comment = sequelize.define('comment', {
  id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
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
  commenter_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Artist,
      key: 'id'
    },
    field: 'commenter_id',
    allowNull: false
  },
  topic_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Artist,
      key: 'id'
    },
    field: 'topic_id',
    allowNull: false
  },
});

Artist.belongsTo(Band);
Band.hasMany(Artist);

// Artist.belongsToMany(Artist, {
//   as: 'commenter',
//   foreignKey: 'commenter_id',
//   otherKey: 'topic_id',
//   constraints: false,
//   through: Comment,
//   unique: false
// });
// Artist.belongsToMany(Artist, {
//   as: 'topic',
//   foreignKey: 'topic_id',
//   otherKey: 'commenter_id',
//   constraints: false,
//   through: Comment,
//   unique: false,
// })

module.exports = {
  sequelize,
  Artist,
  Band,
  Comment,
}
