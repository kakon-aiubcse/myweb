import React from "react";
import Link from "next/link";
import Header from "./header";
import { useRouter } from "next/router";

const Skills = () => {
  const router = useRouter();
  const isRootPage = router.pathname === "/";

  return (
    <>
      {!isRootPage && (
        <div className="xs:flex">
          <Header />
        </div>
      )}
      <div
        className="flex flex-col max-w-[1440px] pt-[50px] bg-slate-50 relative 
      xs:w-screen xs:h-[2800px] xs:flex xs:bg-slate-300 xs:top-[0px] xs:items-center xs:overflow-hidden"
      >
        <div className="flex relative w-[200px] xs:relative xs:right-[550px]">
          <Link
            href="/skills"
            className="hover:border-b hover:border-slate-200"
          >
            <h1 className="text-3xl flex relative font-os top-[40px] left-[600px] font-bold text-center">
              <span className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
                Skills{" "}
              </span>
              <img
                src="/curve.svg"
                className="w-[180px] h-[100px] flex relative rotate-[-55deg] top-[1px] right-[80px]"
                alt="curve decoration"
              />
            </h1>
          </Link>
        </div>

        <div
          className="flex flex-col h-screen relative left-[125px] space-y-8 mt-[20px]  hover:transition-all hover:duration-1000 
        xs:relative xs:left-[-290px] xs:h-[2000px]"
        >
          <div
            className="flex w-[1130px] h-[100px] justify-normal relative bg-slate-100 text-gray-700 
          rounded-[10px] hover:border-2 hover:border-sky-700 hover:shadow-lg hover:pb-2 hover:transition-all hover:duration-1000
          xs:flex xs:flex-col xs:w-[300px] xs:relative xs:items-center xs:h-[350px] xs:left-[290px] xs:bg-slate-950 xs:text-sky-300"
          >
            <h1
              className="flex relative left-[40px] transition-all duration-1000 hover:text-sky-700 
            xs:flex xs:flex-col xs:items-start xs:left-0 xs:relative xs:hover:text-sky-500"
            >
              <span
                className=" h-[50px] w-[200px] text-[20px] leading-[20px] font-bold font-os flex relative left-[200px] top-[20px] hover:font-extrabold
              xs:relative xs:left-[30px] xs:flex xs:h-[50px] xs:w-[200px] xs:text-[25px] xs:font-mono"
              >
                Languages
              </span>
              <span
                className="xs:hidden text-[15px] font-roboto leading-[15px] h-[100px] w-[250px] font-[400] flex relative top-[60px] left-[-45px] hover:font-[500]
              "
              >
                JavaScript, Python, C++, PHP, Java
              </span>
              <span
                className="hidden text-[15px] font-roboto leading-[15px] h-[100px] w-[250px] font-[400]  relative top-[60px] left-[-45px] hover:font-[500]
              xs:text-slate-200 xs:text-[20px] xs:flex xs:flex-col xs:leading-[50px] xs:relative xs:w-[80px] xs:h-[400px] xs:right-10 xs:top-4 xs:ml-4 xs:text-center
              "
              >
                JavaScript Python C++ PHP Java
              </span>
            </h1>
            <ul
              className="flex relative left-[250px]  space-x-2  hover:transition-all hover:duration-1000
            xs:relative xs:flex xs:flex-col xs:top-[-380px] xs:left-[60px] xs:items-center xs:justify-center gap-1"
            >
              <li>
                <img
                  src="/javascript.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700
                  xs:w-[45px] xs:h-[35px] xs:hover:w-[45px] xs:hover:h-[35px] xs:hover:mt-0 xs:hover:border-none"
                />
              </li>
              <li>
                <img
                  src="/python.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700
                   xs:w-[45px] xs:h-[35px] xs:hover:w-[45px] xs:hover:h-[35px] xs:hover:mt-0 xs:hover:border-none"
                />
              </li>
              <li>
                <img
                  src="/c.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700
                   xs:w-[45px] xs:h-[35px] xs:hover:w-[45px] xs:hover:h-[35px] xs:hover:mt-0 xs:hover:border-none"
                />
              </li>
              <li>
                <img
                  src="/php.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700
                   xs:w-[45px] xs:h-[35px] xs:hover:w-[45px] xs:hover:h-[35px] xs:hover:mt-0 xs:hover:border-none"
                />
              </li>
              <li>
                <img
                  src="/java.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700
                   xs:w-[45px] xs:h-[35px] xs:hover:w-[45px] xs:hover:h-[35px] xs:hover:mt-0 xs:hover:border-none"
                />
              </li>
            </ul>
          </div>
          <div
            className="flex w-[1130px] h-[100px] relative bg-slate-100  text-gray-700 rounded-[10px] hover:border-2
           hover:border-sky-700 hover:shadow-lg hover:pb-2  hover:transition-all hover:duration-1000
           xs:flex xs:flex-col xs:w-[300px] xs:relative xs:items-center xs:h-[350px] xs:left-[290px] xs:bg-slate-950 xs:text-sky-300"
          >
            <ul
              className="flex relative left-[115px]  space-x-2  hover:transition-all hover:duration-1000
            xs:relative xs:flex xs:flex-col xs:top-[90px] xs:left-[60px] xs:items-center xs:justify-center gap-1"
            >
              <li>
                <img
                  src="/express.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700
                   xs:w-[45px] xs:h-[35px] xs:hover:w-[45px] xs:hover:h-[35px] xs:hover:mt-0 xs:hover:border-none xs:bg-white"
                />
              </li>
              <li>
                <img
                  src="/django.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700
                   xs:w-[45px] xs:h-[35px] xs:hover:w-[45px] xs:hover:h-[35px] xs:hover:mt-0 xs:hover:border-none"
                />
              </li>
              <li>
                <img
                  src="/nextjs.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700
                   xs:w-[45px] xs:h-[35px] xs:hover:w-[45px] xs:hover:h-[35px] xs:hover:mt-0 xs:hover:border-none bg-white"
                />
              </li>
              <li>
                <img
                  src="/react.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700
                   xs:w-[45px] xs:h-[35px] xs:hover:w-[45px] xs:hover:h-[35px] xs:hover:mt-0 xs:hover:border-none xs:bg-white"
                />
              </li>
              <li>
                <img
                  src="/nestjs.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700
                   xs:w-[45px] xs:h-[35px] xs:hover:w-[45px] xs:hover:h-[35px] xs:hover:mt-0 xs:hover:border-none"
                />
              </li>
            </ul>
            <h1 className="flex relative left-[160px] hover:text-sky-700 xs:flex xs:flex-col xs:items-start xs:left-0 xs:relative xs:hover:text-sky-500">
              <span
                className="text-[20px] leading-[20px] font-bold font-os flex relative left-[200px] top-[20px] hover:font-extrabold
               xs:relative xs:left-[30px] xs:flex xs:h-[50px] xs:w-[200px] xs:text-[25px] xs:font-mono xs:top-[-200px]"
              >
                Frameworks
              </span>
              <span className="xs:hidden text-[15px] font-roboto leading-[15px] font-[400] flex relative top-[60px] left-[25px] hover:font-medium">
                Express.js, Django, Next.js, React.js, Nest.js
              </span>
              <span
                className="hidden text-[15px] font-roboto leading-[15px] h-[100px] w-[250px] font-[400]  relative top-[60px] left-[-45px] hover:font-[500]
             xs:text-slate-200 xs:text-[20px] xs:flex xs:flex-col xs:leading-[50px] xs:relative xs:w-[80px] xs:h-[400px] xs:right-10 xs:top-[-200px] xs:ml-4 xs:text-center
              "
              >
                Express.js Django Next.js React.js Nest.js
              </span>
            </h1>
          </div>
          <div
            className="flex w-[1130px] h-[100px] relative bg-slate-100  text-gray-700 rounded-[10px] hover:border-2
           hover:transition-all hover:duration-1000 hover:border-sky-700 hover:shadow-lg hover:pb-2
           xs:flex xs:flex-col xs:w-[300px] xs:relative xs:items-center xs:h-[350px] xs:left-[290px] xs:bg-slate-950 xs:text-sky-300"
          >
            <h1
              className="flex relative left-[40px] hover:text-sky-700 
            xs:flex xs:flex-col xs:items-start xs:left-0 xs:relative xs:hover:text-sky-500 xs:top-[225px]"
            >
              <span
                className="text-[20px] leading-[20px] font-bold font-os flex relative left-[200px] top-[20px] hover:font-extrabold
              xs:relative xs:left-[30px] xs:flex xs:h-[50px] xs:w-[200px] xs:text-[25px] xs:font-mono xs:top-[-200px]"
              >
                Technologies
              </span>
              <span className="xs:hidden text-[15px] font-roboto leading-[15px] font-[400] flex relative top-[60px] left-[60px] hover:font-medium">
                Prisma, Stripe, Nodejs
              </span>
              <span
                className="hidden text-[15px] font-roboto leading-[15px] h-[100px] w-[250px] font-[400]  relative top-[60px] left-[-45px] hover:font-[500]
           xs:text-slate-200   xs:text-[20px] xs:flex xs:flex-col xs:leading-[50px] xs:relative xs:w-[80px] xs:h-[400px] xs:right-10 xs:top-[-200px] xs:ml-4 xs:text-center
              "
              >
                Prisma Stripe Nodejs
              </span>
            </h1>
            <ul
              className="flex relative left-[435px]  space-x-2  hover:transition-all hover:duration-1000
            xs:relative xs:flex xs:flex-col xs:top-[-380px] xs:left-[60px] xs:items-center xs:justify-center gap-1"
            >
              <li>
                <img
                  src="/prisma-2.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700
                  xs:w-[45px] xs:h-[35px] xs:hover:w-[45px] xs:hover:h-[35px] xs:hover:mt-0 xs:hover:border-none"
                />
              </li>

              <li>
                <img
                  src="/stripe-4.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700
                  xs:w-[45px] xs:h-[35px] xs:hover:w-[45px] xs:hover:h-[35px] xs:hover:mt-0 xs:hover:border-none"
                />
              </li>

              <li>
                <img
                  src="/nodejs.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700
                   xs:w-[45px] xs:h-[35px] xs:hover:w-[45px] xs:hover:h-[35px] xs:hover:mt-0 xs:hover:border-none"
                />
              </li>
            </ul>
          </div>
          <div
            className="flex w-[1130px] h-[100px] relative bg-slate-100  text-gray-700 rounded-[10px] hover:border-2
           hover:transition-all hover:duration-1000 hover:border-sky-700 hover:shadow-lg hover:pb-2
            xs:flex xs:flex-col xs:w-[300px] xs:relative xs:items-center xs:h-[350px] xs:left-[290px] xs:bg-slate-950 xs:text-sky-300"
          >
            <ul
              className="flex relative left-[155px]  space-x-2  hover:transition-all hover:duration-1000
            xs:relative xs:flex xs:flex-col xs:top-[70px] xs:left-[60px] xs:items-center xs:justify-center gap-1"
            >
              <li>
                <img
                  src="/postgresql.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700
                   xs:w-[45px] xs:h-[35px] xs:hover:w-[45px] xs:hover:h-[35px] xs:hover:mt-0 xs:hover:border-none"
                />
              </li>
              <li>
                <img
                  src="/mysql-3.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700
                   xs:w-[45px] xs:h-[35px] xs:hover:w-[45px] xs:hover:h-[35px] xs:hover:mt-0 xs:hover:border-none"
                />
              </li>
              <li>
                <img
                  src="/mongodb.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700
                   xs:w-[45px] xs:h-[35px] xs:hover:w-[45px] xs:hover:h-[35px] xs:hover:mt-0 xs:hover:border-none"
                />
              </li>
              <li>
                <img
                  src="/firebase-1.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700
                   xs:w-[45px] xs:h-[35px] xs:hover:w-[45px] xs:hover:h-[35px] xs:hover:mt-0 xs:hover:border-none"
                />
              </li>
            </ul>
            <h1
              className="flex relative left-[370px] hover:text-sky-700  
            xs:flex xs:flex-col xs:items-start xs:left-0 xs:relative xs:hover:text-sky-500 xs:top-[30px]"
            >
              <span
                className="text-[20px] leading-[20px] font-bold font-os flex relative left-[80px] top-[20px] hover:font-extrabold
               xs:relative xs:left-[30px] xs:flex xs:h-[50px] xs:w-[200px] xs:text-[25px] xs:font-mono xs:top-[-200px]"
              >
                Databases
              </span>
              <span className=" xs:hidden text-[15px] font-roboto leading-[15px] font-[400] flex relative top-[60px] left-[-82px] hover:font-medium">
                PostgreSQL, MySQL, Mongodb, Firebase
              </span>
              <span
                className="hidden text-[15px] font-roboto leading-[15px] h-[100px] w-[250px] font-[400]  relative top-[60px] left-[-45px] hover:font-[500]
         xs:text-slate-200     xs:text-[20px] xs:flex xs:flex-col xs:leading-[50px] xs:relative xs:w-[80px] xs:h-[400px] xs:right-10 xs:top-[-200px] xs:ml-4 xs:text-center
              "
              >
                PostgreSQL MySQL Mongodb Firebase
              </span>
            </h1>
          </div>
          <div
            className="flex w-[1130px] h-[100px] relative bg-slate-100  text-gray-700 rounded-[10px] hover:border-2
           hover:transition-all hover:duration-1000 hover:border-sky-700 hover:shadow-lg hover:pb-2
            xs:flex xs:flex-col xs:w-[300px] xs:relative xs:items-center xs:h-[350px] xs:left-[290px] xs:bg-slate-950 xs:text-sky-300"
          >
            <h1
              className="flex relative left-[60px] hover:text-sky-700 
             xs:flex xs:flex-col xs:items-start xs:left-2 xs:relative xs:hover:text-sky-500 xs:top-[230px]"
            >
              <span
                className="text-[20px] leading-[20px] font-bold font-os flex relative left-[200px] top-[20px] hover:font-extrabold
              xs:relative xs:left-[50px] xs:flex xs:h-[50px] xs:w-[200px] xs:text-[25px] xs:font-mono xs:top-[-200px]"
              >
                Tools
              </span>
              <span className="xs:hidden text-[15px] font-roboto leading-[15px] font-[400] flex relative top-[60px] left-[85px] hover:font-medium">
                Visual Studio, Git, Postman
              </span>
              <span
                className="hidden text-[15px] font-roboto leading-[15px] h-[100px] w-[250px] font-[400]  relative top-[60px] left-[-45px] hover:font-[500]
          xs:text-slate-200    xs:text-[20px] xs:flex xs:flex-col xs:leading-[50px] xs:relative xs:w-[80px] xs:h-[400px] xs:right-10 xs:top-[-200px] xs:ml-4 xs:text-center
              "
              >
                VisualStudio Git Postman
              </span>
            </h1>
            <ul
              className="flex relative left-[470px]  space-x-2  hover:transition-all hover:duration-1000
            xs:relative xs:flex xs:flex-col xs:top-[-370px] xs:left-[70px] xs:items-center xs:justify-center gap-1"
            >
              <li>
                <img
                  src="/visual-studio-2013.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700
                  xs:w-[45px] xs:h-[35px] xs:hover:w-[45px] xs:hover:h-[35px] xs:hover:mt-0 xs:hover:border-none"
                />
              </li>
              <li>
                <img
                  src="/git-bash.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700
                  xs:w-[45px] xs:h-[35px] xs:hover:w-[45px] xs:hover:h-[35px] xs:hover:mt-0 xs:hover:border-none"
                />
              </li>

              <li>
                <img
                  src="/postman.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700
                  xs:w-[45px] xs:h-[35px] xs:hover:w-[45px] xs:hover:h-[35px] xs:hover:mt-0 xs:hover:border-none"
                />
              </li>
            </ul>
          </div>
        </div>
        <div
          className="flex w-[1130px] h-[100px] relative bg-slate-50 bottom-[10px] text-gray-700 rounded-[10px]
          xs:relative xs:right-[440px] xs:top-[-9px] xs:bg-slate-300 xs:w-[450px]
           "
        >
          <h2 className="text-3xl flex relative font-os top-[-55px] left-[550px] font-bold text-center">
            Additional Skills
            <img
              src="/curve.svg"
              className="w-[180px] h-[100px] flex relative rotate-[-55deg] top-[1px] right-[120px]"
              alt="curve decoration"
            />
          </h2>
        </div>
        <div
          className="flex w-[820px] h-[400px] top-[-90px] left-[300px] transition-all duration-1000 relative bg-slate-100 
         hover:transition-all hover:duration-1000 text-gray-700 rounded-[10px] hover:border-4 hover:border-sky-700 hover:shadow-lg hover:pb-2
         xs:relative xs:top-[-70px] xs:left-[5px] xs:h-[550px] xs:w-[340px] xs:flex xs:flex-col 
        xs:hover:border-2 xs:hover:shadow-none xs:hover:pb-0"
        >
          <ul
            className="flex flex-col space-y-5 font-[500] text-[20px] relative top-[60px] left-[40px] font-manrope 
        xs:flex xs:flex-col xs:h-[500px] xs:w-[270px] xs:items-center "
          >
            <li
              className="hover:text-[22px] hover:shadow-md w-[420px] hover:text-sky-600 transition-all duration-1000 
             xs:hover:text-[17px] xs:hover:shadow-none xs:pl-[10px] xs:text-[17px] xs:w-[350px]"
            >
              Problem-solving, decision-making skills.
            </li>
            <li
              className="hover:text-[21px] hover:shadow-md w-[510px] hover:text-sky-600 transition-all duration-1000 
            xs:hover:text-[17px] xs:hover:shadow-none xs:pl-[10px] xs:text-[17px] xs:w-[350px]"
            >
              Basic computations and compiler design concepts.
            </li>
            <li
              className="hover:text-[21px] hover:shadow-md w-[730px] hover:text-sky-600 transition-all duration-1000 xs:relative 
            xs:hover:text-[17px] xs:hover:shadow-none xs:pl-[10px] xs:text-[17px] xs:right-[25px] xs:w-[300px]"
            >
              Gained knowledge on data analysis, software testing and data
              structures.
            </li>
            <li
              className="hover:text-[22px] hover:shadow-md w-[380px] hover:text-sky-600 transition-all duration-1000 
            xs:hover:text-[17px] xs:hover:shadow-none xs:pl-[10px] xs:text-[17px] xs:w-[350px]"
            >
              Graphic design, photo/video editing.
            </li>
            <li
              className="hover:text-[22px] hover:shadow-md w-[520px] hover:text-sky-600 transition-all duration-1000 
            xs:hover:text-[17px] xs:hover:shadow-none xs:relative xs:right-[25px] xs:pl-[10px] xs:text-[17px] xs:w-[300px]"
            >
              Fluent in English, Bengali; typing speed: 50+ WPM.
            </li>
            <li
              className="hover:text-[22px] hover:shadow-md w-[540px] hover:text-sky-600 transition-all duration-1000 
            xs:hover:text-[17px] xs:hover:shadow-none xs:pl-[10px] xs:text-[17px] xs:w-[350px]"
            >
              Leadership, teamwork, communication, adaptability
            </li>
            <li>
              <span
                className="bg-slate-950
                absolute top-[270px] left-[620px] font-manrope font-[500] text-sky-500 w-[140px] rounded-[15px] h-[45px] border border-sky-500 text-[28px] text-center 
            hover:border-2 hover:h-[50px] hover:border-slate-950 hover:bg-slate-50 hover:text-gray-950 hover:transition-all hover:duration-1000 shadow-xl
            xs:relative xs:left-[-10px] xs:top-1"
              >
                <a href="mailto:kakon.aiubcse@gmail.com">Hire Me?</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Skills;
