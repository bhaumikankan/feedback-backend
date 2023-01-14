const mongoose=require('mongoose');
 mongoose.connect('mongodb+srv://hitaiml:hitaiml@cluster0.i4aw8.mongodb.net/?retryWrites=true&w=majority');
//mongoose.connect('mongodb+srv://feedback:feedback@cluster0.ufdpq.mongodb.net/?retryWrites=true&w=majority');
const conn=mongoose.connection;

conn.on('connected',()=>{
    console.log('db connected');
})

conn.on('error',()=>{
    console.log('db error');
})