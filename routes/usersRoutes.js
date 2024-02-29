const express=require("express");
const router = express.Router();
const { login,loginPage,registerPage ,register} = require("../controllers/userControllers");  

router.use(express.json());

router.get('/page',loginPage);
router.post('/login',login); 
router.get('/register',registerPage);
router.post('/register',register); 
 
module.exports= router;
