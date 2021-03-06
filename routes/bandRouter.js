const { Router } = require('express');
const { Band } = require('../models');
const { restrict } = require('../auth')

const bandRouter = Router();

bandRouter.get('/', async (req, res) => {
  const bands = await Band.findAll();
  res.json(bands);
})


//needs restrict
bandRouter.post('/', restrict, async (req, res) => {
  try{
    const { name, location, genre, band_description, band_img } = req.body;
    const band = await Band.create({
      name,
      band_description,
      band_img,
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

//needs restrict
bandRouter.put('/:id', restrict, async (req, res) => {
  try {
    const { id } = req.params;

    const band = await Band.findByPk(id);
    if (band !== null) {
      console.log(req.body);
      await band.update(req.body);
      res.json(band)
    }
  } catch(e){
    next(e);
  }
})

// route to let user to delete their band
bandRouter.delete('/:id', restrict, async (req, res) => {
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
