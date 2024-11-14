import { useContext, useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { Context } from "../../context/Context";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);
  const [extended, setExtended] = useState(false);
  const toggleExtended = () => {
    setExtended((prev) => !prev);
  };

  const { onSent, setRecentPrompt, PrevPrompt, newChat } = useContext(Context);
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <div
      className={`fixed lg:relative z-50 h-screen bg-[#1d1f21] transition-all ease-in-out duration-[.7s] ${
        extended ? "w-[85%] sm:w-72 lg:w-64" : "w-16"
      }`}
    >
      <div className="upper">
        <div className="ml-2 mt-3">
          <Hamburger
            onToggle={toggleExtended}
            toggled={isOpen}
            color="#fff"
            toggle={setOpen}
            size={20}
            direction="right"
            rounded
          />
        </div>
        <div
          onClick={() => newChat()}
          className={`mt-8 sm:mt-12 flex bg-[#282a2c] transition-all ease-in hover:bg-[#3e4144] mx-2 cursor-pointer rounded-full items-center p-2 gap-3 max-w-36`}
        >
          <img src="./icons/add-fill.svg" alt="New chat" />
          <h1
            className={`font-semibold min-w-24   text-white transition-all ease-in-out delay-[.2s] duration-[.2s] ${
              extended ? "opacity-100" : "opacity-0"
            } `}
          >
            New Chat
          </h1>
        </div>
      </div>

      <div
        className={`recents mt-8 sm:mt-11 mx-3 sm:mx-5 h-[40vh] sm:h-[44vh] overflow-y-auto transition-all ease-linear duration-[.4s] ${
          extended ? "opacity-100" : "opacity-0 w-0"
        }`}
      >
        <h2 className="text-white text-sm sm:text-base mb-4">Recents</h2>

        {PrevPrompt.map((items, index) => {
          return (
            <div
              key={index}
              onClick={() => loadPrompt(items)}
              className={`recent-content text-[#cbc7c7] rounded-full py-1.5 sm:py-2 px-2 sm:px-3 flex min-w-32 sm:min-w-36 mb-2 transition-all duration-[.1s] cursor-pointer gap-2 text-xs sm:text-sm ${
                extended
                  ? "delay-300 transition-opacity blur-none opacity-100"
                  : "blur-sm delay-100 transition-all opacity-0"
              }`}
            >
              <img src="./icons/recent.svg" alt="" className="w-4 sm:w-5" />
              <p className="truncate max-w-[180px] sm:max-w-[200px]">
                {items.slice(0, 18)}...
              </p>
            </div>
          );
        })}
      </div>

      <div className="lower mx-3 sm:mx-5 absolute bottom-5 flex flex-col gap-4 sm:gap-5">
        <a href="https://www.instagram.com/maihoonshobu/" className="w-fit">
          <div className="text-white flex gap-2 sm:gap-3 items-center">
            <img src="./icons/heart.svg" alt="" className="w-4 sm:w-5" />
            <h2
              className={`text-sm sm:text-base transition-all ease-in-out delay-[.2s] duration-[.2s] hover:text-[#b6f391] ${
                extended ? "opacity-100" : "opacity-0"
              }`}
            >
              Follow
            </h2>
          </div>
        </a>
        
        <a href="" className="w-fit">
          <div className="text-white flex gap-2 sm:gap-3 items-center">
            <img src="./icons/help.svg" alt="" className="w-4 sm:w-5" />
            <h2
              className={`text-sm sm:text-base transition-all ease-in-out delay-[.2s] duration-[.2s] hover:text-[#b6f391] ${
                extended ? "opacity-100" : "opacity-0"
              }`}
            >
              Help
            </h2>
          </div>
        </a>

        <a href="https://github.com/S-o-b-u/AstraGen1/pulls" className="w-fit">
          <div className="text-white flex gap-2 sm:gap-3 items-center">
            <img src="./icons/contri.svg" alt="" className="w-4 sm:w-5" />
            <h2
              className={`text-sm sm:text-base transition-all ease-in-out delay-[.2s] duration-[.2s] hover:text-[#b6f391] ${
                extended ? "opacity-100" : "opacity-0"
              }`}
            >
              Contribute
            </h2>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
