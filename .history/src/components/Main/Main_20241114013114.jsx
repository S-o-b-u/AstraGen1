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
     <div className="relative w-[100%] h-[100vh] overflow-hidden">
     <div className="relative px-5 py-5">
        <nav className=" flex justify-between ">
          <h1 className="absolute text-white left-16  lg:left-[6vw] text-2xl font-semibold">
            AstraG
          </h1>
          <img
            className=" absolute right-5 bottom- w-[40px] h-[40px]"
            src=".\icons\cat.png"
            alt="user"
          />
        </nav>
      </div>

      {!ShowResult ? (
        <>
          <div className="greet-cards relative h-32 text-center top-12 lg;top-20 ">
            <div className=" relative flex justify-center">
            <p className="text-[7vh] absolute lg:text-[13vh]">
              <span>Hello Deviies!</span>
            </p>
            <p className="text-[2.5vh] lg:text-[5vh] absolute mt-16 lg:mt-28 ">
            Ask anything, I’m here to help!{" "}
            </p>
            </div>
            <div className="cards justify-center lg:absolute lg:left-[50%] lg:-translate-x-[50%] text-white mt-28 lg:mt-64 flex flex-wrap gap-2 lg:gap-5 ">
              <div onClick={()=>loadPrompt("Suggest beautiful places to see on an upcoming road trip.")} className="card relative transition-all text-start ease-in-out duration-300 bg-[#181B18] hover:bg-[#161816] p-5 lg:w-40 lg:h-[26vh] rounded-3xl ">
                <p className="text-[13px] w-24">
                  Suggest beautiful places to see on an upcoming road trip.
                </p>
                <img
                  className="w-[30px] h-[30px] absolute  bottom-5 right-5 opacity-0 lg:opacity-100"
                  src=".\icons\airplane.png"
                  alt=""
                />
              </div>
              <div onClick={()=>loadPrompt("Briefly summarize this concept: urban planning.")} className="card relative transition-all text-start ease-in-out duration-300 bg-[#181B18] hover:bg-[#161816] p-5 lg:w-40 lg:h-[26vh] rounded-3xl">
                <p className="text-[13px] w-24">
                  Briefly summarize this concept: urban planning.
                </p>
                <img
                  className="w-[30px] h-[30px] absolute  bottom-5 right-5 opacity-0 lg:opacity-100"
                  src=".\icons\urban.png"
                  alt=""
                />
              </div>
              <div onClick={()=>loadPrompt("Brainstorm team bonding activities for our work retreat.")} className="card relative transition-all text-start ease-in-out duration-300 bg-[#181B18] hover:bg-[#161816] p-5 lg:w-40 lg:h-[26vh] rounded-3xl">
                <p className="text-[13px] w-24">
                  Brainstorm team bonding activities for our work retreat.
                </p>
                <img
                  className="w-[35px] h-[35px] absolute  bottom-5 right-5 opacity-0 lg:opacity-100"
                  src=".\icons\brain.png"
                  alt=""
                />
              </div>
              <div onClick={()=>loadPrompt("Tell me about React js and React native.")} className="card relative transition-all text-start ease-in-out duration-300 bg-[#181B18] hover:bg-[#161816] p-5 lg:w-40 lg:h-[26vh] rounded-3xl">
                <p className="text-[13px] w-24">
                  Tell me about React js and React native.
                </p>
                <img
                  className="w-[35px] h-[35px] absolute  bottom-5 right-5 opacity-0 lg:opacity-100"
                  src=".\icons\react.png"
                  alt=""
                />
              </div>
            </div>
          </div>


        </>
      ) : (
        <>
          <div className="result w-100% h-[71vh] overflow-auto absolute px-72 py-2 top-24  flex flex-col gap-4  text-white">
            <div className="user flex gap-3 items-center">
              <img
                className="w-[30px] h-[30px]"
                src=".\icons\cat.png"
                alt="user"
              />
              <p>{RecentPrompt}</p>
            </div>
            <div className="result-data  ml-1   flex gap-2">
              <img  className="w-[30px] h-[30px]"
                src=".\icons\chai-tea.png"
                alt="user" />
                {Loading? <MyLoader/>
                :
              <p className=" mt-1" dangerouslySetInnerHTML={{ __html: ResultData }} />
            }
            </div>
          </div>
        </>
      )}
      <div className="prompt flex gap-5 absolute bg-[#181B18] left-[50%] -translate-x-[50%] bottom-32 lg:bottom-16 w-[90%] lg:w-[46vw] rounded-full p-3">
        <input
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          value={Input}
          className="w-[90%] text-white ml-3 border-none outline-none bg-transparent"
          type="text"
          placeholder=""
        />

        <button onClick={() => onSent()}>
          <img src=".\icons\send.svg" alt="" />
        </button>
      </div>
     </div>
    </>
  );
};

export default Main;
