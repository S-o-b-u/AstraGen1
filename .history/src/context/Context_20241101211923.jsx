import React, { createContext } from 'react'

const Context = createContext();


const ContextProvider = (props) => {
    const onSent =()

  return (
   <Context.Provider>
    {props.children}
   </Context.Provider>
  )
}

export default ContextProvider
