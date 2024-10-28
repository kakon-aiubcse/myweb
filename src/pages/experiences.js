import Link from "next/link";
import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col max-w-[1440px] bg-slate-50 relative">
      <div className="flex justify-center items-center my-4  top-[100px] relative ">
        <Link
          href="/experiences"
          className="hover:border-b hover:border-slate-200"
        >
          <h1 className="text-3xl font-os font-bold left-[-6px] text-center relative ">
            Experiences
            <img
              src="/curve.svg"
              alt="Curve Decoration"
              className="w-[200px] h-[120px] absolute rotate-[-55deg] top-0 -right-[50px] "
            />
          </h1>
        </Link>
      </div>
      <div className="flex flex-col justify-around  mt-[170px] mb-[100px] ">
        <div
          className="relative p-1 hover:bg-gradient-to-r from-sky-500 to-teal-600 
  transition-all duration-1000 w-[1186px] h-[261px] left-[80px] hover:w-[1186px] rounded-[10px] 
  hover:h-[261px]"
        >
          <div
            className="flex justify-center relative w-[1180px] h-[255px] border-2 
    transition-all duration-1000 rounded-[10px] bg-slate-100 text-gray-950 
    border-slate-200 shadow-sm hover:h-[255px] hover:w-[1180px] hover:right-[1.2px] hover:top-[-0.5px]"
          >
            <div className="flex flex-row space-x-3 items-center relative justify-start">
              <span className="flex relative whitespace-nowrap w-[450px] bottom-[60px] left-[400px] font-os text-[25px] leading-[25px] font-bold hover:transition hover:duration-1000 hover:text-sky-600">
                Backend Development Intern, Pressply LLC
              </span>
              <span className="flex relative whitespace-nowrap w-[240px] bottom-3 font-roboto text-[18px] right-[-100px] leading-[18px] font-semibold hover:transition hover:duration-1000 hover:text-sky-600">
                (Jan 2024 – May 2024)
              </span>
              <span className="flex relative font-manrope text-[18px] font-light w-[900px] h-[90px] top-[65px] right-[315px] hover:transition hover:duration-1000 hover:text-sky-600">
                Built e-commerce backend with Express.js, PostgreSQL, Prisma,
                and integrated Stripe for payments. <br />
                Collaborated with frontend teams and participated in code
                reviews.
              </span>

              <Link href="https://pressply.com/">
                <img
                  src="/pressply.png"
                  className="bg-slate-100 w-[300px] h-[110px] rounded-[10px] flex relative right-[280px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-600"
                />
              </Link>
            </div>
          </div>
        </div>

        <div
          className="relative p-1 mt-5 hover:bg-gradient-to-r from-sky-600 to-teal-600 
  transition-all duration-1000 w-[1186px] left-[80px] hover:w-[1186px] rounded-[10px] 
  hover:h-[261px]"
        >
          <div
            className="flex justify-center relative w-[1180px] rounded-[10px] shadow-xl
    border-slate-200 border-2 bg-slate-100 h-[255px] text-gray-950
    transition-all duration-500 hover:h-[255px] hover:w-[1180px] hover:right-[1.2px] hover:top-[-0.5px]"
          >
            <div className="flex flex-row space-x-3 items-center relative justify-start">
              <span className="flex relative whitespace-nowrap w-[450px] bottom-[60px] left-[400px] font-os text-[25px] leading-[25px] font-bold hover:transition hover:duration-1000 hover:text-sky-600">
                Web Development Intern, GAO Tek Inc.
              </span>
              <span className="flex relative whitespace-nowrap w-[240px] bottom-3 font-roboto text-[18px] right-[-100px] leading-[18px] font-semibold hover:transition hover:duration-1000 hover:text-sky-600">
                (Dec 2023 – Jan 2024)
              </span>
              <span className="flex relative font-manrope text-[18px] font-light w-[900px] h-[90px] top-[65px] right-[315px] hover:transition hover:duration-1000 hover:text-sky-600">
                Executed software engineering tasks with a focus on quality,
                contributing to team projects and surpassing performance goals
              </span>
              <Link href="https://gaotek.com/">
                <img
                  src="/gaotek.png"
                  className="bg-slate-100 w-[300px] h-[110px] rounded-[10px] flex relative right-[280px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-600"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
