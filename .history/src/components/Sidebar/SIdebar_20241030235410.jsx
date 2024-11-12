import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative h-[100%] bg-[#1d1f21] inline-block">
      <div className="upper pr-24">
        <Hamburger
          toggled={isOpen}
          color="#fff"
          toggl3e={setOpen}
          size={20}
          direction="right"
          rounded
        />
        <div className="mt-12 flex bg-[#282a2c] ease-in duration-200 hover:bg-[#3e4144] m-2 py-1 px-2 pr-5 rounded-full  justify-center items-center gap-2 ">
          <img src=".\icons\add-fill.svg" alt="" />
          <h1 className="font-semibold text-white">New Chat</h1>
        </div>
      </div>

      <div className="recents mt-11 m-5">
        <h2 className="text-white mb-5">Recents</h2>
        <div className="text-white flex gap-3 text-sm">
          <img src=".\icons\recent.svg" alt="" />
          <p>What is react bbg?!</p>
        </div>
      </div>
      
      <div className="lower">
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
