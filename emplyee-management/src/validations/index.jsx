import * as Yup from 'yup';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const empSchema =Yup.object({
    firstName:Yup.string().min(3).max(15).required("this field is required"),
    lastName: Yup.string().min(3).max(15).required("this field is required"),
    address:Yup.string().min(3).max(35).required("this field is required"),
    city:Yup.string().min(3).max(20).required("this field is required"),
    country:Yup.string().min(3).max(15).required("this field is required"),
    date:Yup.date().required("this field is required"),
    email:Yup.string().email().required("this field is required"),
    gender:Yup.string().min(3).max(10).required("this field is required"),
    jobTitle:Yup.string().min(3).max(25).required("this field is required"),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    salary:Yup.string().required("this field is required"),
    startDate:Yup.date().required("this field is required"),
    state:Yup.string().min(3).max(25).required("this field is required"),
    status:Yup.string().min(3).max(25).required("this field is required"),
})