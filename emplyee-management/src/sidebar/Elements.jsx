import { List, Box, ListItem, Tab, styled } from "@mui/material";
import React from "react";
import { Link  } from "react-router-dom";

const Navigator = styled(ListItem)`
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  margin: 20px auto 10px auto;
  background: #dacdcd;
  width: 60%;
  box-shadow: 5px 3px 3px #a7a1a1;
  border-radius: 2px 15px;
  color: #dc800a;

`;

const Elements = () => {
  return (
    <Box marginTop={"20px"}>
      <List>
        <Link style={{textDecoration:'none'}}  to="/">
          
          <Navigator>Dashboard</Navigator>
        </Link >

        <Link style={{textDecoration:'none'}}   to="/getemp">
          
          <Navigator>Employee</Navigator>
        </Link >

        <Link style={{textDecoration:'none'}}  to="/addemp">
          
          <Navigator> Add Employee</Navigator>
        </Link >
      </List>
    </Box>
  );
};

export default Elements;
