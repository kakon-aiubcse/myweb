import React from "react";
import Link from "next/link";

const Hobby = () => {
  return (
    <>
      {" "}
      <div
        className="flex relative  text-gray-700 min-h-screen bg-slate-50 max-w-[1440px] 
      xs:flex xs:flex-col xs:h-[2750px] xs:overflow-hidden xs:bg-amber-500 xs:top-[-40px] xs:items-center"
      >
        <h2 className="flex relative left-[100px] font-roboto text-[30px] xs:relative xs:left-[5px]">
          <span className=" whitespace-nowrap xs:font-lora xs:font-bold xs:text-slate-100">
            Hobbies & Interest
            <span className="text-[50px] font-bold font-manrope text-sky-500">
              .
            </span>
          </span>
        </h2>
        <ul
          className="bg-slate-50 w-[1100px] right-[115px] flex relative top-[90px] flex-col justify-between  items-center h-[780px] 
          xs:flex xs:flex-col xs:w-[380px] xs:h-screen xs:items-center  xs:bg-amber-500
        "
        >
          <li
            className="relative bg-slate-100 w-[1100px] h-[200px] justify-between top-[5px] flex flex-row rounded-[20px]
           hover:transition hover:duration-1000 hover:border-2 hover:border-sky-600 hover:shadow-md 
           xs:flex xs:flex-col xs:w-[340px] xs:h-[1200px] xs:py-10 xs:items-center xs:justify-center xs:space-y-10 xs:left-[115px] xs:top-[-30px]"
          >
            <div className="flex relative xs:relative xs:left-[15px]">
              {" "}
              <img
                src="/football.png"
                className="w-[200px] h-[150px] left-[20px] top-[5px] relative flex
              rounded-[20px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-600 hover:shadow-md"
              />{" "}
              <span
                className="text-[18px] leading-[22px] font-bold text-gray-950 
    font-lora  top-[165px] right-[115px] flex relative rounded-[20px]  hover:transition hover:duration-1000 hover:text-sky-500 xs:text-amber-600 "
              >
                Football
              </span>
              <span
                className="flex font-mono absolute bg-slate-50 text-lg text-gray-800 right-[217px] top-[20px] hover:border-l-4 hover:border-sky-600
              hover:transition hover:duration-1000 xs:absolute xs:top-[-53px] xs:left-[-10px] xs:text-amber-600 xs:bg-slate-100 xs:w-[70px] xs:font-semibold xs:text-xl"
              >
                Sports
              </span>
            </div>
            <div className="flex relative xs:relative xs:right-[25px]">
              {" "}
              <img
                src="/cricket.png"
                className="w-[200px] h-[150px] left-[60px] top-[5px] relative flex
              rounded-[20px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-600 hover:shadow-md"
              />{" "}
              <span
                className="text-[18px] leading-[22px] font-bold text-gray-950 font-lora  top-[165px] right-[45px] flex relative rounded-[20px]  
                hover:transition hover:duration-1000 hover:text-sky-500 xs:relative xs:right-[70px] xs:text-amber-600"
              >
                Cricket
              </span>
            </div>
            <div className="flex relative ">
              {" "}
              <img
                src="/badminton.png"
                className="w-[200px] h-[150px] left-[50px] top-[5px] relative flex
              rounded-[20px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-600 hover:shadow-md"
              />{" "}
              <span
                className="text-[18px] leading-[22px] font-bold text-gray-950 
      font-lora  top-[165px] right-[80px] flex relative rounded-[20px]  hover:transition hover:duration-1000
       hover:text-sky-500 xs:relative xs:right-[90px] xs:text-amber-600"
              >
                Badminton
              </span>
            </div>
            <div className="flex relative ">
              {" "}
              <img
                src="/carrom.png"
                className="w-[200px] h-[150px] left-[30px] top-[5px] relative flex
              rounded-[20px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-600 hover:shadow-md"
              />{" "}
              <span
                className="text-[18px] leading-[22px] font-bold text-gray-950 
    font-lora  top-[165px] right-[80px] flex relative rounded-[20px]  hover:transition hover:duration-1000
     hover:text-sky-500 xs:relative xs:right-[100px] xs:text-amber-600"
              >
                Carrom
              </span>
            </div>
            <div className="flex relative ">
              {" "}
              <img
                src="/chess.png"
                className="w-[200px] h-[150px] left-[20px] top-[5px] relative flex
              rounded-[20px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-600 hover:shadow-md"
              />{" "}
              <span
                className="text-[18px] leading-[22px] font-bold text-gray-950 
    font-lora  top-[165px] right-[80px] flex relative rounded-[20px]  
    hover:transition hover:duration-1000 hover:text-sky-500 xs:relative xs:right-[110px] xs:text-amber-600"
              >
                Chess
              </span>
            </div>
          </li>
          <li
            className="relative bg-slate-100 w-[1100px] h-[200px] flex bottom-[75px] rounded-[20px] hover:transition 
          hover:duration-1000 hover:border-2 hover:border-sky-600 hover:shadow-md
           xs:flex xs:flex-col xs:w-[350px] xs:min-h-[600px] xs:py-10 xs:items-center xs:justify-center xs:bottom-0
           xs:space-y-10 xs:left-[115px] xs:top-[30px]
          "
          >
            <div className="flex relative xs:relative xs:right-[190px] xs:top-[50px]">
              {" "}
              <img
                src="/globalaffair.png"
                className="w-[200px] h-[150px] left-[255px] top-[5px] relative flex
              rounded-[20px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-600 hover:shadow-md xs:relative xs:top-[-129px]"
              />{" "}
              <span
                className="text-[18px] leading-[22px] font-bold text-gray-950 
    font-lora  top-[165px] left-[85px] flex relative rounded-[20px]  hover:transition hover:duration-1000
     hover:text-sky-500 xs:relative xs:top-[30px] xs:text-amber-600"
              >
                Global Dynamic
              </span>
              <span
                className="flex absolute bg-slate-50 text-[14.8px] font-mono text-gray-800 right-[332px] top-[20px] hover:border-l-4 hover:border-sky-600
              hover:transition hover:duration-1000 whitespace-nowrap 
              xs:absolute xs:top-[-189px] xs:left-[229px]  xs:bg-slate-100 xs:px-2 xs:w-[235px] xs:font-semibold xs:text-xl xs:text-amber-600"
              >
                International Affair
              </span>
            </div>
            <div className="flex relative xs:relative xs:left-[-220px] ">
              {" "}
              <img
                src="/international-politics.svg"
                className="w-[200px] h-[150px] left-[310px] top-[5px] relative flex
              rounded-[20px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-600 hover:shadow-md xs:border xs:border-black  xs:relative xs:top-[-20px]"
              />{" "}
              <span
                className="text-[18px] leading-[22px] font-bold text-gray-950 
    font-lora  top-[165px] left-[125px] flex relative rounded-[20px]  hover:transition hover:duration-1000 hover:text-sky-500 
    xs:text-amber-600 xs:w-[250px] xs:left-[140px]"
              >
                International politics
              </span>
            </div>
          </li>
          <li
            className="flex relative bg-slate-100 w-[1100px] h-[200px] bottom-[150px] rounded-[20px] hover:transition 
          hover:duration-1000 hover:border-2 hover:border-sky-600 hover:shadow-md
          xs:flex xs:flex-col xs:w-[350px] xs:min-h-[800px] xs:py-10 xs:items-center xs:justify-center xs:bottom-0
           xs:space-y-10 xs:left-[115px] xs:top-[90px]
          "
          >
            <div className="flex relative xs:relative xs:right-[-10px] xs:top-[-50px]">
              {" "}
              <img
                src="/blockchain.png"
                className="w-[200px] h-[150px] left-[35px] top-[5px] relative flex
              rounded-[20px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-600 hover:shadow-md"
              />{" "}
              <span
                className="text-[18px] leading-[22px] font-bold text-gray-950 
    font-lora  top-[165px] right-[120px] flex relative rounded-[20px]  hover:transition hover:duration-1000 hover:text-sky-500 xs:text-amber-600"
              >
                Block chain
              </span>
              <span
                className="flex font-mono absolute bg-slate-50 text-[16px] text-gray-800 right-[298px] top-[20px] hover:border-l-4 hover:border-sky-600
              hover:transition hover:duration-1000 whitespace-nowrap
               xs:absolute xs:top-[-89px] xs:left-[29px]  xs:bg-slate-100 xs:px-2 xs:w-[200px] xs:font-semibold xs:text-xl xs:text-amber-600"
              >
                Trade Enthusiast
              </span>
            </div>

            <div className="flex relative  xs:relative xs:right-[145px] xs:top-[10px] ">
              {" "}
              <img
                src="/nft.png"
                className="w-[200px] h-[150px] left-[160px] top-[5px] relative flex
              rounded-[20px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-600 hover:shadow-md"
              />{" "}
              <span
                className="text-[18px] leading-[22px] font-bold text-gray-950 
    font-lora  top-[165px] left-[40px] flex relative rounded-[20px]  hover:transition hover:duration-1000
     hover:text-sky-500 xs:text-amber-600"
              >
                NFT
              </span>
            </div>

            <div className="flex relative left-[120px] xs:relative xs:left-[-120px] xs:top-[40px]">
              {" "}
              <img
                src="/digitalcurrency.png"
                className="w-[200px] h-[150px] left-[185px] top-[5px] relative flex
              rounded-[20px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-600 hover:shadow-md"
              />{" "}
              <span
                className="text-[18px] leading-[22px] font-bold text-gray-950 
    font-lora  top-[165px] left-[15px] flex relative rounded-[20px]  hover:transition hover:duration-1000 hover:text-sky-500 xs:text-amber-600"
              >
                Digital Currency
              </span>
            </div>
          </li>
        </ul>
        <Link href="/">
          <div
            className="xs:hidden relative top-[700px] right-[90px] transform translate-x-1/2 cursor-pointer animate-bounce"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-sky-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 20a1 1 0 01-1-1V6.414L4.707 10.707a1 1 0 01-1.414-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 6.414V19a1 1 0 01-1 1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Hobby;
