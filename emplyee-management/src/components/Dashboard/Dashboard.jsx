import { Box, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ContextProvider from "../../context/ContextProvider";
import { getEmp, recentEmp } from "../../API/Api";

const Dashboard = () => {
  const { emplData, setEmp, setEdit } = useContext(ContextProvider);
  const [recentEmps,setRecent] = useState([])
  const totalEmp = emplData.length;

  
  useEffect(() => {
    setEdit({});
    const getData = async () => {
      let empls = await getEmp();
      let res = await  recentEmp();
      setRecent(res)
      setEmp(empls);
    };
    getData();
  }, []);

  
  return (
    <Box width={"100%"} padding={"10px"}>
      <Typography sx={{ marginTop: "60px" }} variant="h4">
        Dashboard
      </Typography>
      <Box width={"20%"} position={"absolute"} top={"27%"}>
        <Paper
          elevation={8}
          sx={{ padding: "3px", paddingLeft: "10px", fontSize: "21px" }}
        >
          <h4>Total Employee: {totalEmp}</h4>
        </Paper>
      </Box>
      <Box width={"30%"} position={"relative"} top={"10%"} left={"40%"}>
        <Paper
          elevation={8}
          sx={{ padding: "3px", paddingLeft: "10px", fontSize: "21px" }}
        >
          <h4>Total orginization : 500+</h4>
        </Paper>
      </Box>
        <Box  marginTop={'80px'}  >

            <h1>Recently Joined </h1>
            <table style={{width:"70%",textAlign:'center'}}>
              <tbody>
                <tr>
                  <th>
                    Name
                  </th>
                  <th>
                    email
                  </th>
                  <th >
                    salary
                  </th>
                  <th>
                    start Date
                  </th>
                </tr>

          {
            recentEmps.map(data=>(
              <tr key={data.email}>
                <td>
                  {data.firstName+" "+data.lastName}
                </td>
                <td>
                  {data.email}
                </td>
                <td>
                  {data.salary}
                </td>
                <td>
                  {data.startDate}
                </td>
              </tr>
            ))
          }
              </tbody>

            </table>
      </Box>
  
    </Box>
  );
};

export default Dashboard;
