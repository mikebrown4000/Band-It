const { Router } = require('express');
const { Band } = require('../models');

const bandRouter = Router();

bandRouter.get('/', async (req, res) => {
  const bands = await Band.findAll();
  res.json(bands);
})

bandRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const band = await Band.findByPk(id);
  res.json(band);
})

module.exports = bandRouter;
