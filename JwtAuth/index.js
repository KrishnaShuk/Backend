const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "USER_APP";

const app = express();
app.use(express.json());

const users = [];

app.post("/signin", function(req,res){
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;

  for(let i = 0; i < users.length; i++){
    if(users[i].username === username && users[i].password === password){
        foundUser = user[i]
    }
  }

  if(!foundUser){
    res.json({
        message: "Credentials incorrect"
    })
    return
   
  } else {
    const token = jwt.sign({
        username: "raman"
    }, JWT_SECRET);

    res.json({
        token: token
    })
    }
  })

 


app.post("/signup", function(req,res){
    const username = req.body.username
    const password = req.body.username
    users.push({
        username: username,
        password: password
    })
     
    

    res.json({
        message: "you are signed in"
    })
})

app.get("/me", function(req,res){
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData.username){
      let foundUser = null;

      for(let i = 0; i< users.length; i++){
        if(users[i].username === decodedData.username){
          foundUser = user[i]
        }
      }

      res.json({
        username: foundUser.username,
        password: foundUser.password
      })
    }
})

app.listen(3000);