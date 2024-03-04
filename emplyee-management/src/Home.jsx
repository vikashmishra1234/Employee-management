import { Box } from "@mui/material";
import React from "react";
import SideDrawer from "./sidebar/SideDrawer";
import AddEmp from "./components/AddEmp/AddEmp";
import GetEmp from "./components/getEmp/Employee";
import ContextState from './context/ContextState';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/AddEmp/component/Form";
import Dashboard from "./components/Dashboard/Dashboard";

const Home = () => {
  return (
    <Box display={'flex'}>
      <ContextState>

      <Router>
        <SideDrawer/>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/addemp" element={<AddEmp />} />
          <Route exact path="/getemp" element={<GetEmp />} />
        </Routes>
      </Router>
      </ContextState>
    </Box>
  );
};

export default Home;
