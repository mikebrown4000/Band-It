const { Router } = require('express');
const { Artist } = require('../models');
const { hash, encode, compare, restrict } = require('../auth')

const artistRouter = Router();

artistRouter.get('/', async (req, res) => {
  const artists = await Artist.findAll();
  res.json(artists);
})

artistRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const artist = await Artist.findByPk(id);
  res.json(artist);
})

artistRouter.post('/', async (req, res) => {
  try {
    const { first_name, last_name, email, age, location, instrument, password } = req.body;
    console.log(req.body);
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

module.exports = artistRouter;
