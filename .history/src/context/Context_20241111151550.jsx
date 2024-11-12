import React, { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {



  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(Input);
    const response = await run(Input);
    const formattedResponse = response.replace(
      /## (.*)/g,
      "<h2>$1</h2>"
    )
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/\n\n/g, // Matches double newlines and replaces with a paragraph tag
      "<p></p>") // Replaces with a closing and opening paragraph tag (<p></p>)
    .replace(/\n/g, // Matches single newlines and replaces with a line break
      "<br />")

    let newResponseArray = formattedResponse.split(" ");
    let delay = 0;
    newResponseArray.forEach((word, index) => {
      setTimeout(() => {
        setResultData((prev) => prev + word + " ");
      }, delay);
      delay += 75;
    });

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
