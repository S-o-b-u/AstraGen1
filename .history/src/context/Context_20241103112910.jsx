import React, { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = {CHI} => {
  const onSent = async (prompt) => {
    await run(Input);
  };
  const [Input, setInput] = useState("");
  const [RecentPrompt, setRecentPrompt] = useState("");
  const [PrevPrompt, setPrevPrompt] = useState([]);
  const [ShowResult, setShowResult] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [ResultData, setResultData] = useState("");

  const contextValue = () => {
    Input,
      setInput,
      RecentPrompt,
      setRecentPrompt,
      PrevPrompt,
      setPrevPrompt,
      ShowResult,
      Loading,
      ResultData,
      onSent;
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
