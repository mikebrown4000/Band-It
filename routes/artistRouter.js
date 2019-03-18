const { Router } = require('express');
const { Artist } = require('../models');

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
    const { first_name, last_name, age, location, instrument } = req.body;

    const user = await Artist.create({
      first_name,
      last_name,
      age,
      location,
      instrument,
    });
    // const {
    //   password_digest,
    //   ...user,
    // } = user
    res.json({user})
  }
  catch(e) {
    console.error(e);
  }
})

module.exports = artistRouter;
