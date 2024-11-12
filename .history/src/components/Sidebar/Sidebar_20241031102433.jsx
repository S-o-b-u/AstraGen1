import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);
  const [extended, setextended] = useState(true);
  const isExtend = () => {
    setextended(prev => !prev);
  }

  return (
    <div className={`relative h-[100%] bg-[#1d1f21] inline-block transition-all duration-300 ease-in-out ${extended ? 'w-64' : 'w-16'}`}>
      <div className="upper">
        <div className="ml-2">
          <Hamburger
            onToggle={() => { isExtend() }}
            toggled={isOpen}
            color="#fff"
            toggle={setOpen}
            size={20}
            direction="right"
            rounded
          />
        </div>
        <div className={`mt-12 flex bg-[#282a2c] ease-in duration-200 hover:bg-[#3e4144] m-2 p-2 rounded-full items-center gap-3 ${extended ? 'max-w-36' : 'justify-center'}`}>
          <img src=".\icons\add-fill.svg" alt="" />
          <h1 className={`font-semibold text-white whitespace-nowrap transition-opacity duration-300 ${extended ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
            New Chat
          </h1>
        </div>
      </div>

      <div className={`recents mt-11 m-5 transition-all duration-300 ${extended ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5 absolute'}`}>
        <h2 className="text-white mb-5">Recents</h2>
        <div className="text-white flex gap-3 text-sm">
          <img src=".\icons\recent.svg" alt="" />
          <p>What is react bbg?!</p>
        </div>
      </div>
      
      <div className="lower m-5 absolute bottom-5 flex flex-col gap-5">
        {['heart', 'help', 'contri'].map((icon, index) => (
          <div key={icon} className="text-white flex gap-3 items-center">
            <img src={`./icons/${icon}.svg`} alt="" />
            <h2 className={`whitespace-nowrap transition-all duration-300 ${
              extended ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5 w-0 overflow-hidden'
            }`}>
              {icon === 'heart' ? 'Follow' : icon === 'help' ? 'Help' : 'Contribute'}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
