const User = require("../models/user-model")

const getAllUsers = async(req,res, next)=>{
try {
    // getting user data from users model but we dont need password
    const users = await User.find({},{password:0})
    if(!users ||users.length===0){
        return res.status(404).json({message:"No user data available"})
    }
    return res.status(200).json(users)
} catch (error) {
    next(error)
}

}

module.exports = getAllUsers