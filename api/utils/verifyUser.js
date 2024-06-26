import { errorHandler } from "./error.js";
import jwt  from "jsonwebtoken";

export const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token;
    
    if(!token) return next(errorHandler(401, 'Unauthorize hai broo!!!'));

    jwt.verify(token,process.env.JSON_SECRET, (err, user) => {
    if(err) return next(errorHandler(403, 'Forbidden broo'));

    req.user = user;
    next();
    
});



};