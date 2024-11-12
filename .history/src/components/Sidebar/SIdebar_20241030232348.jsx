import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="upper bg-red-300 inline-block">
        <Hamburger
          toggled={isOpen}
          color="#fff"
          toggle={setOpen}
          size={20}
          direction="right"
          rounded
        />
        <div className="flex bg-green-200 p-2 justify-center items-center gap-2 pr-6">
        <img src=".\icons\add-fill.svg" alt="" />
<h1>New Chat</h1>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
