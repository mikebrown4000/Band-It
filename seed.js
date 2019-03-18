const { Artist, Band } = require('./models');

async function seed() {
  await Artist.destroy({ where: {}});
  await Band.destroy({where: {}});

  const firstArtist = await Artist.create({
    firstName: 'James',
    lastName: 'Yun',
    age: 25,
    location: 'Queens',
    instrument: 'Vocal'
  });

  const secondArtist = await Artist.create({
    firstName: 'Mikey',
    lastName: 'Brown',
    age: 25,
    location: 'Brooklyn',
    instrument: 'Synth'
  });

  const thirdArtist = await Artist.create({
    firstName: 'Annie',
    lastName: 'H',
    age: 25,
    location: 'Brooklyn',
    instrument: 'Guitar'
  });


  const fourthArtist = await Artist.create({
    firstName: 'Robert',
    lastName: 'Morrissey',
    age: 30,
    location: 'Queens',
    instrument: 'Drums'
  });


  const band = await Band.create({
    name: 'Scones',
    location: 'Queens',
    genre: 'Rock'
  });

  await firstArtist.setBand(Band);
  await secondArtist.setBand(Band);
  await thirdArtist.setBand(Band);
  await fourthArtist.setBand(Band);

  process.exit();
}

seed();
