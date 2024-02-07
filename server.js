const express = require('express');
const app = express();
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const dotenv = require('dotenv').config();




app.use(
    session({
        secret: process.env.SESSION_SECREET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 60 * 1000 ,
            expires: new Date(Date.now() + 60 * 1000)
        }
    })
);
app.use(passport.initialize());
app.use(passport.session());


app.use("/auth/google", require("./routes/gooogle_routes"));
app.use("/auth/facebook", require("./routes/facebook_routes"));


app.use("/dashboard", require("./routes/dashboard"));

app.get("/logeedOut",(req,res)=>{
    res.json("logged out")
})


app.listen(5000, () => {
    console.log("Server started on port 5000");
});
