import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-[url('/footer.png')] bg-cover bg-center w-[1440px] h-[400px] text-white xs:w-[430px] xs:overflow-y-hidden xs:h-[700px] xs:top-[-20px] ">
        <div
          className="flex flex-col absolute top-[60px] justify-center items-start left-[150px] w-[250px] space-y-4
        xs:flex xs:flex-col xs:item-center xs:relative xs:w-screen xs:h-[300px] xs:left-[120px] xs:top-[-10px] xs:text-center"
        >
          <Link href="/" passHref>
            <img
              src="/logo.png"
              className="h-[50px] w-[110px] rounded-[10px] shadow-sm hover:border-2 hover:h-[55px]
               hover:border-sky-500 hover:transition hover:duration-1000"
            />
          </Link>
          <span className="text-[24px] text-sky-200 hover:text-sky-500 hover:transition hover:duration-1000 hover:text-[25px] hover:shadow-sm">
            Kakon, Khairul Islam.
          </span>
          <span className="relative bottom-3 font-[18px] text-sky-200 hover:text-sky-500 hover:transition hover:duration-1000 hover:text-[19px] hover:shadow-sm">
            Software Engineer
          </span>
          <span
            className="bg-slate-950 font-manrope font-[500] text-sky-500 w-[140px] rounded-[15px] h-[45px] border border-sky-500 text-[28px] text-center 
            hover:border-2 hover:h-[50px] hover:border-slate-950 hover:bg-slate-50 hover:text-gray-950 hover:transition-all hover:duration-1000 shadow-xl"
          >
            <a href="mailto:kakon.aiubcse@gmail.com">Hire Me?</a>
          </span>
        </div>

        <ul
          className="flex flex-col font-manrope text-sky-200 absolute top-[65px] text-[21px] left-[550px] space-y-[15px] 
         text-start w-[200px] 
        xs:text-start  xs:flex xs:flex-col xs:item-center xs:relative xs:w-screen xs:h-[300px] xs:left-[40px] xs:top-[20px]"
        >
          <li>
            <Link href="#skills">
              <span className="hover:text-sky-500 hover:transition hover:duration-1000 hover:text-[22px] hover:shadow-sm">
                Skills
              </span>
            </Link>
          </li>{" "}
          <li>
            <Link href="#about">
              <span className="hover:text-sky-500 hover:transition hover:duration-1000 hover:text-[22px] hover:shadow-sm">
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="hover:text-sky-500 hover:transition hover:duration-1000 hover:text-[22px] hover:shadow-sm">
                Contact
              </span>
            </Link>
          </li>{" "}
          <li>
            <Link href="#experiences">
              <span className="hover:text-sky-500 hover:transition hover:duration-1000 hover:text-[22px] hover:shadow-sm">
                Experience
              </span>
            </Link>
          </li>
        </ul>
        <div
          className="flex flex-row absolute top-[125px] left-[800px] w-[200px] hover:transition-all hover:duration-1000 
        xs:flex xs:flex-col xs:item-center xs:relative xs:w-screen xs:h-[300px] xs:left-[110px] xs:top-[-310px]"
        >
          <ul
            className="flex flex-row space-x-5 hover:transition-all hover:duration-1000 xs:flex xs:flex-col xs:item-center xs:space-y-5
          xs:relative xs:left-[145px] "
          >
            <li className="hover:transition-all hover:duration-1000">
              <Link href="https://www.facebook.com/kakon20/">
                <img
                  src="/fbicon.svg"
                  className=" h-[42px] w-[42px] hover:h-[45px] hover:w-[45px] relative hover:bottom-[5px] 
                  hover:transition hover:duration-1000 hover:border-b-2 hover:pb-1 hover:border-sky-500 xs:relative xs:right-[-20px]"
                />
              </Link>
            </li>
            <li>
              <Link href="https://x.com/kakon_aiubcse">
                <img
                  src="/x.com.svg"
                  className="h-[42px] w-[42px] hover:h-[45px] hover:w-[45px] relative hover:bottom-[5px]
                   hover:transition hover:duration-1000 hover:border-b-2 hover:pb-1 hover:border-sky-500 "
                />
              </Link>
            </li>
            <li>
              <Link href="https://discord.gg/EukYWuV7">
                <img
                  src="/discord.svg"
                  className="h-[42px] w-[42px] hover:h-[45px] hover:w-[45px] relative hover:bottom-[5px]
                   hover:transition hover:duration-1000 hover:border-b-2 hover:pb-1 hover:border-sky-500 "
                />
              </Link>
            </li>
            <li>
              <Link href="https://www.reddit.com/user/kakonaiubcse/">
                <img
                  src="/reddit.svg"
                  className="h-[42px] w-[42px] hover:h-[45px] hover:w-[45px] relative hover:bottom-[5px] hover:transition hover:duration-1000 hover:border-b-2 hover:pb-1 hover:border-sky-500"
                />
              </Link>
            </li>
          </ul>
          <div
            className="absolute top-[200px] right-[50px] w-[400px] font-os text-sky-200 hover:font-[500] 
          hover:transition-all hover:duration-1000 hover:shadow-lg
          xs:relative xs:top-[70px] xs:left-[-70px]"
          >
            <span className="text-[18px]">&copy;</span>
            <span className="px-[7px]">Personal Website,</span>
            <span className="pr-[10px]">2024.</span>

            <span>
              All rights reserved{" "}
              <span className="text-rose-500 font-extrabold text-[20px]">
                .
              </span>
            </span>
          </div>
        </div>
        <div className="bg-slate-500 w-[1325px] absolute left-[50px] top-[320px] h-[1px] xs:w-[430px] xs:left-0 xs:top-[570px] xs:h-[1px] xs:bg-sky-300">
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Footer;
