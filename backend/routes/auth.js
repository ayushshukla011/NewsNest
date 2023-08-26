const express= require('express');
const mongoose = require('mongoose');
const router=express.Router();
const User=require('../model/User');
const { query, validationResult, body } = require('express-validator');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');


const Jwt_secret="ayushshukla";

//Router 1
router.post('/createuser',[
    body('name','Enter a valid name').isLength({min:5}),
    body('email', 'Enter valid email').isEmail(),
    body('password', 'Enter valid password').isLength({ min: 6 })
],async (req,res)=>{
    //checking for validation
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      
      return res.status(400).json({success, errors: errors.array() });
    }
   
    try {

        //checking user with same email
        let user= await User.findOne({email:req.body.email});
        if(user){
            success=false;
            return res.status(400).json(success,"user with this email alredy exist");
        }
        //decrycpting password
        const salt = bcrypt.genSaltSync(10);
        const seccuredpass = bcrypt.hashSync(req.body.password, salt);

        //creating user
         user= await User.create({
            name:req.body.name,
            email:req.body.email,
            password:seccuredpass,
        })

        //creating token by using id of user
        const data = {
            user: {
              id: user.id,
            }
          }
      
        const authToken = jwt.sign(data, Jwt_secret)
        success=true;
        res.json({success,authToken});

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error")
    }
})
//route 2
router.post('/login',[
    body('email', 'Enter valid email').isEmail(),
    body('password', 'Enter valid password').isLength({ min: 6 })
],async (req,res)=>{
    //checking for validation
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      
      return res.status(400).json({success, errors: errors.array() });
    }
   
    try {

        //checking user with same email
        let user= await User.findOne({email:req.body.email});
        if(!user){
            success=false;
            return res.status(400).json(success,"Invalid credentials");
        }
        //checking password match
        const passwordcompare = await bcrypt.compare(req.body.password, user.password)
        
        if(!passwordcompare){
            success=false;
            return res.status(400).json(success,"Invalid credentials");
        }

        //creating token by using id of user
        const data = {
            user: {
              id: user.id,
            }
          }
      
        const authToken = jwt.sign(data, Jwt_secret)
        success=true;
        res.json({success,authToken});

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error")
    }
})
//route 3 getting user detail to show
router.get('/getuser',fetchuser,async (req,res)=>{
   
   
    try {

        let userId = req.user;
        
        const user = await User.findById(userId).select("-password")
        res.send(user);

    } catch (error) {
        console.log(error.message);
        res.status(404).send("Internal server error")
    }
})




module.exports=router;