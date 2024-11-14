import { useContext } from "react";
import "./Main.css";
import { Context } from "../../context/Context";
import MyLoader from "../Loader/Loader";
const Main = () => {
 
  const {
    Input,
    setInput,
    RecentPrompt,
    setRecentPrompt,
    PrevPrompt,
    setPrevPrompt,
    ShowResult,
    Loading,
    setResultData,
    ResultData,
    onSent,
  } = useContext(Context);
  const handleKeyDown = (event)=>{
    if (event.key == "Enter") {
      onSent();
    }
  }
  const loadPrompt = (prompt) => {
    setInput(prompt);
  };
  return (
    <>
     
    </>
  );
};

export default Main;
