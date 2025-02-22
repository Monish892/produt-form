const mongoose=require('mongoose')

const Productschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true,
    },

    price:{
        type:Number,

    },

    stock:{
        type:Number
    }
})


module.exports=mongoose.model('Product',Productschema)