import React from "react";

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
            src=".\icons\user.png"
            alt="user"
          />
        </nav>
      </div>
      <div className="content bg-red-50 absolute left-[50%] -translate-x-[50%] top-28 ">
        <h1 className="text-[15vh] text-[linear-gradient(to_bottom,_#be4bdb_5%,_#9775fa_95%)]">Hello Deviies!</h1>
        <h2 className="text-[7vh] absolute top-32 left-2">How can i help you today :) </h2>
        <div className="cards text-white">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src="" alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src="" alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src="" alt="" />
          </div>
          <div className="card">
            <p>Tell me about React js and React native</p>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
