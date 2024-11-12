import React, { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [Input, setInput] = useState("");
  const [RecentPrompt, setRecentPrompt] = useState("");
  const [PrevPrompt, setPrevPrompt] = useState([]);
  const [ShowResult, setShowResult] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [ResultData, setResultData] = useState("");

  const onSent = async () => {
    try {
      setLoading(true);
      const result = await run(Input);
      setResultData(result);
      setShowResult(true);
      setRecentPrompt(Input);
      setPrevPrompt(prev => [...prev, Input]);
      setInput("");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

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
