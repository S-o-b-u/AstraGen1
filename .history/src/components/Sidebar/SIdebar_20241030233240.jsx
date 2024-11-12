import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="relative upper bg-[#1d1f21] inline-block h-[100%] pr-16">
        <Hamburger
          toggled={isOpen}
          color="#fff"
          toggle={setOpen}
          size={20}
          direction="right"
          rounded
        />
        <div className="mt-flex bg-[#282a2c] m-2 py-1 px-2 pr-5 rounded-full  justify-center items-center gap-2 ">
        <img src=".\icons\add-fill.svg" alt="" />
<h1 className="font-semibold text-white">New Chat</h1>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
