const asyncHandler = require("express-async-handler");



const displayUserName_jwt = asyncHandler((req, res) => {
    res.json(`${req.user.name}, you have access to the protected route`)
   
});




module.exports = { displayUserName_jwt };
