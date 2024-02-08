const asyncHandler = require("express-async-handler");

// const express_sessionValidator = asyncHandler((req, res, next) => {
//   if (req.express_sessionValidator()) {
//     return next();
//   } else {
//     res.status(401).json({ message: "Unauthorized access" });
//   }
// });


function express_sessionValidator(req, res, next) {
    if (req.isAuthenticated()) {
        return next();// If authenticated, proceed to the next middleware/route handler
    } else {
        res.status(401).json({ message: "Unauthorized access" }); // If not authenticated, send 401 Unauthorized status
    }
}


module.exports = express_sessionValidator;
