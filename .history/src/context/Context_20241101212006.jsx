import React, { createContext } from 'react'
import run from '../config/gemini';

const Context = createContext();


const ContextProvider = async (props) => {
    const onSent =(prompt)=>{
await run();
    }

  return (
   <Context.Provider>
    {props.children}
   </Context.Provider>
  )
}

export default ContextProvider
