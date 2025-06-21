import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <>
      <div
        className="bg-slate-50 relative xs:items-center flex text-gray-950 h-[850px] overflow-hidden 
      xs:flex xs:flex-col xs:top-5 xs:min-h-screen"
      >
        <div className="flex w-[800px] relative top-[130px] xs:flex xs:flex-col xs:left-[120px]">
          <div className=" flex flex-col relative items-center space-y-[100px] xs:space-y-[55px]">
            <h2
              className="font-lora text-[38px] leading-[22px] font-bold text-gray-950 flex relative 
            items-center top-[-60px] left-[145px] justify-center
            xs:text-[20px] xs:leading-[15px] xs:font-semibold xs:flex xs:relative xs:top-[180px] xs:left-[-10px]"
            >
              <span className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
                Hello There
              </span>{" "}
              <span className="text-sky-400">!</span>
              <img
                src="/curve.svg"
                className="w-[200px] h-[120px] flex relative rotate-[-55deg] top-[40px] right-[140px]"
              />
            </h2>
            <h1
              className="font-[700] flex font-os text-[22px] relative left-[70px] top-[-105px] 
            xs:relative xs:top-[180px] xs:left-[-170px] xs:text-[16px]"
            >
              <span className="ml-2 pr-2 text-teal-500 xs:relative xs:left-[200px] xs:top-[-40px]">
                {" "}
                Greetings!{" "}
              </span>
              This is{" "}
              <span
                className="mx-2 font-extrabold text-[35px] flex relative h-[40px] top-[-15px] text-gray-950 transition duration-1000
              hover:leading-[38px] hover:h-[40px] hover:text-sky-500 hover:transition hover:duration-1000 xs:text-[25px]"
              >
                {" "}
                Khairul Islam
              </span>{" "}
              here.
            </h1>
            <span className="font-mono leading-[30px] text-slate-800 flex relative top-[-150px] left-[20px] xs:relative xs:top-[150px] ">
              <span className="text-[40px] font-roboto font-semibold flex relative top-[-5px] left-[35px]">
                A
              </span>
              <span className="flex relative text-[15px] transition duration-1000 w-[600px] left-[40px] text-justify hover:shadow-md hover:text-[15.5px] hover:text-sky-600 hover:transition hover:duration-1000">
                s a recent graduate with a profound interest in cutting-edge
                technologies, I am eager to contribute to the dynamic landscape
                of the tech industry. Committed to staying at the forefront of
                advancements, I bring strong communication and teamwork skills
                sharpened through group projects and extracurricular activities.
              </span>
              <span className="absolute text-slate-900 font-lora text-[18px] font-medium w-[800px] h-[60px] top-[165px] left-[60px] hover:text-sky-500 hover:transition hover:duration-1000">
                Seeking opportunities to apply my skills and generate impactful
                solutions.
              </span>
            </span>
          </div>
        </div>
        <div className="relative flex top-[20px] w-[580px] xs:relative xs:flex xs:top-[-499px] xs:w-[280px] xs:right-[30px]">
          <img
            src="/mine.jpg"
            className="w-[450px] h-[500px] flex relative left-[35px] rounded-[20px] top-[100px] transition duration-1000
            hover:w-[455px] hover:h-[505px] hover:border-4 hover:border-sky-600 hover:transition hover:duration-1000
            xxl:w-[650px] xxl:h-[600px]
            xs:w-[280px] xs:h-[300px] xs:items-center  xs:hover:w-[282px] xs:hover:h-[302px]"
          />

          <ul
            className="flex items-center justify-center space-x-1 bg-white border border-black rounded-[5px] hover:transition hover:duration-1000
           absolute top-[525px] left-[305px] shadow-sm xs:absolute  xs:top-[349px] xs:left-[240px] xs:h-[28px] xs:w-[65px]"
          >
            <li>
              <a
                href="https://rb.gy/6t2at1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/linkedin.svg"
                  className="w-[34px] h-[34px] hover:w-[38px] hover:h-[38px] hover:transition hover:duration-1000 hover:border-b-2 hover:border-sky-700"
                  alt="LinkedIn"
                />
              </a>
            </li>

            <li>
              <a
                href="https://discord.gg/EukYWuV7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/discord.svg"
                  className="w-[34px] h-[34px] hover:w-[38px] hover:h-[38px] hover:transition hover:duration-1000 hover:border-b-2 hover:border-sky-700"
                  alt="Discord"
                />
              </a>
            </li>

            <li>
              <a
                href="https://t.ly/lNvAN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/github.svg"
                  className="w-[34px] h-[34px] hover:w-[38px] hover:h-[38px] hover:transition hover:duration-1000 hover:border-b-2 hover:border-sky-700"
                  alt="WhatsApp"
                />
              </a>
            </li>
          </ul>

          <div className="flex relative top-[110px] right-[340px] h-[100px] xs:flex xs:absolute xs:top-[102px] xs:left-10">
            <span
              className="text-[40px] bg-indigo-950 pt-0 shadow-md text-[#44fc37] font-manrope absolute text-center rounded-md transition duration-300
            font-[700] border border-cyan-300 pb-[50px] h-[0px] hover:border-b-2 hover:border-sky-700 xs:text-[27px] xs:w-[40px] xs:font-[600] xs:h-[25px] xs:pb-[45px]"
            >
              1+
            </span>
            <span
              className="flex relative h-[20px] left-[50px] top-[30px] font-manrope text-[15px]] 
            decoration-none hover:transition hover:duration-1000 hover:font-[500] xs:relative xs:top-8 xs:left-10 xs:text-[12px]"
            >
              Years
            </span>
            <span className="text-[11px] h-[20px] font-semibold font-manrope flex relative right-[40px] top-[58px] w-[100px] xs:relative xs:top-12 xs:right-7 xs:text-[9px]">
              <p className="xs:relative xs:top-0 pr-1 ">of</p> Experience
            </span>
          </div>
        </div>{" "}
        <div
          class="flex justify-center absolute bg-slate-50 items-center top-[610px] rounded-[10px] left-[250px] border border-slate-50  
        hover:border hover:border-black hover:transition hover:duration-1000"
        >
          <a
            href="/CV_Kakon, Khairul Islam.pdf"
            download
            class="flex items-center bg-gradient-to-r from-teal-500 to-sky-500 te
             px-6 py-3 rounded-lg shadow-xl hover:font-extrabold
            hover:bg-gradient-to-r hover:from-sky-500 hover:to-teal-600   hover:shadow-2xl hover:border-b-4 hover:border-sky-700"
          >
            <span class="text-lg font-semibold font-lora  text-slate-200 hover:transition hover:duration-1000  hover:shadow-2xl  ">
              Download CV
            </span>
            <img src="/download.svg" alt="Download Icon" class="w-6 h-6 ml-2" />
          </a>
        </div>
        <Link href="#projects">
          <div
            className="fixed bottom-4 left-[1300px] transform -translate-x-1/2 cursor-pointer animate-bounce"
            aria-label="Scroll down"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-sky-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 0a1 1 0 011 1v12.586l4.293-4.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 011.414-1.414L9 13.586V1a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Homepage;
