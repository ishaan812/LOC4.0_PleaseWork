const router= require('express').Router();
const User =  require('../models/user.model');

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
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      const result = await bcrypt.compare(req.body.password, user.password);
      if (result) {
        const token = await jwt.sign({ username: user.username }, SECRET);
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

module.exports=router;