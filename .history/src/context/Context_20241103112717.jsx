import React, { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const onSent = async () => {
    await run(Input);
  };
  const [Input, setInput] = useState("");
  const [RecentPrompt, setRecentPrompt] = useState("");
  const [PrevPrompt, setPrevPrompt] = useState([]);
  const [ShowResult, setShowResult] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [ResultData, setResultData] = useState("");

  return (
    <Context.Provider value={{
      Input,
      setInput,
      RecentPrompt,
      setRecentPrompt,
      PrevPrompt,
      setPrevPrompt,
      ShowResult,
      Loading,
      ResultData,
      onSent
    }}>
      {children}
    </Context.Provider>
  );
};
