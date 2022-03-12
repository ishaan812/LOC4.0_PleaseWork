const router= require('express').Router();
const User =  require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

passport.use(new InstagramStrategy({
    clientID: "1963046707216916",
    clientSecret: "8a3aa5d6340a42c2f2c756b3e3cfe43f",
    callbackURL: "http://localhost:3000/auth/instagram/callback"
  }, (accessToken, refreshToken, profile, done) => {
      let user = {};
      user.name = profile.displayName;
      user.homePage = profile._json.data.website;
      user.image = profile._json.data.profile_picture;
      user.bio = profile._json.data.bio;
      user.media = `https://api.instagram.com/v1/users/${profile.id}/media/recent/?access_token=${accessToken}&count=8`
  
      done(null, user)})); 

router.route('/').get((req,res) => {
    User.find()
        .then(users=> res.json(users))
        .catch(err=> res.status(400).json('Error: '+ err))
});


router.route('/add').post((req,res) => {
    const emailid= req.body.emailid;
    const name= req.body.name;
    const password= req.body.password;
    const NewUser= new User({name,password,emailid});
    
    NewUser.save()
        .then(() => res.json("User Added"))
        .catch(err => res.status(400).json('Error: '+ err))
});

router.route('/:email').get((req,res)=>{
    User.findbyemail({"email" : req.params.id},"password", function(err,users){
        if(err) return handleError(err)})
        .then(users=>res.json)
        .catch(err=> res.status(400).json('Error: '+ err))
        
    ;
})

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ emailid: req.body.emailid });
    if (user) {
        const result = await bcrypt.compare(req.body.password, user.password);
        if (result) {
            const token = await jwt.sign({ emailid: user.emailid }, "1234");
            console.log(token);
            res.json({ token });
      } else {
        res.status(400).json({ error: "password doesn't match" });
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.get('/auth/instagram', passport.authenticate('instagram'))

app.get('/auth/instagram/callback', passport.authenticate('instagram', {
    successRedirect: '/users',
    failure: '/'
  }))

  app.get('/users', (req, res) => {
    axios.get(req.user.media)
    .then(function (response) {
      const data = response.data.data;
      let user = req.user;
      user.images = data.map(img => img.images);
      res.render('instagram', user)  
    })
  })


 
module.exports=router