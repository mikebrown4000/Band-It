const { Router } = require('express');
const { Band } = require('../models');

const bandRouter = Router();

bandRouter.get('/', async (req, res) => {
  const bands = await Band.findAll();
  res.json(bands);
})

bandRouter.post('/', async (req, res) => {
  try{
    const { name, location, genre } = req.body;
    const band = Band.create({
      name,
      location,
      genre
    })
    res.json(band)
  } catch(e) {
    res.status(401).send('Invalid Credentials')
  }
})

bandRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const band = await Band.findByPk(id);
  res.json(band);
})

module.exports = bandRouter;
