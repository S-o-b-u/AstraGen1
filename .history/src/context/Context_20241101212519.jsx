import React, { createContext } from "react";
import run from "../config/gemini";

const Context = createContext();

const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    await run();
  };
onSent("WHat is react?")
const contextVAlue =()=>{

}
  return <Context.Provider value={}>{props.children}</Context.Provider>;
};

export default ContextProvider;
