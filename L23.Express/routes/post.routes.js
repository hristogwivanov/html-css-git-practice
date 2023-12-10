const express = require("express");
const router = express.Router();
const post = require("../models/post.model")
/*
*/
router.get("/", async (req, res) => {
    await post.getPosts()
    .then((posts) => res.json(posts))
    .catch((err) => {
        if (err.status){
            res.status(err.status).json({ message: err.message });
        } else { 
            res.status(500).json({ message: err.messge})
        }
    });
    
});

router.post('/', async (req, res) => {
    await post.addPost(req.body).then((res) => res.json(res))
})

module.exports = router;