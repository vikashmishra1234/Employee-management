import employee from "../models/employee.js";

const updateEmp = async(req,res)=>{
    console.log(req.body.email)
    try {
        
        const exit = await employee.findOne({_id:req.body._id});
        if(!exit){ 
            return res.json({error:'employee not found'})
        }
        const update = await employee.replaceOne({_id:req.body._id},req.body)
     
        return res.status(200).json({message:'updated successfully'});
    } catch (error) {
        console.log(error.message)
        return res.json({error:error.message})
    }
}

export default updateEmp;