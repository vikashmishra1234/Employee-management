import Employee from "../models/employee.js"

const getEmp = async(req,res)=>{

    try {
        const employee = await Employee.find({});
        if(!employee){
            return res.status(404).json({error:'employee not found'});
        }
        return res.status(200).json(employee )
    } catch (error) {
            console.log(error.message)
            return res.json({error:error.message})
    }


}

export default getEmp