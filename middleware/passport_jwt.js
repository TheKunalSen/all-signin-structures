const Jwtstrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const users = require("../models/Users")


const JwtValidator = (passport)=>{
  console.log("yes1")
passport.use(
  new Jwtstrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.ACCESS_TOKEN_SECRET,
    },
    (jwt_payload, callback) => {
      // console.log(jwt_payload)
      try {
        const currentUser = users.findOne({email:jwt_payload.user.email});
        if(currentUser) {
         
          const userData = {name:jwt_payload.user.name, email:jwt_payload.user.email}
          callback(null, userData)
        }
        else {
          callback(null, false)
        }
      } catch (error) {
        console.log(error)
        callback(error, false)
      }
   



      
    }
  )
)
}




module.exports = JwtValidator;