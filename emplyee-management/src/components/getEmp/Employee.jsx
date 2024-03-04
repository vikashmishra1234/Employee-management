import { Box, Typography, styled } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Emp from "./Emp";
import { deleteEmp, getEmp } from "../../API/Api";
import ContextProvider from "../../context/ContextProvider";
import { DataGrid } from "@mui/x-data-grid";
import Search from "./Search";
import { useNavigate } from "react-router-dom";


const Container = styled(Box)`
  display: flex;
  justify-content: space-around;
`;

const btn = {
  margin:' 4px',
    backgroundColor: '#80d380',
    border: 'none',
    width: '50px',
    borderRadius:' 5px',
    height: '30px',
    cursor:'pointer'
}
const btn1 = {
  margin:' 4px',
    backgroundColor: '#e92b2b',
    border: 'none',
    width: '50px',
    borderRadius:' 5px',
    height: '30px',
    cursor:'pointer',
    
}

const Employee = () => {
  const Navigate = useNavigate();
  const { emplData, setEdit, setEmp } = useContext(ContextProvider);
  const [name, setName] = useState("");
  const [i, setI] = useState(1);
const handleDelete = async(data)=>{
  const res = await deleteEmp(data);
  setI(2)
   
}
  const handleEdit = async (data) => {
    setEdit(data);
    Navigate("/addemp");
  };
  useEffect(() => {
    setEdit({})
    const getData = async () => {
      let empls = await getEmp();
      setEmp(empls);
    };
    getData();
  }, [i]);
  const filterData = emplData.filter((data) => {
    return data.firstName.toLowerCase().includes(name);
  });

  return (
    <Box overflow={"scroll"} display={"flex"} flexDirection={"column"}>
      <Box>
        <Search setName={setName} />
      </Box>

      <Box
        sx={{
          boxShadow: "1px 2px 13px",
          background: "#ded8d8",
          width: "fit-content",
          padding: "10px 10px 10px 0px",
          borderRadius: "20px",
        }}
      >
        <Typography paddingLeft={"10px"} paddingBottom={'20px'} variant="h4">
          Employee table
        </Typography>
        <table style={{ borderCollapse: "collapse", width: "120vw" }}>
          <tbody>
            <tr
              style={{ background: "#1c6e71", color: "wheat", height: "7vh" }}
            >
              <th style={{ padding: "4px", fontSize: "18px" }}>Id</th>
              <th style={{ padding: "4px", fontSize: "18px" }}>Name</th>
              <th style={{ padding: "4px", fontSize: "18px" }}>email</th>
              <th style={{ padding: "4px", fontSize: "18px" }}>phone</th>
              <th style={{ padding: "4px", fontSize: "18px" }}>DOB</th>
              <th style={{ padding: "4px", fontSize: "18px" }}>gender</th>
              <th style={{ padding: "4px", fontSize: "18px" }}>address</th>
              <th style={{ padding: "4px", fontSize: "18px" }}>status</th>
              <th style={{ padding: "4px", fontSize: "18px" }}>jobTitle</th>
              <th style={{ padding: "4px", fontSize: "18px" }}>startDate</th>
              <th style={{ padding: "4px", fontSize: "18px" }}>salary</th>
              <th style={{ padding: "4px", fontSize: "18px" }}>action</th>
            </tr>
            {filterData.map((data, index) => (
              <tr key={data.email}>
                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    height: "10vh",
                  }}
                >
                  {index + 1} <hr />
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    height: "10vh",
                  }}
                >
                  {data.firstName + " " + data.lastName} <hr />
                </td>

                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    height: "10vh",
                  }}
                >
                  {data.email} <hr />
                </td>

                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    height: "10vh",
                  }}
                >
                  {data.phone} <hr />
                </td>

                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    height: "10vh",
                  }}
                >
                  {data.date} <hr />
                </td>

                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    height: "10vh",
                  }}
                >
                  {data.gender} <hr />
                </td>

                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    height: "10vh",
                  }}
                >
                  {data.address +
                    ", " +
                    data.city +
                    ", " +
                    data.state +
                    ", " +
                    data.country}{" "}
                  <hr />
                </td>

                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    height: "10vh",
                  }}
                >
                  {data.status} <hr />
                </td>

                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    height: "10vh",
                  }}
                >
                  {data.jobTitle} <hr />
                </td>

                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    height: "10vh",
                  }}
                >
                  {data.startDate} <hr />
                </td>

                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    height: "10vh",
                  }}
                >
                  {data.salary} <hr />
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    height: "10vh",
                  }}
                >
                 
                  <button
                  style={btn}
                    onClick={() => {
                      handleEdit(data);
                    }}
                  >
                    edit
                  </button>
                  <button  style={btn1} onClick={()=>handleDelete(data)}>delete</button> <hr />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default Employee;
