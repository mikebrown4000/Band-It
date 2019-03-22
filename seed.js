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
    img: 'https://www.drawingnow.com/file/videos/image/how-to-draw-panda-dabbing.jpg'
  });

  const secondArtist = await Artist.create({
    first_name: 'Mikey',
    last_name: 'Brown',
    email: 'mb@gmail.com',
    age: 25,
    artist_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur feugiat neque nec porttitor. Phasellus consectetur aliquet mi. Praesent sit amet porttitor turpis. Mauris lacinia mollis consequat. Donec ac fermentum metus, eu commodo nisi. Nullam cursus quam ut euismod euismod. Vestibulum rutrum accumsan ligula, id sagittis velit sollicitudin non. Donec fringilla, libero sit amet vestibulum commodo, augue nunc dapibus libero, sodales euismod augue urna vestibulum velit. Vivamus eu purus a nunc pharetra porta quis sed turpis. Nullam vulputate id quam quis elementum. Aliquam suscipit egestas suscipit. Ut sollicitudin sed sapien in convallis. Nam cursus lobortis aliquam. Curabitur libero lacus, porttitor id dignissim a, facilisis a quam. Cras id eros et nulla gravida rhoncus vitae a dolor. Fusce volutpat elit nibh, mattis viverra magna vestibulum bibendum.',
    location: 'Brooklyn',
    instrument: 'Synth',
    img: 'https://res.cloudinary.com/teepublic/image/private/s--A7iKK_5Y--/t_Preview/b_rgb:0195c3,c_limit,f_jpg,h_630,q_90,w_630/v1497239277/production/designs/1661769_1.jpg'
  });

  const thirdArtist = await Artist.create({
    first_name: 'Annie',
    last_name: 'H',
    email: 'ah@gmail.com',
    age: 25,
    artist_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur feugiat neque nec porttitor. Phasellus consectetur aliquet mi. Praesent sit amet porttitor turpis. Mauris lacinia mollis consequat. Donec ac fermentum metus, eu commodo nisi. Nullam cursus quam ut euismod euismod. Vestibulum rutrum accumsan ligula, id sagittis velit sollicitudin non. Donec fringilla, libero sit amet vestibulum commodo, augue nunc dapibus libero, sodales euismod augue urna vestibulum velit. Vivamus eu purus a nunc pharetra porta quis sed turpis. Nullam vulputate id quam quis elementum. Aliquam suscipit egestas suscipit. Ut sollicitudin sed sapien in convallis. Nam cursus lobortis aliquam. Curabitur libero lacus, porttitor id dignissim a, facilisis a quam. Cras id eros et nulla gravida rhoncus vitae a dolor. Fusce volutpat elit nibh, mattis viverra magna vestibulum bibendum.',
    location: 'Brooklyn',
    instrument: 'Guitar',
    img: 'https://media.kidozi.com/unsafe/600x600/img.kidozi.com/design/600/600/2c5fac/35350/e26058f124a87dfd05e1843950de9193.png.jpg'
  });

  const fourthArtist = await Artist.create({
    first_name: 'Robert',
    last_name: 'Morrissey',
    email: 'rm@gmail.com',
    age: 28,
    artist_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur feugiat neque nec porttitor. Phasellus consectetur aliquet mi. Praesent sit amet porttitor turpis. Mauris lacinia mollis consequat. Donec ac fermentum metus, eu commodo nisi. Nullam cursus quam ut euismod euismod. Vestibulum rutrum accumsan ligula, id sagittis velit sollicitudin non. Donec fringilla, libero sit amet vestibulum commodo, augue nunc dapibus libero, sodales euismod augue urna vestibulum velit. Vivamus eu purus a nunc pharetra porta quis sed turpis. Nullam vulputate id quam quis elementum. Aliquam suscipit egestas suscipit. Ut sollicitudin sed sapien in convallis. Nam cursus lobortis aliquam. Curabitur libero lacus, porttitor id dignissim a, facilisis a quam. Cras id eros et nulla gravida rhoncus vitae a dolor. Fusce volutpat elit nibh, mattis viverra magna vestibulum bibendum.',
    location: 'Queens',
    instrument: 'Drums',
    img: 'https://ae01.alicdn.com/kf/UT8Ry_ZXqNbXXagOFbXb/14-14-7CM-Middle-Finger-Personality-Cute-Panda-Car-Stickers-Classic-Creative-Car-Styling-Decoration-Accessories.jpg_640x640.jpg'
  });

  const band = await Band.create({
    name: 'Scones',
    band_description: 'Our band was created in 1998 and suspendisse in risus ut nibh finibus vulputate at non sem. Vivamus elit lectus, consectetur a dolor a, ullamcorper sagittis mi. Sed ultricies eget tortor eu efficitur. Integer ultricies est eget odio cursus vestibulum. Ut consectetur ex ac sem gravida, id accumsan mi malesuada. Nunc fermentum et eros nec laoreet. Nulla urna mi, laoreet sed turpis ut, dignissim maximus neque. Nulla facilisi. Nam sapien orci, volutpat sit amet venenatis elementum, blandit vel nisl. In hac habitasse platea dictumst. Nam malesuada quam sit amet turpis tristique bibendum. Nam elit risus, efficitur eget faucibus quis, rhoncus vel sapien. Vivamus a orci at lectus finibus consectetur. Nullam dignissim suscipit massa at congue. Donec sit amet lacinia tellus. Ut tempor ligula est, nec facilisis tortor auctor eget.',
    genre: 'Rock',
    band_img: 'https://i.pinimg.com/originals/a8/4d/d8/a84dd8802aa91c3b42ece5eefaa16dbd.jpg'
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
