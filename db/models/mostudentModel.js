const mongoose=require('mongoose');

const mostudentSchema=new mongoose.Schema({
    name:String,
    username:Number,
    password:Number,
    currentyear:Number,
    mocurrentpoint:{type:Number,default:0},
    mototal:{type:Number,default:0},
    mofirstpoint:{type:Number,default:0},
    mosecondpoint:{type:Number,default:0},
    mothirdpoint:{type:Number,default:0},
    mofourthpoint:{type:Number,default:0},
    moocsCertificates:[{type:mongoose.Schema.Types.ObjectId,ref:'Moocscertificate'}],
})

module.exports =  mongoose.model('MoStudent',mostudentSchema);