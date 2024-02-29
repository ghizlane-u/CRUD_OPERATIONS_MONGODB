const express = require('express'); 
const app = express(); 
const routes=require("./routes/postRoutes.js"); 
const port = 3000;  
 const loginRouter= require("./routes/usersRoutes.js");

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/myblogs")
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error: ", error));


app.use(express.json());
app.use(express.urlencoded());


app.use(loginRouter);
app.use(routes); 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
