const express = require("express");
const router = express.Router();
const Models = require("../models/Post");
const Post = Models.Reservations;

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", (req, res) => {
  Post.create(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/", (req, res) => {
  const name = req.body.target;
  let id = req.body._id;
  Post.findByIdAndUpdate(
    id,
    {
      $set: { [name]: req.body[name] }
    },
    { new: true }
  )
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  Post.findByIdAndRemove(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
