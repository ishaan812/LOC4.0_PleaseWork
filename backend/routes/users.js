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

module.exports=router;