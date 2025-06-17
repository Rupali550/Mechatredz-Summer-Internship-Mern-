const  mongoose = require ("mongoose");
const userSchema = new mongoose.Schema({

  name:{
    type:String,
    require:true

  },
  email:{
    type:String,
    require:true,
    unique:true
  },
  password:{
    type:String,
    require:true  
  },
  role:{
    trype:String,
    enum:["Admin","Student","visitor"]
  }

});

export const User= mongoose.model("User",userSchema);