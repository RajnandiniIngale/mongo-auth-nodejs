const jwt = require('jsonwebtoken');

function verifyToken(req,res,next){

    const token = req.header('Authorization');

    if(!token){
        return res.status(401).json({error: 'Access Denied'});
    }
        try{

            const decodedToken = jwt.verify(token,'raj-secret-key');

            // req.userId = decodedToken.userId;

            next();

        }
        catch(err){
            res.status(401).json({err: 'Invalid Token'})
        }
    }


module.exports = verifyToken;