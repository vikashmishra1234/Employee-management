import React, { useState } from 'react'
import ContextProvider from './ContextProvider.jsx';

const ContextState = (props) => {
    const [emplData,setEmp]=useState([]);
    const [editData,setEdit]=useState({});
  return (
    <ContextProvider.Provider value={{emplData,editData,setEdit,setEmp}} >
        {props.children}
    </ContextProvider.Provider>
  )
}

export default ContextState
