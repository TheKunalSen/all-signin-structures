const asyncHandler = require("express-async-handler");


const displayUserName = asyncHandler((req, res) => {
res.json(req.user.displayName)
});




module.exports = { displayUserName };
