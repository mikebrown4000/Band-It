const { Artist, Band } = require('./models');

async function seed() {
  await Artist.destroy({ where: {}});
  await Band.destroy({where: {}});

  const firstArtist = await Artist.create({
    first_name: 'James',
    last_name: 'Yun',
    age: 25,
    location: 'Queens',
    instrument: 'Vocal',
  });

  const secondArtist = await Artist.create({
    first_name: 'Mikey',
    last_name: 'Brown',
    age: 25,
    location: 'Brooklyn',
    instrument: 'Synth'
  });

  const thirdArtist = await Artist.create({
    first_name: 'Annie',
    last_name: 'H',
    age: 25,
    location: 'Brooklyn',
    instrument: 'Guitar'
  });

  const fourthArtist = await Artist.create({
    first_name: 'Robert',
    last_name: 'Morrissey',
    age: 30,
    location: 'Queens',
    instrument: 'Drums'
  });

  const band = await Band.create({
    name: 'Scones',
    location: 'Queens',
    genre: 'Rock'
  });

<<<<<<< HEAD
  await firstArtist.setBand(band);
  await secondArtist.setBand(band);
  await thirdArtist.setBand(band);
  await fourthArtist.setBand(band);
=======
  await firstArtist.setBand(Band);
  await secondArtist.setBand(Band);
  await thirdArtist.setBand(Band);
  await fourthArtist.setBand(Band);
>>>>>>> dev

  process.exit();
}

seed();
