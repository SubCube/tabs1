const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//http://localhost:3000/api/post (GET)
router.get('/', async (req, res)=>{

    const posts = await Post.fing({});
    res.status(200).json(posts);
})

//http://localhost:3000/api/post (POST)
router.get('/', async (req, res)=>{
    const postData = {
        title: req.body.title,
        text: req.body.text
    }
    const post = new Post(postData);
    await post.save();
    res.status(201).json(post);
})

//http://localhost:3000/api/post (DELETE)
router.get('/:id',  async (req, res)=>{
   await Post.remove({_id: req.params.id});
    res.status(200).json({
        message: 'deleted'
    });
});

module.exports = router;