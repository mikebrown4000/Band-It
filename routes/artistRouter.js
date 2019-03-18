const { Router } = require('express');
const { Artist } = require('../models');

const artistRouter = Router();

artistRouter.get('/', async (req, res) => {
  const artists = await Artist.findAll();
  res.json(artists);
})

module.exports = artistRouter
