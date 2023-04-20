var jwt = require('jsonwebtoken');
const contant = require('../helper/constants')
const message = require('../helper/admin/messages');
const constants = require('../helper/constants')
const middleware = (req, res, next) =>{
    //Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if(!token){
        res.status(constants.unauthenticated).json({
            message: message.auth.unauthenticated,
            status: constants.unauthenticated
        });
    }
    try {
        const data = jwt.verify(token, contant.JWT_SECRET);
        req.user = data.user;
        next();
        
    } catch (error) {
        res.status(constants.unauthenticated).json({
            message: message.auth.unauthenticated,
            status: constants.unauthenticated
        })
    }
}
module.exports = middleware;