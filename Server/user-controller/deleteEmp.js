import employee from "../models/employee.js"

const deletEmp = async(req,res)=>{
        try {
            const Delete = await employee.deleteOne({email:req.body.email,phone:req.body.phone});
            if(Delete){
                console.log("deleted succesfully")
                return res.json({message:'deleted successfully'})
            }
            else{
                console.log("can not deleted")
                return res.json({error:'can not delete'})
            }

        } catch (error) {
            console.log("error while deleting")
            return res.json({error:error.message})
            
        }
}

export default deletEmp