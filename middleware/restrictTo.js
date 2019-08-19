
module.exports = (...roles) => {

    return async (req,res,next) => {
 
        if(!roles.includes(req.user.role)){
            return res.status(403).json({msg:'Access denied'})
        } 

        next();
    }
}