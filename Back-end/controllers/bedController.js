const bedM = require('../models/bedModel');

// https://mongoosejs.com/docs/api.html#model_Model.find
const getBed = async (req, res) => {
    try {
        let ans = await bedM.find({});
        // console.log(ans);
        res.send({ msg: ans })
    }
    catch (error) {
        console.log(error);
        res.send({ err: error })
    }
}

// const getUserByName = async(req,res)=>{
//     // console.log(req.params); //{username:Rohan}
//     var uname = req.params.username;
//     try{
//         //findOne({keyname from collection :value from url parameter});
//         let ans = await userM.find({name:uname});
//         res.send({ msg: ans })
//     }
//     catch (error) {
//         console.log(error);
//         res.send({ err: error })
//     }
//     // res.send({msg:"Route Called Which Is Having Parameter"})
// }

const postBed = async (req, res) => {
    // console.log(req.body);
    // res.send({ msg: "Post Called" })

    var recordFromBed = req.body; // {name:'xx',age:20,location:'xy'}
    const BedM_instance = new bedM(recordFromBed);

    try{
        let ans = await BedM_instance.save();
        res.send({msg:ans});
    }
    catch (error) {
        console.log(error);
        res.send({ err: error })
    }
}

const deleteBed = async(req,res)=>{
    // console.log(req.params); 
    var uid = req.params.userid;
    // console.log(uid)
    // res.send({msg:"Delete Route Called"})

    try{
        let ans = await bedM.findByIdAndRemove(uid);
        // let ans = await userM.remove({name:uid});
        res.send({msg:ans});
    }
    catch (error) {
        console.log(error);
        res.send({ err: error })
    }
}

const updateBed = async(req,res)=>{
    // console.log(req.params)
    var uid = req.params.userid;
    // console.log(req.body);
    var textBoxData = req.body;

    try{
        let ans = await bedM.findByIdAndUpdate(uid , textBoxData);
        // let ans = await userM.remove({name:uid});
        res.send({msg:ans});
    }
    catch (error) {
        console.log(error);
        res.send({ err: error })
    }
}

module.exports = {
    getBed,
    postBed,
    deleteBed,
    updateBed
}