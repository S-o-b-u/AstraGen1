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
    ResultData,
    onSent,
  } = useContext(Context);

  return (
    <>
      <div className="relative w-[100%] px-5 py-5">
        <nav className=" flex justify-between ">
          <h1 className="absolute text-white left-[6vw] text-2xl font-semibold">
            AstraG
          </h1>
          <div className="absolute right-[5vw] top-5 bg-white w-[5vw] h-[6vh] rounded-full ">
            <img
              className="absolute left-[50%] -translate-x-[50%] p-1 w-10"
              src=".\icons\icons8-ghost.gif"
              alt="github"
            />
          </div>
          <img
            className=" absolute right-5 w-[40px] h-[40px]"
            src=".\icons\cat.png"
            alt="user"
          />
        </nav>
      </div>

      {!ShowResult ? (
        <>
          <div className="greet-cards  absolute left-[50%] -translate-x-[50%] top-28 ">
            <p className="text-[15vh]">
              <span>Hello Deviies!</span>
            </p>
            <p className="text-[7vh] absolute top-32 left-2">
              How can i help you today :){" "}
            </p>
            <div className="cards relative text-white mt-24 flex gap-5 ">
              <div className="card relative transition-all ease-in-out duration-300 bg-[#181B18] hover:bg-[#161816] p-5 w-40 h-[26vh] rounded-3xl ">
                <p className="text-[13px] w-24">
                  Suggest beautiful places to see on an upcoming road trip.
                </p>
                <img
                  className="w-[30px] h-[30px] absolute  bottom-5 right-5"
                  src=".\icons\airplane.png"
                  alt=""
                />
              </div>
              <div className="card relative transition-all ease-in-out duration-300 bg-[#181B18] hover:bg-[#161816] p-5 w-40 h-[26vh] rounded-3xl">
                <p className="text-[13px] w-24">
                  Briefly summarize this concept: urban planning.
                </p>
                <img
                  className="w-[30px] h-[30px] absolute  bottom-5 right-5"
                  src=".\icons\urban.png"
                  alt=""
                />
              </div>
              <div className="card relative transition-all ease-in-out duration-300 bg-[#181B18] hover:bg-[#161816] p-5 w-40 h-[26vh] rounded-3xl">
                <p className="text-[13px] w-24">
                  Brainstorm team bonding activities for our work retreat.
                </p>
                <img
                  className="w-[35px] h-[35px] absolute  bottom-5 right-5"
                  src=".\icons\brain.png"
                  alt=""
                />
              </div>
              <div className="card relative transition-all ease-in-out duration-300 bg-[#181B18] hover:bg-[#161816] p-5 w-40 h-[26vh] rounded-3xl">
                <p className="text-[13px] w-24">
                  Tell me about React js and React native.
                </p>
                <img
                  className="w-[35px] h-[35px] absolute bottom-5 right-5"
                  src=".\icons\react.png"
                  alt=""
                />
              </div>
            </div>
          </div>


        </>
      ) : (
        <>
          <div className="result bg-blue-200 w-100% h-[71vh] overflow-auto absolute px-36 py-2 top-24  flex flex-col gap-4  text-white">
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
      <div className="prompt flex gap-5 absolute bg-[#181B18] left-[50%] -translate-x-[50%] bottom-14 w-[46vw] rounded-full p-3">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={Input}
          className="w-[90%] text-white ml-3 border-none outline-none bg-transparent"
          type="text"
          placeholder=""
        />

        <button onClick={() => onSent()}>
          <img src=".\icons\send.svg" alt="" />
        </button>
      </div>
    </>
  );
};

export default Main;
