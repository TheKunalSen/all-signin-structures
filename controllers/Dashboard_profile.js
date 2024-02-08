const asyncHandler = require("express-async-handler");


const displayUserName = asyncHandler((req, res) => {
    if(req.user) {
        if(req.user.ExistingUser) {
            res.json(`welcome back ${req.user.displayName}`)
        }
      else {
        res.json(req.user)
      }
        // console.log(req.user.ExistingUser)
    }
 
    else {
        res.json("not logged in")
        return;
    }

});




module.exports = { displayUserName };
