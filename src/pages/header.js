import React from "react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMailHovered, setIsMailHovered] = useState(false);
  return (
    <>
      <div>
        <div
          className="bg-slate-50 flex flex-col-3 justify-between items-center relative h-[80px] overflow-hidden border-b border-slate-200
  "
        >
          <div className="flex relative left-10 cursor-pointer">
            <Link href="/" passHref>
              <img
                src="/logo.png"
                className="h-[50px] w-[110px] rounded-[10px] shadow-sm"
              />
            </Link>
          </div>

          <div className=" ">
            <ul className="grid grid-flow-col text-center  relative w-[600px]  ">
              <li className="hfont">
                <Link href="/">Home</Link>
              </li>
              <li className="hfont">
                <Link href="#experiences">Experiences</Link>
              </li>
              <li className="hfont">
                <Link href="#projects">Projects</Link>
              </li>

              <li className="hfont">Skills</li>
              <li className="hfont">About</li>
            </ul>
          </div>
          <div className="text-end">
            <div className="flex flex-col-2 relative right-5 space-x-2">
              <div>
                {" "}
                <Link href="/contact">
                  <button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="border-r-2 border-orange-500 "
                  >
                    {" "}
                    <img
                      src={isHovered ? "/hovered-chat.svg" : "/chat.svg"}
                      className="w-[48px] h-[32px] mr-2 mt-1 "
                    />
                  </button>
                </Link>
              </div>

              <div
                onMouseEnter={() => setIsMailHovered(true)}
                onMouseLeave={() => setIsMailHovered(false)}
                className="flex"
              >
                <button
                  onClick={() =>
                    (window.location.href = "mailto:kakon.aiubcse@gmail.com")
                  }
                  className=""
                >
                  <img
                    src={isMailHovered ? "/hovered-mail.svg" : "/mail.svg"}
                    className="w-[48px] h-[36px] top-[-2px] flex relative"
                    alt="Mail Icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
