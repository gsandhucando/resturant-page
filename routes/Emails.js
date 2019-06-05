const express = require("express");
const router = express.Router();
const Models = require("../models/Post");
const Post = Models.Emails;

router.post("/", (req, res) => {
  console.log(req.body);
  Post.create({
    email: req.body.email
  }).then(data => {
    res.json(data)
  }).catch(err => {
    res.json(err)
  })
});

module.exports = router;