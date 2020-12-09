const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();
var cookieParser = require('cookie-parser'); // module for parsing cookies
const expressEjsLayout = require('express-ejs-layouts')
const mongoClient = require ("mongodb").MongoClient
const session = require('express-session');
const passport = require('passport');
const bodyParser = require ('body-parser')
const User = require("./models/user.js");
const bcrypt = require ("bcrypt")
const cheerio = require ('cheerio')
const $ = cheerio.load('')
const flash = require('connect-flash');
let MongoObjectID = require("mongodb").ObjectID;
let fs = require('fs'); 
let path = require('path'); 
let  imgModel = require('./models/modelImage');
const { request } = require('http');
const formidableMiddleware = require('express-formidable');

const http = require('http');
const https = require('https');
const { cookie } = require('request');

const options = {
    key: fs.readFileSync('selfsigned.key'),
    cert: fs.readFileSync('selfsigned.crt')};

require('dotenv/config'); 
app.set('views','./views')
app.set('view engine','ejs'); // definition lecteur de views : ejs
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

/*app.use(formidableMiddleware());*/
app.use(session({secret:"secret",
    resave:false,
    saveUninitialized: false,
    
}))
app.use(cookieParser());

let url = "mongodb+srv://Morgan:0629174967@devendev.xjccc.mongodb.net/<dbname>?retryWrites=true&w=majority"




// Connection a la BDD 

mongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology : true},(err ,client)=>{
    if (err) throw err 
    console.log('connecte a la base de donnees')
    const db = client.db("dedDB")
    const collection = db.collection("utilisateurs")
    const collectionQuestions = db.collection("QuestionsEntreAide")
    const collectionsTips = db.collection("AstucesEntreAide")

    app.post("/postQuestions",formidableMiddleware(),(req,res)=>{
        let title = req.fields.title
        let commentaire = req.fields.sujet
        let img = req.fields.bt64converted
        let postCollection = db.collection('POST')
        let pseudo = req.fields.pseudoForm        
        postCollection.insertOne({_id:title,title:title,pseudo:pseudo, commentaire : [commentaire],fichiers:img})        
        res.redirect("vosQuestions")                       
        res.end()    
    })



    app.post("/postCreas",formidableMiddleware(),(req,res)=>{
        
        let title = req.fields.title
        let commentaire = req.fields.sujet + ""
        let img = req.fields.bt64converted
        let pseudo = req.fields.pseudoForm        
        let postCollection = db.collection('POSTCreas')     
    postCollection.insertOne({_id:title,title:title,pseudo:pseudo, commentaire : [commentaire],fichiers:img})        
        res.redirect("vosCreas")                       
        res.end()    
    })

    app.post("/postAstuces",formidableMiddleware(),(req,res)=>{
        let title = req.fields.title
        let commentaire = req.fields.sujet
        let img = req.fields.bt64converted
        let pseudo = req.fields.pseudoForm
        let postCollection = db.collection('POSTastuces')
        
        
        
        postCollection.insertOne({_id:title,title:title,pseudo:pseudo, commentaire : [commentaire],fichiers:img})        
        res.redirect("vosAstuces")                       
        res.end()    
    })


    app.post("/reply",formidableMiddleware() ,(req,res)=>{
        let replyTitle = req.fields.titreReponse         
        let reply = req.fields.response 
        let pseudo = req.fields.pseudo
        let img = req.fields.t64
        console.log("la reply est : " + reply)
        let postCollection = db.collection('POST')  
            
        postCollection.updateOne({title: replyTitle} , {$push:{reponse :reply +pseudo+"**"+img }})
            
        res.redirect("vosQuestions")   
    
    })

    app.post("/replyAstuces",formidableMiddleware() ,(req,res)=>{
        let replyTitle = req.fields.titreReponse
        let reply = req.fields.response
        let pseudo = req.fields.pseudo
        let img = req.fields.t64
        console.log( "reply : "+replyTitle)
        let postCollection = db.collection('POSTastuces')       
        postCollection.updateOne({title: replyTitle} , {$push:{reponse :reply +pseudo+"**"+img }})  
             
        res.redirect("vosAstuces")   
    
    })

    app.post("/replyCreas",formidableMiddleware() ,(req,res)=>{
        let replyTitle = req.fields.titreReponse
        let reply = req.fields.response
        let pseudo = req.fields.pseudo  
        let img = req.fields.t64      
        console.log('le pseudo est : '+ replyTitle)
        let postCollection = db.collection('POSTCreas')       
        postCollection.updateOne({title: replyTitle} , {$push:{reponse :reply+pseudo+"**"+img}})  
        
        res.redirect("vosCreas")   
    
    })

    app.post("/modifQuestion",formidableMiddleware(),(req,res)=>{
        let getTitle = req.fields.share
        let getModif = req.fields.laModif
        let getImg = req.fields.bt64    
        let postCollection = db.collection('POST')       
        postCollection.updateOne({title: getTitle} ,{$set:{commentaire:getModif,fichiers:getImg}} )   
        res.redirect("vosQuestions")  
    })

    app.post("/modifAstuces",formidableMiddleware(),(req,res)=>{
        let getTitle = req.fields.share
        let getModif = req.fields.laModif
        let getImg = req.fields.bt64           
        let postCollection = db.collection('POSTastuces')       
        postCollection.updateOne({title: getTitle} ,{$set:{commentaire:getModif,fichiers:getImg}} )   
        res.redirect("vosAstuces")  
    })

    app.post("/modifCreas",formidableMiddleware(),(req,res)=>{
        let getTitle = req.fields.share
        let getModif = req.fields.laModif
        let getImg = req.fields.bt64   
        let postCollection = db.collection('POSTCreas')       
        postCollection.updateOne({title: getTitle} ,{$set:{commentaire:getModif,fichiers:getImg}} )   
        res.redirect("vosCreas")  
    })

    app.post("/removeCreas",formidableMiddleware(),(req,res)=>{
        let getTitle = req.fields.titleRemove
        
        let postCollection = db.collection('POSTCreas')  
        postCollection.findOneAndDelete({title : getTitle})
        console.log(getTitle)
        res.redirect("vosCreas") 
    })

    app.post("/removeAstuces",formidableMiddleware(),(req,res)=>{
        let getTitle = req.fields.titleRemove
        
        let postCollection = db.collection('POSTastuces')  
        postCollection.findOneAndDelete({title : getTitle})
        console.log(getTitle)
        res.redirect("vosAstuces") 
    })

    app.post("/removeQuestions",formidableMiddleware(),(req,res)=>{
        let getTitle = req.fields.titleRemove
        
        let postCollection = db.collection('POST')  
        postCollection.findOneAndDelete({title : getTitle})
        console.log(getTitle)
        res.redirect("vosQuestions") 
    })


  
  app.get("/addTips",(req,res)=>{        
      res.render("addTips" )
      res.end()
  })
 

  
  app.get('/',(req,res)=>{
     let sess =req.session
      sess.email
      sess.username
      res.setHeader("Content-Type", "text/html")
      res.render("acceuil.ejs" )
      res.end()
  })
  
  app.get("/about",(req,res)=>{
      res.render("about")
      res.end()
  })
  
  app.get("/projets",(req,res)=>{
      res.render("projet")
      res.end()
  })
  
  app.get("/help" ,(req,res)=>{
      const cursor = db.collection("QuestionsEntreAide").find().toArray()
            
      .then (result=>{            
         res.setHeader("Content-Type", "text/html")
          res.render("help",{usersQuestions :result })
          res.end()
      })
      .catch(error=>console.error(error))        
  })    
  
  app.get("/tutos" ,(req,res)=>{
      res.render("tuto")
      res.end()
  })
  
  
  app.get("/vosQuestions",async (req,res)=>{    
      try{
       
      const db = client.db('dedDB');     
     db.collection('POST').find().toArray(function(err, result){
        
        if (err) { return console.log(err) }
       let  contenuCollection = result
        res.render("vosQuestions",{collectionName: result })
      })

      let collections = await db.collections();
     
      let  collectionName = await db.listCollections().toArray()          
          
      }
      catch(error){
          console.error(error)  
      }
      let kiki =$('paraB64')
      for(let k=0; k<kiki.length;k++){
        console.log("test : "+kiki.text())
      }    
     
  })

  app.get("/vosAstuces",async (req,res)=>{    
    try{
     
    const db = client.db('dedDB');     
   db.collection('POSTastuces').find().toArray(function(err, result){
      
      if (err) { return console.log(err) }
     let  contenuPostAstuce = result
      res.render("vosAstuces",{collectionName: result })
    })

    let collections = await db.collections();
   
    let  collectionName = await db.listCollections().toArray()          
        
    }
    catch(error){
        console.error(error)  
    }
})

    app.get("/dashBoard",(req,res)=>{
       db.collection('POSTCreas').find().toArray((err,result)=>{
           let creas =result
           db.collection('POST').find().toArray((err,result)=>{
            let quest =result
            db.collection('POSTastuces').find().toArray((err,result)=>{
                let astuces = result
            let array1 =creas.concat(quest)
            let final = array1.concat(astuces)
            console.log(creas)
            res.render("dashBoard",{creasContent:final})
           })})
           
       })
       

    })

app.get("/vosCreas",async (req,res)=>{    
    try{
     
    const db = client.db('dedDB');     
   db.collection('POSTCreas').find().toArray(function(err, result){
      
      if (err) { return console.log(err) }
     let  contenuPostCreas = result
     
      res.render("vosCreas",{collectionName: result })
    })

    let collections = await db.collections();
   
    let  collectionName = await db.listCollections().toArray()          
        
    }
    catch(error){
        console.error(error)  
    }
})

app.post("/removePostDash",(req,res)=>{
    let catchTitle = req.body.titleSuppDash
    console.log("catch : "+catchTitle)
    let postCollection = db.collection('POST')  
    postCollection.findOne({title:catchTitle},(err,res)=>{
        if(res){
            postCollection.findOneAndDelete({title : catchTitle})
           
        }else{
            let astucesCollection = db.collection("POSTastuces")
            astucesCollection.findOne({title:catchTitle},(err,res)=>{
                if(res){
                    astucesCollection.findOneAndDelete({title:catchTitle})
                }else{
                    let creasCollection = db.collection("POSTCreas")
                    creasCollection.findOne({title:catchTitle},(err,res)=>{
                        if(res){
                            creasCollection.findOneAndDelete({title:catchTitle})
                        }else{
                            let vide = "a"
                        }
                    })
                }
            })
        }        
    })

    
    res.redirect("dashBoard") 
      
})

  
  app.post('/login' ,(req,res)=>{
     

      
      let password = req.body.pwdLogin
      let email = req.body.mail
      let test = "Bonjour"
      
       {
          collection.findOne({ email: req.body.mail })
        .then(user => {
            
        if (!user) {
            res.cookie('errorLogin',"Email inconnu")        
            res.redirect(req.get('referer'))  
        
         
        
    }
    bcrypt.compare(req.body.pwdLogin, user.password)
      .then(valid => {
        if (!valid) {
            res.cookie('errorLogin',"Mot de passe inconnu")        
            res.redirect(req.get('referer')) 
        }
        res.cookie("Login", "logYes", { maxAge: 900000*10}, { sameSite: 'none', secure: true })
        res.cookie("name", user.name, { maxAge: 900000*10}, { sameSite: 'none', secure: true })
        res.cookie("email", req.body.mail, { maxAge: 900000*10}, { sameSite: 'none', secure: true })
        res.cookie("hellloBack", user.name, { maxAge: 900000*10}, { sameSite: 'none', secure: true })
        
      
        res.setHeader("Content-Type", "text/html")
        res.redirect(req.get('referer'));
       
      })
      
  })
  
      }    
     
  })


  
  app.post('/register' ,(req,res)=>{
    const {pseudo, pwd, pwdConfirm} = req.body
    let errors = []
    let email = req.body.email
    console.log("email :" + email)
    //
    if(!pseudo || !email || !pwd || !pwdConfirm) {

        errors.push({msg: "Merci de remplir tout les champs"})
        res.cookie("errorArray" , errors)
        res.setHeader("Content-Type", "text/html")
        res.redirect(req.get('referer'))
    }
    //
    if (pwd !== pwdConfirm ||pwd.length <= 5 ){            
        errors.push({msg: "Les 2 mots de passe ne pas sont identiques ou contiennent moins de 6 caract\350res!"})
        res.cookie("errorArray" , errors) 
        res.setHeader("Content-Type", "text/html")     
        res.redirect(req.get('referer'))

    }else {
        collection.findOne(({email: email}),(err,result)=>{
            if (result){
                errors.push({msg: 'Email deja existant'})
                res.cookie("errorArray" , errors)     
                res.setHeader("Content-Type", "text/html")   
                res.redirect(req.get('referer'))
            }else {
                const newUser = new User({
                    name : req.body.pseudo,
                    email :req.body.email,
                    password :req.body.pwd
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
                            res.cookie("Login", "logYes", { maxAge: 900000*10}, { sameSite: 'none', secure: true })
                            res.cookie("name", newUser.name, { maxAge: 900000*10}, { sameSite: 'none', secure: true })
                            res.cookie('sayHello',newUser.name)        
                            res.redirect(req.get('referer'))
                             
                         }))

                                                 
            }
        })            
    }       
})
  
app.post("/deletedAccount",(req,res)=>{
    let mail = req.body.nameDeleted
    console.log(mail)
    let userCollection = db.collection('utilisateurs')  
    userCollection.findOneAndDelete({email : mail})
        
        res.redirect("/") 
    })

  

})




/*http.createServer(app).listen(3200);*/
    https.createServer(options, app).listen(3200);

