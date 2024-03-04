import Employee from "../models/employee.js";

const addEmp = async(req,res)=>{
        try {
            const exit = await Employee.findOne({email:req.body.email});
            if(exit){
                return res.status(200).json({error:'employee already exits'});
            }

            const newEmp = await Employee(req.body);
            await newEmp.save();
            return res.status(200).json({message:'Employee Added Successfully'});

        } catch (error) {
            console.log(error.message)
            return res.status(200).json({error:'something went wrong'});

        }
}

export default addEmp;