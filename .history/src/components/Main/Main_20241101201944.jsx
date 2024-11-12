import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <>
      <div className="relative w-[100%] px-5 py-5">
        <nav className=" flex justify-between ">
          <h1 className="absolute text-white left-[6vw] text-2xl font-semibold">
            Astra Gen 1
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
      <div className="content  absolute left-[50%] -translate-x-[50%] top-28 ">
        <p className="text-[15vh]"><span>Hello Deviies!</span></p>
        <p className="text-[7vh] absolute top-32 left-2">
          How can i help you today :){" "}
        </p>
        <div className="cards relative text-white mt-24 flex gap-5 ">
          <div className="card relative transition-all ease-in-out duration-300 bg-[#2c2c2c] hover:bg-[#202020] p-5 w-40 h-[26vh] rounded-3xl ">
            <p className="text-[13px] w-24">Suggest beautiful places to see on an upcoming road trip.</p>
            <img className="w-[30px] h-[30px] absolute  bottom-5 right-5" src=".\icons\airplane.png" alt="" />
          </div >
          <div className="card relative transition-all ease-in-out duration-300 bg-[#2c2c2c] hover:bg-[#202020] p-5 w-40 h-[26vh] rounded-3xl">
            <p className="text-[13px] w-24">Briefly summarize this concept: urban planning.</p>
            <img className="w-[30px] h-[30px] absolute  bottom-5 right-5" src=".\icons\urban.png" alt="" />
          </div>
          <div className="card relative transition-all ease-in-out duration-300 bg-[#2c2c2c] hover:bg-[#202020] p-5 w-40 h-[26vh] rounded-3xl">
            <p className="text-[13px] w-24">Brainstorm team bonding activities for our work retreat.</p>
            <img  className="w-[35px] h-[35px] absolute  bottom-5 right-5" src=".\icons\brain.png" alt="" />
          </div>
          <div className="card relative transition-all ease-in-out duration-300 bg-[#2c2c2c] hover:bg-[#202020] p-5 w-40 h-[26vh] rounded-3xl">
            <p className="text-[13px] w-24">Tell me about React js and React native.</p>
            <img className="w-[35px] h-[35px] absolute bottom-5 right-5"src=".\icons\react.png" alt="" />
          </div>
        </div>
      </div>
      <div className="prompt">
        <input type="text"  />
        <img src="" alt="" />
      </div>
    </>
  );
};

export default Main;
