const asyncHandler = require("express-async-handler");


const displayUserName = asyncHandler((req, res) => {
    if(req.user) {
        res.json(req.user)
        
    }
    else {
        res.json("not logged in")
        return;
    }

});




module.exports = { displayUserName };
