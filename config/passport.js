// POUR VERIG LOGIN //

const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require("../models/user.js");

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({usernameField : 'email'},(email,password,done)=> {
            User.findOne(({email: email}),(err,result)=>{
                if (err){
                    res.render("login.ejs" ,{loginError:"Email deja utilise !"})
                }else{
                    console.log("email existant")
                } 
            })
        }))
}; 