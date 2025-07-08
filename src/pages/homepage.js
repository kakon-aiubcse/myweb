import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <>
      <div
        className="bg-slate-50 relative xs:items-center flex text-gray-950 h-[850px] overflow-hidden 
      xs:flex xs:flex-col xs:top-5 xs:h-[1000px]  xs:bg-gradient-to-b xs:from-slate-800 xs:to-[#004643]"
      >
        <div className="flex w-[800px]  relative top-[110px] xs:flex xs:flex-col xs:left-[120px]">
          <div className=" flex flex-col relative items-center space-y-[100px] xs:space-y-[55px] tb:right-[70px] xb:left-20">
            <h2
              className="font-lora text-[38px] leading-[22px] font-bold text-gray-950 flex relative 
            items-center top-[-60px] left-[145px] justify-center
            xs:text-[20px] xs:leading-[15px] xs:font-semibold xs:flex xs:relative xs:top-[170px] xs:left-[-20px] xs:text-slate-50
            tb:left-[140px] tb:relative"
            >
              <motion.span
                className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 bg-clip-text text-transparent"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
              >
                Hello There
              </motion.span>{" "}
              <span className="text-sky-400">!</span>
              <motion.img
                src="/curve.svg"
                className="w-[200px] h-[120px] flex relative rotate-[-55deg] top-[40px] right-[140px]"
                initial={{ x: 100, opacity: 0, rotate: -55 }}
                animate={{ x: 0, opacity: 1, rotate: -55 }}
                transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
              />
            </h2>

            <h1
              className="font-[700] flex font-os text-[22px] relative left-[70px] top-[-105px] 
            xs:relative xs:top-[190px] xs:left-[-190px] xs:text-[17px] xs:font-roboto xs:text-slate-300
            tb:left-[60px] tb:text-[15px]"
            >
              <motion.span
                className="ml-2 pr-2 text-teal-500 xs:relative xs:left-[220px] xs:text-teal-400 xs:font-[800] xs:top-[-70px] xs:text-[25px] "
                initial={{ x: -30, opacity: 0, scale: 0.9 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 2.6,
                  delay: 0.5,
                  ease: [0.25, 1, 0.5, 1], 
                }}
              >
                Greetings!
              </motion.span>
              This is{" "}
              <span
                className="mx-2 font-extrabold text-[35px] flex relative h-[40px] top-[-15px] text-slate-950 hover:text-sky-500
                tb:text-[20px] tb:mt-3
                 xs:text-white xs:italic xs:text-[35px] xs:font-[1800] xs:top-[-20px] xs:hover:text-sky-500 "
                
              
              >
                Khairul Islam
              </span>
              here.
            </h1>
            <span
              className="font-mono leading-[30px] text-slate-800 flex relative top-[-150px] left-[20px]
             xs:relative xs:top-[170px] xs:left-[-170px]"
            >
              <span className="text-[40px] font-roboto font-semibold flex relative top-[-8px] left-[45px] xs:top-[-5px] xs:left-[50px] xs:text-slate-300">
                T
              </span>
              <span
                className="flex relative text-[15px] transition duration-1000 w-[600px] left-[40px] text-justify hover:shadow-md 
              hover:text-[15.5px] hover:text-sky-600 hover:transition hover:duration-1000 
              xs:relative xs:right-24 xs:text-[13.5px] xs:w-[340px] xs:h-[130px] xs:p-1 xs:font-semibold
              xs:hover:text-[15.5px] xs:hover:transition-none xs:hover:shadow-none xs:leading-[20px] xs:text-slate-300
              tb:w-[400px]"
              >
                ech enthusiast with hands on experience from multiple
                internships, eager to contribute to the tech industry. Strong
                communication and teamwork skills.
              </span>
              <span
                className="absolute text-sky-900 font-lora text-[18px] font-medium w-[800px] h-[60px] top-[165px] 
              left-[60px] hover:text-sky-500 hover:transition hover:duration-1000 
              xs:top-[120px] xs:text-[17px] xs:w-[350px] xs:h-[100px] xs:left-[65px] xs:text-sky-200 xs:text-center xs:p-1"
              >
                Seeking opportunities to apply my expertise and<br className="hidden tb:flex"/> deliver 
                impactful solutions.
              </span>
            </span>
          </div>
        </div>
        <div className="bg-slate-50 relative flex top-[10px] w-[580px] xs:relative xs:top-[-490px] xs:w-[280px] xs:right-[15px] xs:bg-transparent
        ">
          <img
            src="/minet.jpg"
            className="w-[450px] h-[500px] flex relative left-[35px] rounded-[20px] top-[100px] transition duration-1000 border border-sky-600
            hover:w-[455px] hover:h-[505px] hover:border-4 hover:border-sky-600 hover:transition hover:duration-1000
            xxl:w-[650px] xxl:h-[600px]
            xs:w-[280px] xs:h-[300px] xs:items-center  xs:hover:w-[282px] xs:hover:h-[302px]
            tb:w-[280px]  tb:h-[300px] tb:hover:w-[280px]  tb:hover:h-[300px]  "
          />
          <ul
            className="flex items-center justify-center space-x-1 bg-white border border-black rounded-[5px] hover:transition hover:duration-1000
           absolute top-[525px] left-[305px] shadow-sm xs:absolute  xs:top-[349px] xs:left-[200px] xs:h-[28px] xs:w-[65px]
          tb:hidden tb:top-[340px] tb:left-[280px] tb:w-[75px]"
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
                href="https://wa.me/8801923089370"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/whatsapp.svg"
                  className="w-[34px] h-[34px] hover:w-[38px] hover:h-[38px] hover:transition hover:duration-1000 hover:border-b-2 hover:border-sky-700"
                  alt="whatsapp"
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

          <motion.span
            className="text-[40px] bg-indigo-950 pt-0 shadow-md text-[#44fc37] font-manrope text-center
           rounded-md font-[700] border border-cyan-300 pb-[50px] h-[0px]
           hover:border-b-2 hover:border-sky-700 flex relative top-28 right-[350px]
           xs:text-[27px] xs:w-[35px] xs:font-[600] xs:h-[20px] xs:pb-[40px] xs:relative xs:right-[195px] xs:top-[109px]
           tb:hidden tb:right-[200px]"
            animate={{
              scale: [1, 1.08, 1],
              textShadow: [
                "0 0 8px rgba(68, 252, 55, 0.7)",
                "0 0 20px rgba(68, 252, 55, 1)",
                "0 0 8px rgba(68, 252, 55, 0.7)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            1+
          </motion.span>
          <span
            className="flex relative h-[20px] right-[350px] top-[140px] font-manrope text-[15px]] 
            decoration-none hover:transition hover:duration-1000 hover:font-[500] 
            xs:text-[12px] xs:relative xs:right-[195px] xs:top-[135px]
           tb:hidden tb:right-[240px] tb:top-[170px]"
          >
            Years
          </span>
          <span className="text-[11px] h-[20px] font-semibold font-manrope flex relative right-[430px] top-[168px] w-[100px]
           xs:relative xs:right-[255px] xs:top-[150px] xs:text-[8px]
           tb:hidden">
            <p className="xs:relative xs:top-0 pr-1 ">Of</p> Experience
          </span>
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
      </div>{" "}
      <div className="">
        {" "}
        <Link href="#projects">
          <div
            className="xs:hidden absolute overflow-hidden  top-[600px] right-[19px] transform -translate-x-1/2 cursor-pointer animate-bounce
            tb:left-[1100px] xb:left-[1600px] xb:top-[650px]"
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
