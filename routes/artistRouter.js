const { Router } = require('express');
const { Artist } = require('../models');
const { hash, encode, compare, restrict } = require('../auth')

const artistRouter = Router();

artistRouter.get('/verify', restrict, async (req, res) => {
  res.json({artist: res.locals.artist})
});

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
    const { first_name, last_name, email, age, location, instrument, password, looking, img, artist_description } = req.body;
    const password_digest = await hash(password);

    const artist = await Artist.create({
      first_name,
      last_name,
      email,
      age,
      location,
      instrument,
      password_digest,
      looking,
      artist_description,
      img
    });
    const artistData = {
      ...artist.dataValues
    };

    delete artistData.password_digest;
    const token = await encode(artistData);

    res.json({
      artistData,
      token
    })
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
      const token = await encode(artistData);
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

//needs restrict
artistRouter.put('/:id', restrict, async (req, res) => {
  try {
    const { id } = req.params;
    const artist = await Artist.findByPk(id);
    if (id == res.locals.artist.dataValues.id) {
      await artist.update(req.body);
      res.json(artist)
    }
  } catch(e){
    res.status(401).send('Invalid Credentials');
  }
})

artistRouter.post('/bands/:id', restrict, async (req, res) => {
  try {
  console.log(req.params.id);
  console.log(res.locals.user.id);
  const { id } = res.locals.user;
  const artist = await Artist.findByPk(id);
  artist.bandId = req.params.id;
  await artist.save();

  res.json({id:artist.bandId})
  }catch (e) {
        res.status(500).send(e.message)
    }
})

// route to let user to delete their account
artistRouter.delete('/:id', restrict, async (req, res) => {
  try {
    const { id } = req.params;
    await Artist.destroy({
      where: {
        id
      }
    });
    res.json(`Deleted${id}`);
  } catch (e) {
    console.log(e);
    res.status(404).send('Artist not found');
  }
});

module.exports = artistRouter;
