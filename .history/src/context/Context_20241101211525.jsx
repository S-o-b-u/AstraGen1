import React, { createContext } from 'react'

const Context = createContext();


const ContextProvider = (props) => {

  return (
   <Context.Provider>
    {props.chi}
   </Context.Provider>
  )
}

export default ContextProvider
