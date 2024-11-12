import React, { createContext, useState } from "react";
import run from "../config/gemini";
import 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css'; // Import a theme

// Initialize Prism.js
hljs.highlightAll();
export const Context = createContext();

const ContextProvider = (props) => {

  const formatCodeBlock = (code, language) => {
    return `<pre><code class="language-${language}">${code}</code></pre>`;
  };
  
  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(Input);
    const response = await run(Input);
    const formattedResponse = response.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '<br />')
    .replace(/\`\`\`/g, '<pre><code>$1</code></pre>')

console.log(formattedResponse);
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
