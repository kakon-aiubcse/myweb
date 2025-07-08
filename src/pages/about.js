import React from "react";
import Link from "next/link";
import Header from "./header";
import { useRouter } from "next/router";
import { FlagIcon } from "react-flag-kit";
import { useEffect, useState } from "react";
import Spinner from "./component/spinner";
import ScrollSlideIn from "./component/scrollslidein";

const About = () => {
  const router = useRouter();
  const isRootPage = router.pathname === "/";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate load, or use actual data fetch
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 👈 Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading && !isRootPage) {
    return <Spinner />;
  }
  return (
    <>
      {!isRootPage && (
        <div className="xs:flex xs:bg-slate-800 xs:border xs:border-slate-800">
          <Header />
        </div>
      )}
      <div
        className="flex flex-col max-w-[1440px]  bg-slate-50 relative h-[1900px]
        xs:h-[3300px] xs:flex xs:flex-col xs:relative xs:items-center xs:overflow-hidden 
        xs:bg-slate-950 xs:text-slate-100 "
      >
        <div className="xs:relative xs:right-[480px]">
          <Link href="/about" className="hover:border-b hover:border-slate-200">
            <h1 className="text-3xl flex relative font-os top-[85px] left-[570px] font-bold text-center">
              <span className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
                About Me{" "}
              </span>
              <img
                src="/curve.svg"
                className="w-[180px] h-[100px] flex relative rotate-[-55deg] top-[1px] right-[120px]"
                alt="curve decoration"
              />
            </h1>
          </Link>
        </div>
        <div className="flex relative top-[50px] xs:w-[450px] xs:relative xs:right-[90px]">
          <h2 className="flex relative left-[100px] top-[-20px] font-roboto text-[30px] ">
            <span className="transitionhover hover:h-[70px] xs:relative xs:left-[119px] ">
              Informations
              <span className="text-[50px] font-bold font-manrope text-sky-500">
                .
              </span>
            </span>
          </h2>
      <ul
            className="flex flex-col  items-start relative top-[70px] right-[60px] text-slate-800 space-y-6 font-os text-[22px] font-normal
          xs:relative xs:top-[560px] xs:text-[18px] xs:right-[40px] xs:text-slate-100 xs:font-semibold"
          >
            <li className="flex relative transitionhover hover:font-[600]">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope xs:font-roboto xs:text-slate-100">
                Name :
              </span>{" "}
              Khairul Islam <span className="pl-2 font-semibold">Kakon.</span>
            </li>
            <li className="flex relative transitionhover">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope xs:font-roboto xs:text-slate-100">
                Father's Name :
              </span>{" "}
              Md. Shahjahan Ali Farazi.
            </li>
            <li className="flex relative transitionhover">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope xs:font-roboto xs:text-slate-100">
                Mother's Name :
              </span>{" "}
              Mrs. Kolpona Begum.
            </li>{" "}
            <li className="flex relative transitionhover xs:font-roboto xs:text-slate-100">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope xs:text-slate-100">
                Date of Birth :
              </span>{" "}
              <span className="pl-2 font-semibold">19 Feb</span>, 2001.
            </li>
            <li className="flex relative transitionhover xs:font-roboto">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope xs:text-slate-100">
                Nationality :
              </span>{" "}
              Bangladeshi.
            </li>
            <li className="flex relative transitionhover xs:font-roboto">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope xs:text-slate-100">
                Religion :
              </span>{" "}
              Muslim.
            </li>
            <li className="flex relative transitionhover w-[500px] xs:font-roboto  ">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope  xs:text-slate-100">
                Hometown :
              </span>{" "}
              Sherpur, Mymensingh{" "}
              <FlagIcon
                className="xs:w-[13px] xs:h-[13px] ml-2"
                code="BD"
                size={16}
              />
            </li>
            <li className="flex relative transition hover xs:font-roboto">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope  xs:text-slate-100">
                Present Address :
              </span>{" "}
              Nikunjo-2, Dhaka{" "}
              <FlagIcon
                className="xs:w-[13px] xs:h-[13px] ml-2"
                code="BD"
                size={16}
              />
            </li>
          </ul>  
     <ScrollSlideIn direction="right">  <ul className="flex flex-col  relative text-gray-700 left-[120px] xs:relative xs:left-[-640px] top-[20px] xs:text-slate-100">
            <li className="flex flex-col relative top-[40px] left-[120px] ">
              <img
                src="/mine4.jpg"
                className="w-[300px] h-[340px] rounded-[20px] hover:transition hover:duration-1000 hover:border-4 hover:border-sky-600 hover:shadow-md"
              />
            </li>
            <li className="flex items-center relative top-[90px] left-[100px] space-x-2 transitionhover">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope xs:relative xs:w-[65px] xs:text-slate-100">
                Email :
              </span>
              <b className="text-[22px] xs:relative xs:right-3">
                kakon.aiubcse@gmail.com
              </b>
            </li>

            <li className="flex items-center relative top-[20px] left-[150px] space-x-2 transitionhover hover:w-[250px]">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope xs:text-slate-100">
                Number :
              </span>
              <b className="text-[22px]">01923089370</b>
            </li>
            <li className="flex items-center relative top-[65px] left-[150px] space-x-2 w-[230px] transitionhover">
              <span className="pr-2 text-[18px] text-gray-500 pt-1 font-manrope xs:text-slate-100">
                Blood Group:
              </span>
              <b className="text-[22px]">
                B{" "}
                <span className="text-red-500 font-extrabold text-[20px] pr-1">
                  -
                </span>
                (Neg)
              </b>
            </li>
          </ul></ScrollSlideIn>   
        </div>
        <div className="flex relative top-[180px] text-gray-700 xs:relative xs:top-[650px] xs:w-[450px] xs:text-slate-100">
          <h2 className="flex relative left-[100px] font-roboto text-[30px] ">
            <span className=" whitespace-nowrap xs:relative xs:right-[20px] xs:text-[25px]">
              Extracurricular Activities{" "}
              <span className="text-[50px] font-bold font-manrope text-sky-500">
                .
              </span>
            </span>
          </h2>
       
         <div className="flex flex-col relative  min-h-screen right-[150px] top-[80px] w-full space-y-2 xs:right-[270px] xs:flex xs:flex-col ">
         <ScrollSlideIn direction="right"><div className="flex flex-row relative bg-slate-50 h-[350px] top-[20px]  w-full space-x-2 xs:bg-slate-950 xs:relative xs:left-8 xs:w-[350px]  ">
              <div
                className="w-[500px] h-[350px] bg-slate-50  flex flex-col space-y-2 justify-center items-center  relative 
              xs:relative xs:top-[240px] xs:text-center xs:rounded-md xs:pt-[120px] xs:bg-slate-950"
              >
                <span className="font-manrope font-[600] text-[20px] transitionhover relative xs:w-[350px]">
                  AIUB Premium Leaugue Cricket Tournament
                </span>
                <span className="font-manrope font-[500] text-[17px] transitionhover xs:w-[350px]">
                  participated in Year: 2022, 2023, 2024
                </span>
                <span className="font-manrope font-[500] text-[17px] transitionhover xs:w-[350px]">
                  Role: Wicket Keeper Batsmans & Vice Captain(2024)
                </span>
                <img
                  src="/cricket1.JPG"
                  className="w-[300px] absolute h-[330px] flex  bottom-[10px]  rounded-[20px] hover:transition hover:duration-1000 
                  hover:border-4 hover:border-sky-600 hover:shadow-md left-[560px] xs:hidden"
                />
              </div>
              <img
                src="/cricket1.JPG"
                className="hidden  bottom-[10px]  rounded-[20px] hover:transition hover:duration-1000 
                  hover:border-4 hover:border-sky-600 hover:shadow-md xs:block xs:relative xs:right-[320px] xs:w-[350px] xs:h-[350px] xs:top-[20px] "
              />
            </div></ScrollSlideIn>     
         <ScrollSlideIn direction="left"><div className="flex flex-row relative bg-slate-50 h-[350px] top-[0px]  xs:top-[1000px]  xs:bg-slate-950 xs:flex xs:flex-col xs:relative xs:left-8 xs:w-[350px]">
              <div
                className="w-[500px] h-[350px] bg-slate-50  flex flex-col space-y-2 justify-center items-center  relative 
              xs:bg-gray-800 xs:relative xs:top-[320px] xs:left-[-490px]  xs:w-[350px] xs:text-center"
              >
                <img
                  src="/football1.jpg"
                  className="w-[300px] absolute h-[330px] flex  bottom-[10px]  rounded-[20px] hover:transition hover:duration-1000
                   hover:border-4 hover:border-sky-600 hover:shadow-md 
                     xs:flex xs:absolute xs:left-[510px] xs:w-[310px] xs:h-[350px] xs:top-[-300px]"
                />
                <span className="font-manrope font-[600] text-[20px] transitionhover relative left-[480px] xs:top-[-30px] xs:w-[350px]">
                  AIUB Football World Cup 2023
                </span>
                <span className="font-manrope font-[500] text-[17px] transitionhover relative left-[480px] xs:top-[-30px] xs:w-[350px] ">
                  participated in Year: 2023,
                </span>
                <span className="font-manrope font-[500] text-[17px] transitionhover relative left-[480px] xs:top-[-30px] xs:w-[350px]">
                  Role: Lead Center Forward
                </span>
              </div>
            </div></ScrollSlideIn>     
      <ScrollSlideIn direction="right">    <div className="flex flex-row relative bg-slate-50 h-[350px] top-[-10px] xs:flex xs:flex-col  xs:bg-slate-950 xs:relative xs:left-8 xs:w-[350px]">
          <div
                className="w-[500px] h-[350px] bg-slate-50  flex flex-col space-y-2 justify-center items-center  relative 
              xs:bg-slate-950 xs:relative xs:top-[300px]  xs:w-[350px] xs:text-center "
              >
                <span className="font-manrope font-[600] text-[20px] transitionhover relative xs:w-[350px]">
                  Assistance to the Needy during COVID-19
                </span>
                <span className="font-manrope font-[500] text-[17px] transitionhover xs:w-[350px]">
                  During April 2020-July 2020
                </span>
                <span className="font-manrope font-[500] text-[17px] transitionhover relative left-[30px] xs:left-0 xs:text-[15px] xs:w-[350px]">
                  Provided informal assistance to those in need during the
                  COVID-19 pandemic. Tasks included distributing essential
                  supplies, offering support to vulnerable individuals, and
                  contributing to community relief efforts.
                </span>
                <img
                  src="/covidvol.png"
                  className="w-[300px] absolute h-[330px] flex  bottom-[10px]  rounded-[20px] 
                  hover:transition hover:duration-1000 hover:border-4 hover:border-sky-600 hover:shadow-md left-[560px]
                  xs:flex xs:absolute xs:left-[18px] xs:w-[310px] xs:h-[350px] xs:top-[-350px]"
                />
              </div>
            </div></ScrollSlideIn>  
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
