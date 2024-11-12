import React, { createContext } from 'react'

const Context = createContext();


const ContextProvider = (props) => {
    const onSent =(prompt)

  return (
   <Context.Provider>
    {props.children}
   </Context.Provider>
  )
}

export default ContextProvider
