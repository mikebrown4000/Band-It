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

module.exports = artistRouter;
