import axios from "axios";

export const addEmp=async (Data)=>{
    try {
        const res = await axios.post('http://localhost:5000/addemp',Data);
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error.message,"error while calling add emp")
        return error.message
        
    }
}
export const getEmp=async ()=>{
    try {
        const res = await axios.get('http://localhost:5000/getemp');
        return res.data
    } catch (error) {
        console.log(error.message,"error while calling get emp")
        return error.message
        
    }
}
export const updateEmp=async (data)=>{
    console.log(data)
    try {
        const res = await axios.post('http://localhost:5000/updateemp',data);
        return res.data
    } catch (error) {
        console.log(error.message,"error while calling post emp")
        return error.message
        
    }
}
export const deleteEmp=async (data)=>{
    console.log(data)
    try {
        const res = await axios.post('http://localhost:5000/deleteemp',data);
        return res.data
    } catch (error) {
        console.log(error.message,"error while calling delet emp")
        return error.message
        
    }
}
export const recentEmp=async ()=>{
   
    try {
        const res = await axios.get('http://localhost:5000/recentemp');
        return res.data
    } catch (error) {
        console.log(error.message,"error while calling delet emp")
        return error.message
        
    }
}