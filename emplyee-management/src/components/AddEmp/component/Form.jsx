import styled from "@emotion/styled";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Divider,
  Button,
} from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import { addEmp, updateEmp } from "../../../API/Api";
import ContextProvider from "../../../context/ContextProvider";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(Paper)`
  position: absolute;
  width: 73%;
  left: 21%;
  height: fit-content;
  top: 34%;
  border-radius: 17px;
  padding: 10px;
`;
const Input = styled(TextField)`
  width: 33vw;
  margin-top: 20px;
  margin-left: 15px;
`;

const Form = () => {
  const { editData, setEdit } = useContext(ContextProvider);
  const [empDetails, setDetails] = useState({});
  const frm = useRef()
  const Navigate = useNavigate()

  const isEmpty = Object.keys(editData).length === 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(empDetails);
    if(isEmpty){
      let res = await addEmp(empDetails);
     setDetails({})
      

    }
    else{
      let updatedEmp = editData;
    console.log('updated data is',updatedEmp)
    let res =await updateEmp(updatedEmp);
    setEdit({})
    Navigate('/getemp')
    
    }
  };
 

  return (
    <>
      <Wrapper sx={{ height: "100%", width: "90%" }} elevation={10}>
        <Box ref={frm} component={"form"} onSubmit={handleSubmit}>
          <Typography
            sx={{ marginTop: "3px", textAlign: "center" }}
            variant="h5"
          >
            Add Details
          </Typography>
          <Box>
            <Input
            key={2}
              value={isEmpty?null:editData.firstName}
              required
              onChange={(e) => {
                isEmpty
                  ? 
                   setDetails({
                      ...empDetails,
                      [e.target.name]: e.target.value
                    })
                  : setEdit({ ...editData, [e.target.name]: e.target.value });
              }}
              name="firstName"
              label={!isEmpty ? "" : "First Name"}
            />
            <Input
              value={isEmpty?null:editData.lastName}
              required
              onChange={(e) => {
                isEmpty
                  ? setDetails({
                      ...empDetails,
                      [e.target.name]: e.target.value,
                    })
                  : setEdit({ ...editData, [e.target.name]: e.target.value });
              }}
              name="lastName"
              label={!isEmpty ? "" : "Last Name"}
            />
            <Input
              value={isEmpty?null:editData.email}
              required
              onChange={(e) => {
                isEmpty
                  ? setDetails({
                      ...empDetails,
                      [e.target.name]: e.target.value,
                    })
                  : setEdit({ ...editData, [e.target.name]: e.target.value });
              }}
              name="email"
              label={!isEmpty ? "" : "Email"}
              type="email"
            />
            <Input
              value={isEmpty?null: editData.phone}
              required
              onChange={(e) => {
                isEmpty
                  ? setDetails({
                      ...empDetails,
                      [e.target.name]: e.target.value,
                    })
                  : setEdit({ ...editData, [e.target.name]: e.target.value });
              }}
              name="phone"
              label={!isEmpty ? "" : "Phone Number"}
            />
            <Input
              value={isEmpty?null:editData.gender}
              required
              onChange={(e) => {
                isEmpty
                  ? setDetails({
                      ...empDetails,
                      [e.target.name]: e.target.value,
                    })
                  : setEdit({ ...editData, [e.target.name]: e.target.value });
              }}
              name="gender"
              label={!isEmpty ? "" : "Gender"}
            />
            <Input
              value={isEmpty?null:editData.date}
              required
              onChange={(e) => {
                isEmpty
                  ? setDetails({
                      ...empDetails,
                      [e.target.name]: e.target.value,
                    })
                  : setEdit({ ...editData, [e.target.name]: e.target.value });
              }}
              name="date"
              type="date"
              label={!isEmpty ? "" : "date of birth"}
            />
          </Box>

          <Typography
            sx={{
              marginTop: "20px",
              marginBottom: "10px",
              textAlign: "center",
            }}
            variant="h5"
          >
            Address Details
          </Typography>
          <Divider />
          <Box>
            <Input
              value={isEmpty?null:editData.address}
              required
              onChange={(e) => {
                isEmpty
                  ? setDetails({
                      ...empDetails,
                      [e.target.name]: e.target.value,
                    })
                  : setEdit({ ...editData, [e.target.name]: e.target.value });
              }}
              name="address"
              label={!isEmpty ? "" : "city"}
            />
            <Input
              value={isEmpty?null:editData.city}
              required
              onChange={(e) => {
                isEmpty
                  ? setDetails({
                      ...empDetails,
                      [e.target.name]: e.target.value,
                    })
                  : setEdit({ ...editData, [e.target.name]: e.target.value });
              }}
              name="city"
              label={!isEmpty ? "" : "district"}
            />
            <Input
              value={isEmpty?null:editData.state}
              required
              onChange={(e) => {
                isEmpty
                  ? setDetails({
                      ...empDetails,
                      [e.target.name]: e.target.value,
                    })
                  : setEdit({ ...editData, [e.target.name]: e.target.value });
              }}
              name="state"
              label={!isEmpty ? "" : "state"}
            />
            <Input
              value={isEmpty?null:editData.country}
              required
              onChange={(e) => {
                isEmpty
                  ? setDetails({
                      ...empDetails,
                      [e.target.name]: e.target.value,
                    })
                  : setEdit({ ...editData, [e.target.name]: e.target.value });
              }}
              name="country"
              label={!isEmpty ? "" : "country"}
            />
          </Box>
          <Typography
            sx={{
              marginTop: "20px",
              marginBottom: "10px",
              textAlign: "center",
            }}
            variant="h5"
          >
            Job Details
          </Typography>
          <Box>
            <Input
              value={isEmpty?null:editData.jobTitle}
              required
              onChange={(e) => {
                isEmpty
                  ? setDetails({
                      ...empDetails,
                      [e.target.name]: e.target.value,
                    })
                  : setEdit({ ...editData, [e.target.name]: e.target.value });
              }}
              name="jobTitle"
              label={!isEmpty ? "" : "job title"}
            />
            <Input
              value={isEmpty?null:editData.status}
              required
              onChange={(e) => {
                isEmpty
                  ? setDetails({
                      ...empDetails,
                      [e.target.name]: e.target.value,
                    })
                  : setEdit({ ...editData, [e.target.name]: e.target.value });
              }}
              name="status"
              label={!isEmpty ? "" : "part or full time"}
            />
            <Input
              value={isEmpty?null:editData.salary}
              required
              onChange={(e) => {
                isEmpty
                  ? setDetails({
                      ...empDetails,
                      [e.target.name]: e.target.value,
                    })
                  : setEdit({ ...editData, [e.target.name]: e.target.value });
              }}
              name="salary"
              label={!isEmpty ? "" : "salary"}
            />
            <Input
              value={isEmpty?null:editData.startDate}
              required
              onChange={(e) => {
                isEmpty
                  ? setDetails({
                      ...empDetails,
                      [e.target.name]: e.target.value,
                    })
                  : setEdit({ ...editData, [e.target.name]: e.target.value });
              }}
              name="startDate"
              label={!isEmpty ? "" : "joining date"}
              type="date"
            />
          </Box>
          <Button
            type="submit"
            fullWidth
            sx={{ margin: "20px 0px 20px 0px" }}
            variant="contained"
          >
            {isEmpty ? "Add Employee" : "Update Employee"}
          </Button>
        </Box>
      </Wrapper>
    </>
  );
};

export default Form;
