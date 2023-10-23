const User = require("../models/userModel")

const bcrypt = require("bcrypt");

exports.signup = async (req,res,next) =>{
 try {
    const {username,password} = req.body;
    const passHash = await bcrypt.hash(password,12);
    const newUser = await User.create({
        username:username,
        password: passHash
    });
    req.session.user = newUser;
    res.status(201).json({
        status: "success",
        data: {
            user: newUser,
        }
    });
    
 } catch (e) {
    res.status(400).json({
        status: "fail",
    });
 }

}

exports.login = async (req,res,next) =>{
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username:username});
        if(!user){
             return res.status(400).json({
                status: "fail",
                message: "user not found"
            });
        }
        const isCorrectPass = await bcrypt.compare(password,user.password);
        if(!isCorrectPass){
            return res.status(400).json({
                status: "fail",
                message: "invalid username or password"
            });
        }

        req.session.user = user;

    
        res.status(200).json({
            status: "success",
            message: "logged in!",
            
        });
        
     } catch (e) {
        console.log(` login failed : ${e}` );
        res.status(400).json({
            status: "fail",
        });
     }
}