const userdb = require("../model/users");
const bcrypt = require("bcrypt")
const createUser = async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
   

      const newUser = new userdb({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        mail: req.body.email,
        password: hashedPass,
      });
      const existUser = await userdb.findOne({mail:req.body.email});

      if (existUser) {        
        return res.status(422).json({ message: 'User with the same email already exists' });
    }
     
  
      const user = await newUser.save();
      
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    //   console.log("Hey yo done finally")
    } catch (error) {
      console.error('Error creating user:', error);
      
      res.status(500).json({ message: 'Error creating User' });
    }
  };
  
  const createLogin = async (req, res) => {
    try {
      const user = await userdb.findOne({ mail:req.body.email });
      if (!user) {
        return res.status(400).json('Wrong credentials!');
      }
  
      const validated = await bcrypt.compare(req.body.password, user.password);
      if (!validated) {
        return res.status(400).json('Wrong credentials!');
      }
  
      const { password, ...others } = user._doc;
      console.log(others)
      return res.status(200).json(others);
      
    } catch (err) {
      console.error('Error logging in:', err);
     return  res.status(500).json(err);
    }
  };
  
  module.exports = { createUser, createLogin };
  