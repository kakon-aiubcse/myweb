import React from "react";
import Link from "next/link";

const Skills = () => {
  return (
    <>
      <div className="flex flex-col max-w-[1440px] pt-[50px] bg-slate-50 relative">
        <div className="flex relative w-[200px]">
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

        <div className="flex flex-col h-screen relative left-[125px] space-y-8 mt-[20px]  hover:transition-all hover:duration-1000  ">
          <div
            className="flex w-[1130px] h-[100px] justify-normal relative bg-slate-100 text-gray-700 
          rounded-[10px] hover:border-2 hover:border-sky-700 hover:shadow-lg hover:pb-2 hover:transition-all hover:duration-1000"
          >
            <h1 className="flex relative left-[40px] transition-all duration-1000 hover:text-sky-700 ">
              <span className=" h-[50px] w-[200px] text-[20px] leading-[20px] font-bold font-os flex relative left-[200px] top-[20px] hover:font-extrabold">
                Languages
              </span>
              <span className="text-[15px] font-roboto leading-[15px] h-[100px] w-[250px] font-[400] flex relative top-[60px] left-[-45px] hover:font-[500]">
                C++, Java, JavaScript, typescript
              </span>
            </h1>
            <ul className="flex relative left-[250px]  space-x-2  hover:transition-all hover:duration-1000">
              <li>
                <img
                  src="/c.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700"
                />
              </li>
              <li>
                <img
                  src="/java.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700"
                />
              </li>
              <li>
                <img
                  src="/javascript.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700"
                />
              </li>
              <li>
                <img
                  src="/typescript.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700"
                />
              </li>
            </ul>
          </div>
          <div
            className="flex w-[1130px] h-[100px] relative bg-slate-100  text-gray-700 rounded-[10px] hover:border-2
           hover:border-sky-700 hover:shadow-lg hover:pb-2  hover:transition-all hover:duration-1000"
          >
            <ul className="flex relative left-[115px]  space-x-2  hover:transition-all hover:duration-1000">
              <li>
                <img
                  src="/nextjs.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700"
                />
              </li>
              <li>
                <img
                  src="/vue.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700"
                />
              </li>
              <li>
                <img
                  src="/nestjs.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700"
                />
              </li>
              <li>
                <img
                  src="/express.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700"
                />
              </li>
              <li>
                <img
                  src="/php.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700"
                />
              </li>
            </ul>
            <h1 className="flex relative left-[160px] hover:text-sky-700 ">
              <span className="text-[20px] leading-[20px] font-bold font-os flex relative left-[200px] top-[20px] hover:font-extrabold">
                Frameworks
              </span>
              <span className="text-[15px] font-roboto leading-[15px] font-[400] flex relative top-[60px] left-[25px] hover:font-medium">
                Next.js, Vue, Nest.js, Express, php
              </span>
            </h1>
          </div>
          <div
            className="flex w-[1130px] h-[100px] relative bg-slate-100  text-gray-700 rounded-[10px] hover:border-2
           hover:transition-all hover:duration-1000 hover:border-sky-700 hover:shadow-lg hover:pb-2"
          >
            <h1 className="flex relative left-[40px] hover:text-sky-700 ">
              <span className="text-[20px] leading-[20px] font-bold font-os flex relative left-[200px] top-[20px] hover:font-extrabold">
                Technologies
              </span>
              <span className="text-[15px] font-roboto leading-[15px] font-[400] flex relative top-[60px] left-[40px] hover:font-medium">
                Prisma, Stripe, React, Nodejs
              </span>
            </h1>
            <ul className="flex relative left-[385px]  space-x-2  hover:transition-all hover:duration-1000">
              <li>
                <img
                  src="/prisma-2.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700"
                />
              </li>

              <li>
                <img
                  src="/stripe-4.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700"
                />
              </li>
              <li>
                <img
                  src="/react.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700"
                />
              </li>
              <li>
                <img
                  src="/nodejs.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700"
                />
              </li>
            </ul>
          </div>
          <div
            className="flex w-[1130px] h-[100px] relative bg-slate-100  text-gray-700 rounded-[10px] hover:border-2
           hover:transition-all hover:duration-1000 hover:border-sky-700 hover:shadow-lg hover:pb-2"
          >
            <ul className="flex relative left-[155px]  space-x-2  hover:transition-all hover:duration-1000">
              <li>
                <img
                  src="/postgresql.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700"
                />
              </li>
              <li>
                <img
                  src="/mysql-3.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700"
                />
              </li>
              <li>
                <img
                  src="/mongodb.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700"
                />
              </li>
              <li>
                <img
                  src="/firebase-1.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700"
                />
              </li>
            </ul>
            <h1 className="flex relative left-[370px] hover:text-sky-700 ">
              <span className="text-[20px] leading-[20px] font-bold font-os flex relative left-[80px] top-[20px] hover:font-extrabold">
                Databases
              </span>
              <span className="text-[15px] font-roboto leading-[15px] font-[400] flex relative top-[60px] left-[-82px] hover:font-medium">
                PostgreSQL, MySQL, Mongodb, Firebase
              </span>
            </h1>
          </div>
          <div
            className="flex w-[1130px] h-[100px] relative bg-slate-100  text-gray-700 rounded-[10px] hover:border-2
           hover:transition-all hover:duration-1000 hover:border-sky-700 hover:shadow-lg hover:pb-2"
          >
            <h1 className="flex relative left-[60px] hover:text-sky-700 ">
              <span className="text-[20px] leading-[20px] font-bold font-os flex relative left-[200px] top-[20px] hover:font-extrabold">
                Tools
              </span>
              <span className="text-[15px] font-roboto leading-[15px] font-[400] flex relative top-[60px] left-[85px] hover:font-medium">
                Visual Studio, Git, Postman
              </span>
            </h1>
            <ul className="flex relative left-[470px]  space-x-2  hover:transition-all hover:duration-1000">
              <li>
                <img
                  src="/visual-studio-2013.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700"
                />
              </li>
              <li>
                <img
                  src="/git-bash.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700"
                />
              </li>

              <li>
                <img
                  src="/postman.svg"
                  className="w-[75px] h-[75px] mt-[10px] rounded-[10px] 
                  hover:w-[80px] hover:h-[80px] hover:mt-[8px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-700"
                />
              </li>
            </ul>
          </div>
        </div>
        <div
          className="flex w-[1130px] h-[100px] relative bg-slate-50 bottom-[10px] text-gray-700 rounded-[10px]
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
         hover:transition-all hover:duration-1000 text-gray-700 rounded-[10px] hover:border-4 hover:border-sky-700 hover:shadow-lg hover:pb-2"
        >
          <ul className="flex flex-col space-y-5 font-[500] text-[20px] relative top-[60px] left-[40px] font-manrope">
            <li className="hover:text-[22px] hover:shadow-md w-[420px] hover:text-sky-600 transition-all duration-1000">
              Problem-solving, decision-making skills.
            </li>
            <li className="hover:text-[21px] hover:shadow-md w-[510px] hover:text-sky-600 transition-all duration-1000">
              Basic computations and compiler design concepts.
            </li>
            <li className="hover:text-[21px] hover:shadow-md w-[730px] hover:text-sky-600 transition-all duration-1000">
              Gained knowledge on data analysis, software testing and data
              structures.
            </li>
            <li className="hover:text-[22px] hover:shadow-md w-[380px] hover:text-sky-600 transition-all duration-1000">
              Graphic design, photo/video editing.
            </li>
            <li className="hover:text-[22px] hover:shadow-md w-[520px] hover:text-sky-600 transition-all duration-1000">
              Fluent in English, Bengali; typing speed: 50+ WPM.
            </li>
            <li className="hover:text-[22px] hover:shadow-md w-[540px] hover:text-sky-600 transition-all duration-1000">
              Leadership, teamwork, communication, adaptability
            </li>
            <li>
              <span
                className="bg-slate-950
                absolute top-[270px] left-[620px] font-manrope font-[500] text-sky-500 w-[140px] rounded-[15px] h-[45px] border border-sky-500 text-[28px] text-center 
            hover:border-2 hover:h-[50px] hover:border-slate-950 hover:bg-slate-50 hover:text-gray-950 hover:transition-all hover:duration-1000 shadow-xl"
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
