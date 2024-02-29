const express=require("express");
const router = express.Router();
const postController = require("../controllers/postController.js"); 
router.use(express.json());
const ensureToken=require("../middleware/ensureToken")
router.use(ensureToken)
router.get('/posts',postController.getAllPosts); 
router.post('/posts', postController.addNewPost);  
router.put('/posts/:id', postController.updatePost);  
router.delete('/posts/:id', postController.deletePost); 

module.exports=router;