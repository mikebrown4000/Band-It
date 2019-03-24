const { Router } = require('express');
const { Comment, Artist, sequelize } = require('../models');
const { restrict } = require('../auth')

const commentRouter = Router();


//All comments DO NOT USE THIS ROUTE
commentRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const comment = await sequelize.query(`
    select
      artists.first_name,
      artists.last_name,
      artists.img,
      comments.*
    from
      comments
    inner join
      artists
      on artists.id = comments.commenter_id
    where
      topic_id=${id};
    `,
    {
      type: sequelize.QueryTypes.SELECT
    },
  )

  res.json(comment)
})

//gets all comments by an artist as an artist
commentRouter.get('/by/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await Comment.findAll({
      where: {
        commenter_id: id
      }
    })
    res.json(comments)
  } catch(e) {
    console.error(e);
  }
})

// gets all comments directed to an artist
commentRouter.get('/to/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await sequelize.query(`
      select
        artists.first_name,
        artists.last_name,
        artists.img,
        comments.*
      from
        comments
      inner join
        artists
        on artists.id = comments.commenter_id
      where
        topic_id=${id};
      `,
      {
        type: sequelize.QueryTypes.SELECT
      },
    )

    res.json(comment)
  } catch(e) {
    console.error(e);
  }
})

//gets all comments made by an artist as a band
commentRouter.get('/byBand/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await Comment.findAll({
      where: {
        commenter_id: id,
        as_band: true,
      },
      include:[{model: Artists}]
    })
    res.json(comments)
  } catch(e) {
    console.error(e);
  }
})

// Gets all comments directed to a band
commentRouter.get('/toBand/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await Comment.findAll({
      where: {
        topic_id: id,
        as_band: true,
      }
    });
    res.json(comments)
  } catch(e) {
    console.error();
  };
});

commentRouter.post('/', restrict, async (req, res) => {
  try{
    const { id } = res.locals.artist;
    const { content, topic_id, as_band, to_band } = req.body;
    const comment = await Comment.create({
      content,
      commenter_id: id,
      topic_id,
      as_band,
      to_band,
    });
    res.json(comment);
  } catch(e) {
    console.error(e);
    res.status(401).send('Invalid Credentials');
  };
});

commentRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const comment = await Comment.findOne({
      where: {
        commenter_id: id,
      }
    });
    if (comment !== null) {
      await comment.update(req.body);
      res.json(comment)
    }
  } catch(e){
    next(e);
  }
})

module.exports = commentRouter;
