import employee from "../models/employee.js";

const getRecentEmp = async (req,res) => {
  try {
    let today = new Date();
    let date = new Date();
    date.setDate(date.getDate() - 2);

    const recentEmp = await employee.find({
      createdAt: { $gte: date, $lt: today },
    });

        if(!recentEmp){
                return res.status(404).json({error:'no recent emp'})
        }
        return res.status(200).json(recentEmp)

  } catch (error) {
    console.log(error.message);
    return res.status(404).json({error:error.message})

  }
};

export default getRecentEmp;
