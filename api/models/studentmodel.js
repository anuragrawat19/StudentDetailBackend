// mongoose use to interact with a MongoDB(Database) instance.
var mongoose   = require("mongoose");
var Schema     = mongoose.Schema; //intantiating the moongoose for creating the schema


var StudentSchema = new Schema({
    rol_number:{
        type:Number
    },
    name:{
        type:String
    },
    created_date:{
        type:Date,
        default:Date.now
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:[{
            type:String,
            enum:["Male","Female"]    
        }]

    }
})

module.exports = mongoose.model("StudentDetail",StudentSchema)