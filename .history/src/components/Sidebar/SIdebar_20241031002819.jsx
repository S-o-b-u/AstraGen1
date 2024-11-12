import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);
const [extended, setextended] = useState(false)
  return (
    <div className="relative h-[100%] bg-[#1d1f21] inline-block">
      <div className="upper">
       
        <div className="mt-12 flex bg-[#282a2c] ease-in duration-200 hover:bg-[#3e4144] m-2 p-2 rounded-full  justify-center items-center gap-2 ">
          <img src=".\icons\add-fill.svg" alt="" />
         {extended? <h1 className="font-semibold text-white">New Chat</h1>:null}
        </div>
      </div>

      {extended?<div className="recents mt-11 m-5">
        <h2 className="text-white mb-5">Recents</h2>
        <div className="text-white flex gap-3 text-sm">
          <img src=".\icons\recent.svg" alt="" />
          <p>What is react bbg?!</p>
        </div>
      </div>:null}
      
      <div className="lower m-5 mt-72 flex flex-col gap-5">
        <div className="text-white flex gap-3 ">
          <img src=".\icons\heart.svg" alt="" />
         {extended?<h2>Follow</h2>:null}
        </div>
        <div className="text-white flex gap-3 ">
          <img src=".\icons\help.svg" alt="" />
          {extended?<h2>Help</h2>:null}

        </div>
        <div className="text-white flex gap-3 ">
          <img src=".\icons\contri.svg" alt="" />
         {extended?<h2>Contribute</h2>:null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
