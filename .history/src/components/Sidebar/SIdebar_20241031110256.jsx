import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);
const [extended, setextended] = useState(false)
const isExtend = ()=>{
  setextended(prev=>!prev)
}
  return (
    <div className={`relative h-[100%] bg-[#1d1f21] transition-all ease-in-out duration-[.5s] inline-block ${extended? "w-64": "w-16"}` }>
      <div className="upper">
       <div className="ml-2">
       <Hamburger
          onToggle={()=>{isExtend()}}
          toggled={isOpen}
          color="#fff"
          toggle={setOpen}
          size={20}
          direction="right"
          rounded
        />
       </div>
        <div className={`mt-12 flex bg-[#282a2c] transition-all ease-in hover:bg-[#3e4144] m-2  rounded-full justify-start items-center gap-3 max-w-36`}>
          <img src=".\icons\add-fill.svg" alt="" />
        <h1 className={`font-semibold   text-white transition-all ease-in-out delay-[.1.5s] duration-[.2s] ${extended? "opacity-100": "opacity-0"} `}>New Chat</h1>
        </div>
      </div>

      <div className={`recents mt-11 transition-all ease-in-out duration-[.4s] m-5 ${extended? "opacity-100": "opacity-0"}`}>
        <h2 className="text-white mb-5">Recents</h2>
        <div className="text-white flex gap-3 text-sm">
          <img src=".\icons\recent.svg" alt="" />
          <p>What is react bbg?!</p>
        </div>
      </div>
      
      <div className="lower m-5 absolute bottom-5 flex flex-col gap-5">
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
