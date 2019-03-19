const { Router } = require('express');
const { Comment } = require('../models');

const commentRouter = Router();


//All comments DO NOT USE THIS ROUTE
commentRouter.get('/', async (req, res) => {
  const comments = await Comment.findAll();
  res.json(comments);
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
    const comments = await Comment.findAll({
      where: {
        topic_id: id
      }
    })
    res.json(comments)
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
      }
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

commentRouter.post('/', async (req, res) => {
  try{
    const { content, commenter_id, topic_id, as_band, to_band } = req.body;
    const comment = await Comment.create({
      content,
      commenter_id,
      topic_id,
      as_band,
      to_band,
    });
    res.json(comment);
  } catch(e) {
    res.status(401).send('Invalid Credentials');
  };
});

module.exports = commentRouter;
