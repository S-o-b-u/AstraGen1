import React, { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    await run(input);
  };
  const [Input, setInput] = useState("");
  const [RecentPrompt, setRecentPrompt] = useState("");
  const [PrevPrompt, setPrevPrompt] = useState([]);
  const [ShowResult, setShowResult] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const contextValue = () => {
      Input,
      setInput,
      recentPrompt,
      setRecentPrompt,
      prevPrompt,
      setPrevPrompt,
      showResult,
      loading,
      resultData,
      onSent
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
