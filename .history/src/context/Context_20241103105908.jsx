import React, { createContext } from "react";
import run from "../config/gemini";

const Context = createContext();

const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    await run(prompt);
  };
const [input, setinput] = useState("")
const [recentPrompt, setRecentPrompt] = useState("")
const [prevPrompt, setPrevPrompt] = useState([])
const [setshowResul, setsetshowResul] = useState(second)

const contextVAlue =()=>{

}
  return <Context.Provider value={contextVAlue}>{props.children}</Context.Provider>;
};

export default ContextProvider;
