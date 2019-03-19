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
    const band = await Band.create({
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


// route to let user to delete their band
bandRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Band.destroy({
      where: {
        id
      }
    });
    res.json(`Deleted${id}`);
  } catch (e) {
    console.log(e);
    res.status(404).send('Band not found');
  }
});

module.exports = bandRouter;
