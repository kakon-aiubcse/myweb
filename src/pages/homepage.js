import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="bg-slate-50 relative  flex text-gray-950 h-[850px] overflow-hidden ">
        <div className="flex w-[800px] relative top-[130px] ">
          <div className=" flex flex-col relative items-center space-y-[100px]">
            <h2 className="font-lora text-[38px] leading-[22px] font-bold text-gray-950 flex relative items-center top-[-60px] left-[145px] justify-center">
              Hello There<span className="text-sky-400">!</span>
              <img
                src="/curve.svg"
                className="w-[200px] h-[120px] flex relative rotate-[-55deg] top-[40px] right-[140px]"
              />
            </h2>
            <h1 className="font-[700] flex font-os text-[22px] relative left-[70px] top-[-105px] ">
              <span className="ml-2 pr-2 text-green-900"> Greetings! </span>This
              is{" "}
              <span className="mx-2 font-extrabold text-[35px] flex relative top-[-15px] text-gray-950">
                {" "}
                Khairul Islam
              </span>{" "}
              here.
            </h1>
            <span className="font-mono leading-[30px] flex relative top-[-150px] left-[20px] ">
              <span className="text-[40px] font-roboto font-semibold flex relative top-[-5px] left-[35px]">
                A
              </span>
              <span className="flex relative w-[600px] left-[40px] text-justify">
                s a recent graduate with a profound interest in cutting-edge
                technologies, I am eager to contribute to the dynamic landscape
                of the tech industry. Committed to staying at the forefront of
                advancements, I bring strong communication and teamwork skills
                sharpened through group projects and extracurricular activities.
              </span>
              <span className="absolute text-[14.8px] font-semibold w-[800px] h-[60px] top-[165px] left-[60px]">
                Seeking opportunities to apply my skills and generate impactful
                solutions.
              </span>
            </span>
          </div>
        </div>
        <div className="relative flex top-[20px] w-[580px]">
          <img
            src="/minee.png"
            className="w-[450px] h-[500px] flex relative left-[35px] rounded-[20px] top-[100px]"
          />

          <ul
            className="flex items-center justify-center space-x-1 bg-white border border-black rounded-[5px]
           absolute top-[555px] left-[365px] shadow-sm"
          >
            <li>
              <a
                href="https://rb.gy/6t2at1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/linkedin.svg"
                  className="w-[34px] h-[34px] hover:w-[38px] hover:h-[38px] transition duration-300 hover:border-b-2 hover:border-rose-950"
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
                  className="w-[34px] h-[34px] hover:w-[38px] hover:h-[38px] transition duration-300 hover:border-b-2 hover:border-rose-950"
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
                  className="w-[34px] h-[34px] hover:w-[38px] hover:h-[38px] transition duration-300 hover:border-b-2 hover:border-rose-950"
                  alt="WhatsApp"
                />
              </a>
            </li>
          </ul>

          <div className="flex relative top-[110px] right-[400px] ">
            <span
              className="text-[40px] bg-indigo-950 pt-0 shadow-md text-[#44fc37] font-manrope absolute text-center rounded-md transition duration-300
            font-[700] border border-cyan-300 pb-[50px] h-[0px] hover:border-2 hover:border-rose-600 "
            >
              1+
            </span>
            <span className="flex relative left-[50px] top-[30px] font-manrope text-[15px]] decoration-none">
              Years
            </span>
            <span className="text-[11px] font-semibold font-manrope flex relative right-[40px] top-[58px]">
              of Experience
            </span>
          </div>
        </div>{" "}
        <div
          class="flex justify-center absolute bg-slate-50 items-center top-[610px] rounded-[10px] left-[250px] border border-black  
        hover:border hover:border-slate-50 "
        >
          <a
            href="/CV_Kakon, Khairul Islam.pdf"
            download
            class="flex items-center bg-gradient-to-r from-teal-500 to-blue-600 te
             px-6 py-3 rounded-lg shadow-xl hover:font-extrabold
            hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-600 transition duration-500  hover:shadow-2xl hover:border-b-4 hover:border-rose-900"
          >
            <span class="text-lg font-semibold font-lora  text-slate-200  ">
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