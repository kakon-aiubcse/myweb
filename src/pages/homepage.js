import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <>
      <div
        className="bg-slate-50 relative xs:items-center flex text-gray-950 h-[850px] overflow-hidden 
      xs:flex xs:flex-col xs:top-5 xs:h-[900px]"
      >
        <div className="flex w-[800px] relative top-[130px] xs:flex xs:flex-col xs:left-[120px]">
          <div className=" flex flex-col relative items-center space-y-[100px] xs:space-y-[55px]">
            <h2
              className="font-lora text-[38px] leading-[22px] font-bold text-gray-950 flex relative 
            items-center top-[-60px] left-[145px] justify-center
            xs:text-[20px] xs:leading-[15px] xs:font-semibold xs:flex xs:relative xs:top-[170px] xs:left-[-10px]"
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
            xs:relative xs:top-[170px] xs:left-[-170px] xs:text-[16px]"
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
            <span
              className="font-mono leading-[30px] text-slate-800 flex relative top-[-150px] left-[20px]
             xs:relative xs:top-[140px] xs:left-[-170px]"
            >
              <span className="text-[40px] font-roboto font-semibold flex relative top-[-5px] left-[45px]">
                T
              </span>
              <span
                className="flex relative text-[15px] transition duration-1000 w-[600px] left-[40px] text-justify hover:shadow-md 
              hover:text-[15.5px] hover:text-sky-600 hover:transition hover:duration-1000 
              xs:relative xs:right-24 xs:text-[12px] xs:w-[260px] xs:h-[130px]
              xs:hover:text-[12px] xs:hover:w-[260px] xs:hover:h-[130px]"
              >
                ech enthusiast with hands on experience from multiple
                internships, eager to contribute to the tech industry. Strong
                communication and teamwork skills.
              </span>
              <span
                className="absolute text-sky-900 font-lora text-[18px] font-medium w-[800px] h-[60px] top-[165px] 
              left-[60px] hover:text-sky-500 hover:transition hover:duration-1000 xs:top-[160px] xs:text-[14px] xs:w-[280px] xs:left-14"
              >
                Seeking opportunities to apply my expertise and deliver
                impactful solutions.
              </span>
            </span>
          </div>
        </div>
        <div className="bg-slate-50 relative flex top-[20px] w-[580px] xs:relative  xs:top-[-480px] xs:w-[280px] xs:right-[30px]">
          <img
            src="/minet.jpg"
            className="w-[450px] h-[500px] flex relative left-[35px] rounded-[20px] top-[100px] transition duration-1000 border border-sky-600
            hover:w-[455px] hover:h-[505px] hover:border-4 hover:border-sky-600 hover:transition hover:duration-1000
            xxl:w-[650px] xxl:h-[600px]
            xs:w-[280px] xs:h-[300px] xs:items-center  xs:hover:w-[282px] xs:hover:h-[302px]"
          />

          <ul
            className="flex items-center justify-center space-x-1 bg-white border border-black rounded-[5px] hover:transition hover:duration-1000
           absolute top-[525px] left-[335px] shadow-sm xs:absolute  xs:top-[349px] xs:left-[240px] xs:h-[28px] xs:w-[65px]"
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

          <div className="flex relative top-[110px] right-[390px] h-[100px] xs:flex xs:absolute xs:top-[105px] xs:left-10">
            <span
              className="text-[40px] bg-indigo-950 pt-0 shadow-md text-[#44fc37] font-manrope absolute text-center rounded-md transition duration-300
            font-[700] border border-cyan-300 pb-[50px] h-[0px] hover:border-b-2 hover:border-sky-700 xs:text-[27px] xs:w-[37px] xs:font-[600] xs:h-[23px] xs:pb-[45px]"
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
        hover:border hover:border-black hover:transition hover:duration-1000 xs:left-[40px] xs:top-[782px]"
        >
          <a
            href="/CV_Khairul_Islam_Kakon.pdf"
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
      </div>
    </>
  );
};
export default Homepage;
