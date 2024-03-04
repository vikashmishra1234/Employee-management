import { Box,Typography } from '@mui/material'
import React, { useContext } from 'react'
import styled from '@emotion/styled'
// import Img from '../../../utils/bg-greet.jpg'
import Img from '../../../utils/bg2.jpg';
import ContextProvider from '../../../context/ContextProvider';

const Heading = styled(Box)`
left: 51%;
font-size:40px;
position: absolute;
font-weight:500;
top: 11%;
color: antiquewhite;
letter-spacing: 2px;
`

const Greet = () => {
  const {editData}=useContext(ContextProvider)
  const isEmpty = Object.keys(editData).length === 0;

  return (
   <Box  >
       <img src={Img} alt="" />
    <Heading  variant="h2">Welcome !
    {isEmpty?<small  style={{display:'block',fontSize:'14px',marginLeft:'40px'}}>Add Employee</small>:<small  style={{display:'block',fontSize:'14px',marginLeft:'40px'}}>Edit Employee</small>}
    </Heading>
   </Box>
  )
}

export default Greet
