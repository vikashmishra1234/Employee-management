import React from 'react'
import {Box,Drawer, Paper, Typography} from '@mui/material'
import Elements from './Elements'
const SideDrawer = () => {
  return (
    <Paper variant='outlined' sx={{minWidth:'20vw',background:'beige',height:'95vh',paddingTop:'29px',textAlign:'center'}} >
      <Typography variant='h5' fontSize={'20px'} fontWeight={'600'}>
        Employee Management
      </Typography>
       <Box >
       <Elements/>
       </Box>
    </Paper>
  )
}

export default SideDrawer
