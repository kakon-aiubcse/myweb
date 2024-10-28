import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const isRootPage = router.pathname === "/";
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
                className="h-[50px] w-[110px] rounded-[10px] shadow-sm hover:border-2 hover:h-[55px] hover:border-sky-500 hover:transition hover:duration-1000"
              />
            </Link>
          </div>

          <div className=" ">
            <ul className="grid grid-flow-col text-center  relative w-[600px]  space-x-8 ">
              <li className="hfont">
                <Link href={isRootPage ? "/" : "/"}>Home</Link>
              </li>
              <li className="hfont">
                <Link href={isRootPage ? "#experiences" : "/#experiences"}>
                  Experiences
                </Link>
              </li>
              <li className="hfont">
                <Link href={isRootPage ? "#projects" : "/#projects"}>
                  Projects
                </Link>
              </li>

              <li className="hfont">
                <Link href={isRootPage ? "#skills" : "/#skills"}>Skills</Link>
              </li>
              <li className="hfont">
                <Link href={isRootPage ? "#education" : "/#education"}>
                  Education
                </Link>
              </li>
              <li className="hfont">
                <Link href={isRootPage ? "#about" : "/#about"}>About</Link>
              </li>
            </ul>
          </div>
          <div className="text-end hover:transition hover:duration-1000">
            <div className="flex flex-col-2 relative right-6 space-x-2 hover:transition hover:duration-1000">
              {isRootPage ?
                <div className="hover:transition hover:duration-1000">
                  <Link href="/contact">
                    <button
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className="hover:transition hover:duration-1000"
                    >
                      {" "}
                      <img
                        src={isHovered ? "/hoversent.svg" : "/sent.svg"}
                        className="w-[48px] h-[32px] mr-2 mt-1 hover:h-[40px] hover:transition hover:duration-1000 "
                      />
                    </button>
                  </Link>
                </div>
              : null}

              {isRootPage ?
                <div
                  onMouseEnter={() => setIsMailHovered(true)}
                  onMouseLeave={() => setIsMailHovered(false)}
                  className="flex hover:transition hover:duration-1000"
                >
                  <button
                    onClick={() =>
                      (window.location.href = "mailto:kakon.aiubcse@gmail.com")
                    }
                    className="hover:transition hover:duration-1000"
                  >
                    <img
                      src={isMailHovered ? "/hovermailf.svg" : "/mailf.svg"}
                      className="w-[48px] h-[36px] top-[-2px] flex relative hover:h-[40px] hover:transition hover:duration-1000"
                      alt="Mail Icon"
                    />
                  </button>
                </div>
              : null}
            </div>
            {isRootPage ?
              <div className="absolute text-[35px] left-[1255px] bottom-[18px] text-sky-500">
                |
              </div>
            : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
