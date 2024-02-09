const asyncHandler = require("express-async-handler");
const client = require("../models/Users");
const bcrypt = require("bcrypt");

const jwt = require('jsonwebtoken');
const constants = require("../constants")


const pjwt_Sign_in = asyncHandler(async(req, res) => {

const {email, password} = req.body;
if(!email || !password) {
    res.status(constants.VALIDATION_ERROR).json("all fields are required");
}
const userAvilable = await client.findOne({ email: email });


if(userAvilable && (await bcrypt.compare( password,userAvilable.password))) {
    const accessToken = jwt.sign({
        user: {
            name: userAvilable.name,
            email: userAvilable.email,
           
        },

    },process.env.ACCESS_TOKEN_SECRET,
    {expiresIn: "15m"}
    )
 
    res.status(200).json({accessToken});
    // console.log(userAvilable)
    
}else {
    res.status(401).json("email or password is invalid");
    // throw new Error("email or password is not valid");
}




 
});

const pjwt_Sign_up = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if(!name || !email || !password) {
    res.status(constants.VALIDATION_ERROR).json("all fields are required");
  }
  const userAvilable = await client.findOne({ email: email });
  if (userAvilable) {
    res.json("user already registered");
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    const New_user = {
      name: name,
      email: email,
      password: hashedPassword,
    };
    const user = await client.create(New_user);
    user
      ? res.json(user)
      : (e) => {
          res.json(e);
        };
  }
});


// const pjwt_callback = asyncHandler(async (req, res) => {




// });

module.exports = { pjwt_Sign_in, pjwt_Sign_up };
