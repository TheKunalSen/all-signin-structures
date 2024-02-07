const express = require('express');
const app = express();
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const dotenv = require('dotenv').config();




app.use(
    session({
        secret: "cyberwolve",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000 
        }
    })
);
app.use(passport.initialize());
app.use(passport.session());


app.use("/auth", require("./routes/gooogle_routes"));


app.use("/dashboard", require("./routes/dashboard"));




// app.get("/dashboard",(req,res)=>{

//     res.json(req.user)
// })
app.listen(5000, () => {
    console.log("Server started on port 5000");
});