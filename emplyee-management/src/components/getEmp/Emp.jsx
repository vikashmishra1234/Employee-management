import { Box, Typography } from "@mui/material";

import React from "react";

const Emp = (props) => {
  return (
    <Box>
         <Emp
          key={data.email}
            address={data.address + data.city + data.state + data.country}
            Name={data.firstName + data.lastName}
            email={data.email}
            phone={data.phone}
            salary={data.salary}
            jobTitle={data.jobTitle}
            gender={data.gender}
            status={data.status}
          />
    
      <Box display={'flex'} justifyContent={'space-around'}>
        <Typography>{props.Name}</Typography>
        <Typography>{props.email}</Typography>
        <Typography>{props.phone}</Typography>
        <Typography>{props.gender}</Typography>
        <Typography>{props.address}</Typography>
        <Typography>{props.salary}</Typography>
        <Typography>{props.jobTitle}</Typography>
        <Typography>{props.status}</Typography>
      </Box>
    </Box>
  );
};

export default Emp;
