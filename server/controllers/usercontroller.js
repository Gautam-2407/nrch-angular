const users = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const SecretKey = "GAUTAM";

exports.userregister = async (req, res) => {
    const {name, phone, email, gender, password }=req.body;

    if (!name || !phone || !email|| !gender || !password) {
      return  res.status(401).json({message:"Fill all fields"})
    }

    try{
      
      const preuser = await users.findOne({phone:phone});

      if (preuser){
        return   res.status(200).json("User already exist")
      }
      else{
        console.log(req.body);
        const newuser = new users({
          name,
          phone,
          email,
          gender,
          password,
          
        });
        
        const storeData= await newuser.save();
        
        res.status(200).json(storeData);
      }
    } catch (error) {
      console.log(error)
        res.status(400).json({ error: "Invalid Details", error });
      }
  };
  
  
  //CHECK PHONE INFORMATION IN DATABASE
  exports.userlogin = async (req, res) => {
     const { phone } = req.body;
  
     const user = await users.findOne({ phone: phone });
     
     try{

       if (!user) {
         return res.send("Phone No. not found")
        }
        else {
          const login_token = jwt.sign({username: user.username,},
            SecretKey);
          res.status(201).json({ exists: true ,user , token:login_token});
          console.log("Phone No. Match");
        }
      }
    
    catch (error) {
      console.error("Error while querying MongoDB:", error);
      res.status(500).json({ error: "Unable to connect with DB" });
    }
    
  };
  