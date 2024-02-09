const express = require('express');
const app = express();
const passport = require('passport');
const session = require("express-session");
const cors = require("cors");
const dotenv = require('dotenv').config();
const connectDb = require('./config/mongoDb');
const jwt = require('jsonwebtoken');


app.use(
    session({
        secret: process.env.SESSION_SECREET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 60 * 1000 ,
            // expires: new Date(Date.now() + 60 * 1000)
        }
    })
);
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());


app.use("/auth/google", require("./routes/gooogle_routes"));
app.use("/auth/facebook", require("./routes/facebook_routes"));



app.use("/auth/pjwt", require("./routes/passport_jwt_routes"));




app.use("/jwt_dashboard",  require("./routes/jwt_dashboard"));
app.use("/dashboard",  require("./routes/dashboard"));




app.get("/logeedOut",(req,res)=>{
    res.json("logged out")
})

if (connectDb()){
app.listen(5000, () => {
    console.log("Server started on port 5000");
});
}