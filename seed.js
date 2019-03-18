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

  await firstArtist.setInstructor(Band);
  await secondArtist.setInstructor(Band);
  await thirdArtist.setInstructor(Band);
  await fourthArtist.setInstructor(Band);

  process.exit();
}

seed();
