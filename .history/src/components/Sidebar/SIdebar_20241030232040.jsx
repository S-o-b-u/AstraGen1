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
        
        <img src=".\icons\add-fill.svg" alt="" />
      </div>
    </>
  );
};

export default Sidebar;
