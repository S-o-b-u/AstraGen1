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
      className={`absolute z-50 h-[100VH] bg-[#1d1f21] transition-all ease-in-out duration-[.7s] inline-block ${
        extended ? "w-64" : "w-0 lg:w-16"
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
          className={`mt-12 flex bg-[#282a2c] transition-all ease-in hover:bg-[#3e4144] m-2 cursor-pointer  rounded-full items-center gap-3 max-w-36`}
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
        className={`recents mt-11 m-5  h-[44vh] overflow-auto transition-all ease-linear duration-[.4s]  ${
          extended ? "opacity-100" : "opacity-0 w-0"
        }`}
      >
        <h2 className="text-white mb-4">Recents</h2>

        {PrevPrompt.map((items, index) => {
          return (
            <div
              onClick={() => {
                loadPrompt(items);
              }}
              className={`recent-content text-[#cbc7c7] rounded-full py-2 px-3 recent-content flex min-w-36 mb-2 transition-all duration-[.1s] cursor-pointer gap-2 text-sm ${
                extended
                  ? " delay-300 transition-opacity blur-none opacity-100"
                  : "blur-sm delay-100 transition-all opacity-0"
              }`}
            >
              <img src=".\icons\recent.svg" alt="" />
              <p>{items.slice(0, 18)}...</p>
            </div>
          );
        })}
      </div>

      <div className="lower m-5 absolute bottom-5 flex flex-col gap-5">
        <a href="https://www.instagram.com/maihoonshobu/">
          <div className="text-white flex gap-3 ">
            <img src=".\icons\heart.svg" alt="" />

            <h2
              className={`transition-all ease-in-out delay-[.2s] duration-[.2s]   hover:text-[#b6f391] ${
                extended ? "opacity-100" : "opacity-0"
              }`}
            >
              Follow
            </h2>
          </div>
        </a>
        <a href="">
          <div className="text-white flex gap-3 ">
            <img src=".\icons\help.svg" alt="" />
            <h2
              className={`transition-all ease-in-out delay-[.2s] duration-[.2s]  hover:text-[#b6f391]  ${
                extended ? "opacity-100" : "opacity-0"
              }`}
            >
              Help
            </h2>
          </div>
        </a>
        <a href="https://github.com/S-o-b-u/AstraGen1/pulls">
          <div className="text-white flex gap-3 ">
            <img src=".\icons\contri.svg" alt="" />
            <h2
              className={`transition-all ease-in-out delay-[.2s] duration-[.2s]  hover:text-[#b6f391] ${
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
