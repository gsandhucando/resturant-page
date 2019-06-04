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
  Post.create({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber
  }).then(data => {
    res.json(data)
  }).catch(err => {
    res.json(err)
  })
});


router.put("/", (req, res) => {
  const name = req.body.target
  let id = req.body._id
  console.log(req.body);
  Post.findByIdAndUpdate( id,{
    $set : { [name] : req.body[name]}},
    {new: true}).then(data => {
      res.json(data)
    }).catch(err => {
      console.log(err)
    })
})

router.delete("/:id", (req, res) => {
  let id = req.params.id
  Post.findByIdAndRemove(id).then(data => {
    res.json(data)
  }).catch(err => {
    console.log(err)
  })
})


module.exports = router;
