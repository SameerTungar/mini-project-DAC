const loginM = require('../models/loginModel');

const getLogins = async(req,res)=>{
    try{
        let ans = await loginM.find();
        res.send({response:ans})
    }
    catch(err){
        res.send({error:err})
    }
}
const insertLogin = async(req,res)=>{
    try{
        let loginData = req.body;
        let instance = new loginM(loginData);
        let ans = await instance.save();
        res.send({response:ans})
    }
    catch(err){
        res.send({error:err})
    }
}
const deleteLogin = async(req,res)=>{
    try{
        let urlData= req.params.loginid;
        let ans = await loginM.findByIdAndRemove(urlData);
        res.send({response:ans})
    }
    catch(err){
        res.send({error:err})
    }
}

module.exports = {
    getLogins,
    insertLogin,
    deleteLogin
}