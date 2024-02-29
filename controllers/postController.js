const Blog =require("../models/Blogs.js")  
// In postController.js
//const { validateBlog } = require('./middlewares/validationMiddleware');

class PostController { 
  static async getAllPosts(req, res) {
    try{
      const page = req.query.p || 0;
      const postsPerPage = 3;
  
      const blogs = await Blog.find({})
        .skip(page * postsPerPage)
        .limit(postsPerPage);
  
      if (!blogs.length) {
        return res.status(404).json('There are no posts');
      }
  
      res.status(200).json(blogs);
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal Server Error");
    }
  }
    static  async addNewPost(req, res) { 
      try{
    const {title, content} = req.body;
    
    const newPost =new Blog({ 
      title,
      content,
      author:"65df489939ddd8f0a26c4d3c",
    });

   await newPost.save()
   res.send(" the post is created successfully")
  
  }
    catch(error){
      console.error(error);
      res.status(400).send(error.message);

    }

} 

static  async updatePost(req, res) {
  try{
  const {title, content} = req.body; 
  const  success = await Blog.findOneAndUpdate( {_id:req.params.id},{$set:{title,content}})

   
console.log(req.params.id)
    if (success) {
     return res.send(`Post  updated successfully`);
    } else {
     return res.status(404).send( `Post  not found`);
    }
  }catch(error){ console.error(error);
res.status(400).send(error.message);
}
} 
static async deletePost(req, res) {
  try {
    const result = await Blog.findOneAndDelete({ _id: req.params.id });
    if (result) {
      return res.status(200).send("User deleted successfully");
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    return res.status(500).send("Error deleting user: " + error.message);
  }
}
}
module.exports =PostController;