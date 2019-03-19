const { Router } = require('express');
const { Artist } = require('../models');
const { hash, encode, compare, restrict } = require('../auth')

const artistRouter = Router();

// route to get all artists
artistRouter.get('/', async (req, res) => {
  const artists = await Artist.findAll();
  res.json(artists);
})

// route for a single artist
artistRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const artist = await Artist.findByPk(id);
  res.json(artist);
})

// route to create a new user
artistRouter.post('/', async (req, res) => {
  try {
    const { first_name, last_name, email, age, location, instrument, password } = req.body;
    const password_digest = await hash(password);

    const artist = await Artist.create({
      first_name,
      last_name,
      email,
      age,
      location,
      instrument,
      password_digest,
    });

    delete artist.password_digest;

    res.json(artist)
  }
  catch(e) {
    console.error(e);
  };
});


// route to let an artist login
artistRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const artist = await Artist.findOne({
      where: {
        email,
      },
    });
    if (artist !== null) {
      const artistData = {
        ...artist.dataValues
      };
      const authenticated = await compare(password, artistData.password_digest);
      delete artistData.password_digest;
      const token = await encode(artistData)
      res.json({
        artistData,
        token
      });
    };
    } catch (e) {
      res.status(401).send('Invalid Credentials')
      console.error(e);
    };
  });

module.exports = artistRouter;
