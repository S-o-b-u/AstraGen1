import React, { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

const delayPara = (index, nextWord)=>{
  setInterval(() => {
    setResultData(prev=>prev+nextWord);
  }, 75*index);
}

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(Input);
    const response = await run(Input);
    const formattedResponse = response.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/\*/g, '<br />')
    .replace(/\n\n/g, '<br />');

    let newResponseArray = formattedResponse.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      delayPara()
      
    }
setResultData(formattedResponse);

    setLoading(false);
    setInput("");
  };
  const [Input, setInput] = useState("");
  const [RecentPrompt, setRecentPrompt] = useState("");
  const [PrevPrompt, setPrevPrompt] = useState([]);
  const [ShowResult, setShowResult] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [ResultData, setResultData] = useState("");

  const contextValue = {
    Input,
    setInput,
    RecentPrompt,
    setRecentPrompt,
    PrevPrompt,
    setPrevPrompt,
    ShowResult,
    Loading,
    ResultData,
    onSent,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
