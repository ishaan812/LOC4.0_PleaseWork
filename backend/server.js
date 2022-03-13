const express= require('express');
const cors= require('cors');
const mongoose= require('mongoose');
const passport= require('passport');
let cookieParser = require('cookie-parser');
const FacebookStrategy= require('passport-facebook');
let user= {};
require('dotenv').config();

passport.serializeUser((user,cb)=>{
    cb(null,user);
})

passport.deserializeUser((user,cb)=>{
    cb(null,user);
})

const app= express();
const port= 5000;
app.use(
    cors({
        origin: '*',
        methods: "GET, POST, PATCH, DELETE, PUT",
        // allowedHeaders: "Content-Type, Authorization",
    })
);
app.use(cookieParser());
app.use(passport.initialize());

passport.use(new FacebookStrategy({
    clientID: "623d71d2dedba0908c3c71cfa10c51cb",
    clientSecret: "7e1fa61cd470aaf25568a26e8cf72e4e",
    callbackUrl: "/auth/facebook/callback" 
},(accesstoken, refreshtoken, profile, cb)=>{
    console.log(JSON.stringify(profile));
    user = {...profile};
    return cb(null,profile);
}))
app.get("/auth/facebook", passport.authenticate("facebook"));
app.get("auth/facebook/callback", passport.authenticate(("facebook")),(req,res)=>{
    res.redirect("/lobby");
    return cb(null,profile);
})

app.use(express.json()); 
const uri= process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});
const connection= mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established succesfully");
})



const usersRouter = require('./routes/users')
app.use('/users', usersRouter);

 app.listen(5000, ()=> {
    console.log('Server is up and running on port: ' + port);
})
