import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="flex flex-col max-w-[1440px]  bg-slate-50 relative h-[1900px]">
        <div>
          <Link href="/about" className="hover:border-b hover:border-slate-200">
            <h1 className="text-3xl flex relative font-os top-[85px] left-[570px] font-bold text-center">
              About Me
              <img
                src="/curve.svg"
                className="w-[180px] h-[100px] flex relative rotate-[-55deg] top-[1px] right-[120px]"
                alt="curve decoration"
              />
            </h1>
          </Link>
        </div>
        <div className="flex relative top-[50px]">
          <h2 className="flex relative left-[100px] top-[-20px] font-roboto text-[30px] ">
            <span className="transitionhover hover:h-[70px] ">
              Informations
              <span className="text-[50px] font-bold font-manrope text-sky-500">
                .
              </span>
            </span>
          </h2>
          <ul className="flex flex-col  items-start relative top-[70px] right-[60px] text-slate-800 space-y-6 font-os text-[22px] font-normal">
            <li className="flex relative transitionhover hover:font-[600]">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope">
                Name :
              </span>{" "}
              Khairul Islam <span className="pl-2 font-semibold">Kakon.</span>
            </li>
            <li className="flex relative transitionhover">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope">
                Father's Name :
              </span>{" "}
              Md. Shahjahan Ali Farazi.
            </li>
            <li className="flex relative transitionhover">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope">
                Mother's Name :
              </span>{" "}
              Mrs. Kolpona Begum.
            </li>{" "}
            <li className="flex relative transitionhover">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope">
                Date of Birth :
              </span>{" "}
              <span className="pl-2 font-semibold">19 Feb</span>, 2001.
            </li>
            <li className="flex relative transitionhover">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope">
                Nationality :
              </span>{" "}
              Bangladeshi.
            </li>
            <li className="flex relative transitionhover">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope">
                Religion :
              </span>{" "}
              Muslim.
            </li>
            <li className="flex relative transitionhover w-[500px]">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope">
                Hometown :
              </span>{" "}
              Sherpur, Mymensingh, Bangladesh.
            </li>
            <li className="flex relative transitionhover">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope">
                Present Address :
              </span>{" "}
              Nikunjo-2, Dhaka, Bangladesh.
            </li>
          </ul>
          <ul className="flex flex-col  relative text-gray-700 left-[120px]">
            <li className="flex flex-col relative top-[40px] left-[120px] ">
              <img
                src="/mine3.heic"
                className="w-[300px] h-[340px] rounded-[20px] hover:transition hover:duration-1000 hover:border-4 hover:border-sky-600 hover:shadow-md"
              />
            </li>
            <li className="flex items-center relative top-[90px] left-[100px] space-x-2 transitionhover">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope">
                Email :
              </span>
              <b className="text-[22px]">kakon.aiubcse@gmail.com</b>
            </li>

            <li className="flex items-center relative top-[20px] left-[150px] space-x-2 transitionhover hover:w-[250px]">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope">
                Number :
              </span>
              <b className="text-[22px]">01923089370</b>
            </li>
            <li className="flex items-center relative top-[65px] left-[150px] space-x-2 w-[230px] transitionhover">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope">
                Blood Group:
              </span>
              <b className="text-[22px]">
                B{" "}
                <span className="text-red-500 font-bold text-[20px] pr-1">
                  -
                </span>
                (Neg)
              </b>
            </li>
          </ul>
        </div>
        <div className="flex relative top-[180px] text-gray-700">
          <h2 className="flex relative left-[100px] font-roboto text-[30px] ">
            <span className=" whitespace-nowrap">
              Extracurricular Activities{" "}
              <span className="text-[50px] font-bold font-manrope text-sky-500">
                .
              </span>
            </span>
          </h2>
          <div className="flex flex-col relative  min-h-screen right-[150px] top-[80px] w-full space-y-2">
            <div className="flex flex-row relative bg-slate-50 h-[350px] top-[20px]  w-full space-x-2">
              <div className="w-[500px] h-[350px] bg-slate-50  flex flex-col space-y-2 justify-center items-center  relative ">
                <span className="font-manrope font-[600] text-[20px] transitionhover relative">
                  AIUB Premium Leaugue Cricket Tournament
                </span>
                <span className="font-manrope font-[500] text-[17px] transitionhover ">
                  participated in Year: 2022, 2023, 2024
                </span>
                <span className="font-manrope font-[500] text-[17px] transitionhover ">
                  Role: Wicket Keeper Batsmans & Vice Captain(2024)
                </span>
                <img
                  src="/cricket1.JPG"
                  className="w-[300px] absolute h-[330px] flex  bottom-[10px]  rounded-[20px] hover:transition hover:duration-1000 hover:border-4 hover:border-sky-600 hover:shadow-md left-[560px]"
                />
              </div>
            </div>
            <div className="flex flex-row relative bg-slate-50 h-[350px] top-[0px]  ">
              <div className="w-[500px] h-[350px] bg-slate-50  flex flex-col space-y-2 justify-center items-center  relative ">
                <img
                  src="/football1.jpg"
                  className="w-[300px] absolute h-[330px] flex  bottom-[10px]  rounded-[20px] hover:transition hover:duration-1000 hover:border-4 hover:border-sky-600 hover:shadow-md "
                />
                <span className="font-manrope font-[600] text-[20px] transitionhover relative left-[480px]">
                  AIUB Football World Cup 2023
                </span>
                <span className="font-manrope font-[500] text-[17px] transitionhover relative left-[480px] ">
                  participated in Year: 2023,
                </span>
                <span className="font-manrope font-[500] text-[17px] transitionhover relative left-[480px]">
                  Role: Lead Center Forward
                </span>
              </div>
            </div>
            <div className="flex flex-row relative bg-slate-50 h-[350px] top-[-10px]  ">
              <div className="w-[500px] h-[350px] bg-slate-50  flex flex-col space-y-2 justify-center items-center  relative ">
                <span className="font-manrope font-[600] text-[20px] transitionhover relative">
                  Assistance to the Needy during COVID-19
                </span>
                <span className="font-manrope font-[500] text-[17px] transitionhover ">
                  During April 2020-July 2020
                </span>
                <span className="font-manrope font-[500] text-[17px] transitionhover relative left-[30px] ">
                  Provided informal assistance to those in need during the
                  COVID-19 pandemic. Tasks included distributing essential
                  supplies, offering support to vulnerable individuals, and
                  contributing to community relief efforts.
                </span>
                <img
                  src="/covidvol.png"
                  className="w-[300px] absolute h-[330px] flex  bottom-[10px]  rounded-[20px] hover:transition hover:duration-1000 hover:border-4 hover:border-sky-600 hover:shadow-md left-[560px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
