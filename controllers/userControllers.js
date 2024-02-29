const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (userId) => {
  return jwt.sign({ userId }, 'your-secret-key', { expiresIn: '1h' });
};

  async function login(req, res) {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });
    const token = generateToken(user._id);
    res.send("bearer " + token );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}; 
async function loginPage(req, res) {
res.send(`
<h2>Login</h2>
<form action="/login" method="POST">
<label for="EMAIL">Email:</label>
<input type="email" name="email" required>
<input type="submit" value="Login">
</form>
`);} 

function registerPage(req,res){ 
    res.send(`
    <h2>Login</h2>
    <form action="/register" method="POST">
    <label for="USERNAME">USERNAME:</label> 
    <input type="text" name="username" required> 

    <label for="EMAIL">Email:</label> 
    <input type="email" name="email" required>

    <input type="submit" value="Login">
    </form>


    `);
} 
async  function register(req,res){ 

    const {username ,email}=req.body; 
    const user= await User.findOne({email}) 

    if (user) 
    { 
     
      return res.send("email already exists")
   }
  const newUser= new User ({
      username,email
  }) 
  newUser.save().then((user)=>{
    console.log("user added");
    res.redirect('/page')
  }).catch((err)=>{
    res.status(401).send(err.message);

  })

 }
module.exports= { login,loginPage,register,registerPage}