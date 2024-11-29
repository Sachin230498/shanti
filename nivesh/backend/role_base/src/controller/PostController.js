// Create Post (Requires Login)
import Post from "../model/postModel.js";
// const bcrypt = require("bcrypt");

const CreatePost =  async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = new Post({ title, content, user: req.user._id });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Posts
const GetPosts =  async (req, res) => {
  const posts = await Post.find().populate("user", "username");
  res.json(posts);
};


export {CreatePost,GetPosts}