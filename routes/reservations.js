const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  try{
    const posts = await Post.find();
    res.json(posts);
  }catch(err){
    res.json(err)
  }
});

router.post("/", (req, res) => {
  console.log(req.body);
  const post = new Post({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber
  });

  post.save().then(data => {
    res.json(data)
  }).catch(err => {
    res.json(err)
  })
});

module.exports = router;
