const Blog = require("../models/Blogs.js");
const User = require("../models/User.js");
// In postController.js
//const { validateBlog } = require('./middlewares/validationMiddleware');

const getUser = async (email) => {

  const user = await User.findOne({ email: email });
 
  return user._id;
};

class PostController {
  static async getAllPosts(req, res) {
    try {
      const page = req.query.p || 0;
      const postsPerPage = 3;

      const blogs = await Blog.find({})
        .skip(page * postsPerPage)
        .limit(postsPerPage);

      if (!blogs.length) {
        return res.status(404).json("There are no posts");
      }

      res.status(200).json(blogs);
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal Server Error");
    }
  }
  static async addNewPost(req, res) {
    try {
    
      const { title, content } = req.body;

      const newPost = new Blog({
        title,
        content,
        author: req.decoded.userId,
      });

      await newPost.save();
      res.send(" the post is created successfully");
    } catch (error) {
      console.error(error);
      res.status(400).send(error.message);
    }
  }

  static async updatePost(req, res) {
    try {
      const { title, content } = req.body;
      console.log(req.body)
    const success=  await  Blog.findOneAndUpdate(
        { _id: req.params.id, author: req.decoded.userId },
        { $set: { title, content } }
      );

     
      if (success) {
        return res.send(`UPDATED SUCCESSFLY`);
      } else {
        return res.status(404).send(`CANNOT UPDATE  THIS POST`);
      }
    } catch (error) {
      console.error(error);
      res.status(400).send(error.message);
    }
  }
  static async deletePost(req, res) {
    try {
  
  const deletedPost = await Blog.findOneAndDelete({ _id: req.params.id, author: req.decoded.userId });
  
      if (deletedPost) {
        return res.status(200).send("post deleted successfully");
      } else {
        return res.status(404).send("Cannot delete this post");
      }
      
    } catch (error) {
  

      return res.status(500).send("Error deleting user: " + error);
    }
  }
}
module.exports = PostController;
