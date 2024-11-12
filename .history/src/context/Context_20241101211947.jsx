import React, { createContext } from 'react'

const Context = createContext();


const ContextProvider = async (props) => {
    const onSent =(prompt)=>{
await 
    }

  return (
   <Context.Provider>
    {props.children}
   </Context.Provider>
  )
}

export default ContextProvider
