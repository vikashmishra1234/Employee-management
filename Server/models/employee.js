import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    
jobTitle:{
    type:String,
    required:true

},

date:{
    type:String,
    required:true

},
startDate:{
    type:String,
    required:true

},
state:{
    type:String,
    required:true

},
status:{
    type:String,
    required:true

},
salary:{
    type:String,
    required:true

},
gender:{
    type:String,
    required:true

},
 
    
},
{
    timestamps:true
})

export default mongoose.model('employee',employeeSchema);