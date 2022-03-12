const express= require('express');
const cors= require('cors');
const mongoose= require('mongoose');
const Instagram= require('passport-instagram');
const passport= require('passport');



require('dotenv').config();

const app= express();
const port= process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri= process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});
const connection= mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established succesfully");
})

const usersRouter = require('./routes/users')


app.use('/users', usersRouter);
 
app.listen(port, ()=> {
    console.log('Server is up and running on port: ' + port);
})
