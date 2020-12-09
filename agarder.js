const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();
const expressEjsLayout = require('express-ejs-layouts')
const mongoClient = require ("mongodb").MongoClient
const session = require('express-session');
const passport = require('passport');
const bodyParser = require ('body-parser')
const User = require("./models/user.js");
const bcrypt = require ("bcrypt")

require("./models/user")


app.set('view engine','ejs'); // definition lecteur de views : ejs
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
   }));
app.use(passport.initialize());
app.use(passport.session());
//


//
// Connection a la BDD 

mongoClient.connect('mongodb://localhost/dedDB',{useNewUrlParser: true, useUnifiedTopology : true},(err ,client)=>{
    if (err) throw err 
    console.log('connecte a la base de donnees')
    const db = client.db("dedDB")
    const collection = db.collection("utilisateurs")
    


    app.post('/register' ,(req,res)=>{
        const {name, password, password2} = req.body
        let email = req.body.email
        
        if (password !== password2){  
                    
            res.render("inscription.ejs" ,{error:"Les 2 mots de passe ne sont pas identiques !"})
        }else{
            console.log("fuck")
        } /*if (password.length <= 5){
            res.render("inscription.ejs" ,{error:"Le mot de passe doit comprendre au minimum 6 caracteres !", name:req.body.name ,email:req.body.email})
        }else {
            collection.findOne(({email: email}),(err,result)=>{
                if (result){
                   
                   res.render("inscription.ejs" ,{error:"Email deja utilise !"})
                }else {
                    const newUser = new User({
                        name : req.body.name,
                        email :req.body.email,
                        password :req.body.password
                    });
                        bcrypt.genSalt(10,(err,salt)=>
                        bcrypt.hash(newUser.password,salt,
                            (err,hash)=>{
                                if (err) throw err
                                newUser.password = hash
                                collection.insertOne(newUser,(err,res)=>{
                                    if (err) throw err 
                                   console.log("bien ajoute ")
                                })
                                
                                
                                res.render("inscriptionDone.ejs" ,{sayHello:"Merci pour ton inscription " + req.body.name})
                             }))                    
                }
            })           
        }  */       
    })

    app.get('/',(req,res)=>{
        res.setHeader("Content-Type", "text/html")
        res.render("acceuil.ejs" )
        res.end()
    })

    app.get("/loginOk",(req,res)=>{
        res.setHeader("Content-Type", "text/html")
        res.render("login.ejs" )
        res.end()
    })

    app.get("/projets",(err,res)=>{
        res.setHeader("Content-Type", "text/html")
        res.render("projet.ejs" )
        res.end()
    })

    app.get("/loginFail",(req,res)=>{
        res.setHeader("Content-Type", "text/html")
        res.render("login.ejs",{loginError : "identifiant ou mot de passe inconnu !"} )
        res.end()

    })
/*
    app.post('/login' ,(req,res)=>{
        const password = req.body.pwdLogin
        let email = req.body.mail
        
         {
            collection.findOne({ email: req.body.mail })
    .then(user => {
      if (!user) {
        res.setHeader("Content-Type", "text/html")
        res.render("login.ejs",{loginError : "identifiant ou mot de passe inconnu !"} )
      }
      bcrypt.compare(req.body.pwdLogin, user.password)
        .then(valid => {
          if (!valid) {
            res.setHeader("Content-Type", "text/html")
            res.render("login.ejs",{loginError : "Mot de passe inconnu !"} )
          }
          res.setHeader("Content-Type", "text/html")
          res.render("loginOk.ejs",{sayHello:"Content de te revoir "+ user.name + " :)"} )
        })
        
    })
    
        }       
    })*/
})










//Routes





app.listen(3000)
