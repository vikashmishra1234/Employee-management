import React from 'react'
import { Box } from '@mui/material'
import { IoSearchSharp } from "react-icons/io5";

const Search = ({setName}) => {
  return (
    <Box minHeight={'27vh'} component='section' >
        
        <Box component={'aside'} borderRadius={'5px'} padding={'3px'} border={'1px solid'}  left={'75%'} top={'10%'} position={'absolute'} >
       <IoSearchSharp /> <input onChange={(e)=>setName(e.target.value)} style={{outline:'none',height:'25px',border:'none',padding:'5px',borderRadius:'5px'}} placeholder='type here' type="search" />
        </Box>
       
    </Box>
  )
}

export default Search
