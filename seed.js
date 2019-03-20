const { Artist, Band, Comment } = require('./models');

async function seed() {
  await Artist.destroy({ where: {}});
  await Band.destroy({where: {}});
  await Comment.destroy({where: {}});

  const firstArtist = await Artist.create({
    first_name: 'James',
    last_name: 'Yun',
    email: 'jy@gmail.com',
    age: 25,
    artist_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur feugiat neque nec porttitor. Phasellus consectetur aliquet mi. Praesent sit amet porttitor turpis. Mauris lacinia mollis consequat. Donec ac fermentum metus, eu commodo nisi. Nullam cursus quam ut euismod euismod. Vestibulum rutrum accumsan ligula, id sagittis velit sollicitudin non. Donec fringilla, libero sit amet vestibulum commodo, augue nunc dapibus libero, sodales euismod augue urna vestibulum velit. Vivamus eu purus a nunc pharetra porta quis sed turpis. Nullam vulputate id quam quis elementum. Aliquam suscipit egestas suscipit. Ut sollicitudin sed sapien in convallis. Nam cursus lobortis aliquam. Curabitur libero lacus, porttitor id dignissim a, facilisis a quam. Cras id eros et nulla gravida rhoncus vitae a dolor. Fusce volutpat elit nibh, mattis viverra magna vestibulum bibendum.',
    location: 'Queens',
    instrument: 'Vocal',
    img: 'https://cdn.images.express.co.uk/img/dynamic/109/590x/Polar-Bear-924655.jpg'
  });

  const secondArtist = await Artist.create({
    first_name: 'Mikey',
    last_name: 'Brown',
    email: 'mb@gmail.com',
    age: 25,
    artist_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur feugiat neque nec porttitor. Phasellus consectetur aliquet mi. Praesent sit amet porttitor turpis. Mauris lacinia mollis consequat. Donec ac fermentum metus, eu commodo nisi. Nullam cursus quam ut euismod euismod. Vestibulum rutrum accumsan ligula, id sagittis velit sollicitudin non. Donec fringilla, libero sit amet vestibulum commodo, augue nunc dapibus libero, sodales euismod augue urna vestibulum velit. Vivamus eu purus a nunc pharetra porta quis sed turpis. Nullam vulputate id quam quis elementum. Aliquam suscipit egestas suscipit. Ut sollicitudin sed sapien in convallis. Nam cursus lobortis aliquam. Curabitur libero lacus, porttitor id dignissim a, facilisis a quam. Cras id eros et nulla gravida rhoncus vitae a dolor. Fusce volutpat elit nibh, mattis viverra magna vestibulum bibendum.',
    location: 'Brooklyn',
    instrument: 'Synth',
    img: 'https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.fit-760w.jpg'
  });

  const thirdArtist = await Artist.create({
    first_name: 'Annie',
    last_name: 'H',
    email: 'ah@gmail.com',
    age: 25,
    artist_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur feugiat neque nec porttitor. Phasellus consectetur aliquet mi. Praesent sit amet porttitor turpis. Mauris lacinia mollis consequat. Donec ac fermentum metus, eu commodo nisi. Nullam cursus quam ut euismod euismod. Vestibulum rutrum accumsan ligula, id sagittis velit sollicitudin non. Donec fringilla, libero sit amet vestibulum commodo, augue nunc dapibus libero, sodales euismod augue urna vestibulum velit. Vivamus eu purus a nunc pharetra porta quis sed turpis. Nullam vulputate id quam quis elementum. Aliquam suscipit egestas suscipit. Ut sollicitudin sed sapien in convallis. Nam cursus lobortis aliquam. Curabitur libero lacus, porttitor id dignissim a, facilisis a quam. Cras id eros et nulla gravida rhoncus vitae a dolor. Fusce volutpat elit nibh, mattis viverra magna vestibulum bibendum.'
    location: 'Brooklyn',
    instrument: 'Guitar',
    img: 'https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.fit-760w.jpg'
  });

  const fourthArtist = await Artist.create({
    first_name: 'Robert',
    last_name: 'Morrissey',
    email: 'rm@gmail.com',
    age: 28,
    artist_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur feugiat neque nec porttitor. Phasellus consectetur aliquet mi. Praesent sit amet porttitor turpis. Mauris lacinia mollis consequat. Donec ac fermentum metus, eu commodo nisi. Nullam cursus quam ut euismod euismod. Vestibulum rutrum accumsan ligula, id sagittis velit sollicitudin non. Donec fringilla, libero sit amet vestibulum commodo, augue nunc dapibus libero, sodales euismod augue urna vestibulum velit. Vivamus eu purus a nunc pharetra porta quis sed turpis. Nullam vulputate id quam quis elementum. Aliquam suscipit egestas suscipit. Ut sollicitudin sed sapien in convallis. Nam cursus lobortis aliquam. Curabitur libero lacus, porttitor id dignissim a, facilisis a quam. Cras id eros et nulla gravida rhoncus vitae a dolor. Fusce volutpat elit nibh, mattis viverra magna vestibulum bibendum.'
    location: 'Queens',
    instrument: 'Drums',
    img: 'http://blogs.discovermagazine.com/inkfish/files/2017/09/8696883646_cc332cc707_z.jpg'
  });

  const band = await Band.create({
    name: 'Scones',
    description: 'This is a description',
    genre: 'Rock'
  });

  commentOne = await Comment.create({
    content: `pretty cool guy and doesn't afraid of anything`,
    commenter_id: 1,
    topic_id: 2,
  });

  commentOne = await Comment.create({
    content: `They don't think it be like it is but it do`,
    commenter_id: 4,
    topic_id: 3,
  });


  await firstArtist.setBand(band);
  await secondArtist.setBand(band);
  await thirdArtist.setBand(band);
  await fourthArtist.setBand(band);

  process.exit();
};

seed();
