const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "USER_APP";

const app = express();

app.post("/signin", function(req,res){
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;

  for(let i = 0; i < users.length; i++){
    if(users[i].username === username && users[i].password ===password){
        foundUser = user[i]
    }
  }

  if(!foundUser){
    res.json({
        message: "Credentilas incorrect"
    })
    return
   
  } else {
    const token = jwt.sign({
        username
    }, JWT_SECRET);

    res.json({
        token: token
    })
    }
  }

 
};

app.post("/signup", function(req,res){
    const username = req.body.username
    const password = req.body.username
    users.push({
        username: username,
        password:password
    })

    res.json({
        message: "you are signed in"
    })
})

app.post("/me", function(req,res){
    
})