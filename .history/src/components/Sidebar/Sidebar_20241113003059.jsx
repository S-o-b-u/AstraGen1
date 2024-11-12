import { useContext, useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { Context } from "../../context/Context";
import "./Sidebar.css"

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);
  const [extended, setExtended] = useState(false);
  const toggleExtended = () => {
    setExtended((prev) => !prev);
  };

  const { onSent, RecentPrompt, PrevPrompt } = useContext(Context);
  return (
    <div
      className={`absolute z-50 h-[100%] bg-[#1d1f21] transition-all ease-in-out duration-[.7s] inline-block ${
        extended ? "w-64" : "w-16"
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
          className={`mt-12 flex bg-[#282a2c] transition-all ease-in hover:bg-[#3e4144] m-2  rounded-full items-center p-2 gap-3 max-w-36`}
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
        className={`recents mt-11 m-5 bg-red-200 h-[44vh]  transition-all ease-linear duration-[.4s]  ${
          extended ? "opacity-100" : "opacity-0 w-0"
        }`}
      >
        <h2 className="text-white mb-4">Recents</h2>

        {PrevPrompt.map((items, index) => {
          return (
            <div className=" h-[199%] overflow-auto ">
              <div
              className={`text-white flex min-w-36 mb-1 transition-all duration-[.1s] cursor-pointer gap-3 text-sm ${
                extended
                  ? " delay-300 transition-opacity blur-none opacity-100"
                  : "blur-sm delay-100 transition-all opacity-0"
              }`}
            >
              <img src=".\icons\recent.svg" alt="" />
              <p>{items.slice(0, 18)} ...</p>
            </div>
            </div>
          );
        })}
      </div>

      <div className="lower m-5 absolute bottom-5 flex flex-col gap-5">
        <div className="text-white flex gap-3 ">
          <img src=".\icons\heart.svg" alt="" />
          <h2
            className={`transition-all ease-in-out delay-[.1s] duration-[.1s]  ${
              extended ? "opacity-100" : "opacity-0"
            }`}
          >
            Follow
          </h2>
        </div>
        <div className="text-white flex gap-3 ">
          <img src=".\icons\help.svg" alt="" />
          <h2
            className={`transition-all ease-in-out delay-[.1s] duration-[.1s]  ${
              extended ? "opacity-100" : "opacity-0"
            }`}
          >
            Help
          </h2>
        </div>
        <div className="text-white flex gap-3 ">
          <img src=".\icons\contri.svg" alt="" />
          <h2
            className={`transition-all ease-in-out delay-[.1s] duration-[.1s]  ${
              extended ? "opacity-100" : "opacity-0"
            }`}
          >
            Contribute
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
