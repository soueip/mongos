const mongoose=require("mongoose");
const schema=mongoose.Schema;

const Personschema = new schema({
        name:{
            type:String,
            required:true
        } ,
    
        age: Number,
    
        favoriteFoods: [String]
    })
const  Person= mongoose.model("Person",Personschema);

module.exports = Person;