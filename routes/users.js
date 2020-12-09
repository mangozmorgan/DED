const express = require('express')
const app = express.app()

const db = client.db("dedDB")
    const collection = db.collection("utilisateurs")
    const collectionQuestions = db.collection("QuestionsEntreAide")
    const collectionsTips = db.collection("AstucesEntreAide")

    /*
app.post("/postQuestions",(req,res)=>{
    let title = req.body.title
    let comment = req.body.sujet
    
    db.createCollection(title ,(err ,collection)=>{
        console.log ("collection" + title + " ajoute")            
    })
    collectionLive = db.collection(title)
    collectionLive.insertOne({commentaire : comment})      
       
    const cursor = db.collection(title).find().toArray()        
    .then (result=>{     
        res.redirect("vosQuestions")                       
        res.end()
    })
     
    .catch(error=>console.error(error))  
   

})
*/
app.get("/addTips",(req,res)=>{        
    res.render("addTips" )
    res.end()
})




app.get('/',(req,res)=>{
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
        
        
        let test1= "testun"
        let test = db.collection(test1)
        let  collectionName = await db.listCollections().toArray()  
        console.log(Object.values(collectionName)) 
        let tests = await test.find().toArray();
        console.log("le test est :"+tests.toString())
        res.setHeader("Content-Type", "text/html")
        res.render("vosQuestions",{collectionName: collectionName, TEST :tests })
        
    }
    catch(error){
        console.error(error)

    }
})


app.post('/login' ,(req,res)=>{
    let password = req.body.pwdLogin
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
})

app.post('/register' ,(req,res)=>{
    const {pseudo, pwd, pwdConfirm} = req.body
    let email = req.body.email
    console.log("email :" + email)
    //
    if(!pseudo || !email || !pwd || !pwdConfirm) {
        res.render("inscription.ejs" ,{error:"Veuillez renseigner tout les champs requis !"})
    }
    //
    if (pwd !== pwdConfirm){            
        res.render("inscription.ejs" ,{error:"Les 2 mots de passe ne sont pas identiques !"})
    }else if (pwd.length <= 5){
        res.render("inscription.ejs" ,{error:"Le mot de passe doit comprendre au minimum 6 caracteres !", name:req.body.name ,email:req.body.email})
    }else {
        collection.findOne(({email: email}),(err,result)=>{
            if (result){
               
               res.render("inscription.ejs" ,{error:"Email deja utilise !"})
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
                            
                            
                            res.render("inscriptionDone.ejs" ,{sayHello:"Merci pour ton inscription " + name})
                         }))

                console.log("Le nouvel utilisateur est : "+ newUser)                                        
            }
        })            
    }       
})


app.post("/reply" ,(req,res)=>{
    let reply = req.body.response
    

})



