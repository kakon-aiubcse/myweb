import Link from "next/link";
import React from "react";
import Header from "./header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Spinner from "./component/spinner";

const Experience = () => {
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
        <div className="xs:flex xs:bg-slate-800">
          <Header />
        </div>
      )}
      <div className="flex flex-col max-w-[1440px] bg-slate-50 relative  xs:bg-slate-950 xs:items-center xs:h-[2200px] xs:w-screen 
      ">
        <div className="flex justify-center items-center my-4  top-[100px] relative ">
          <Link
            href="/experiences"
            className="hover:border-b hover:border-slate-200"
          >
            <h1 className="text-3xl font-os font-bold left-[-6px] text-center relative ">
              <span className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
                Experiences{" "}
              </span>
              <img
                src="/curve.svg"
                alt="Curve Decoration"
                className="w-[200px] h-[120px] absolute rotate-[-55deg] top-0 -right-[50px] "
              />
            </h1>
          </Link>
        </div>

        <div className="flex flex-col justify-around  mt-[170px] mb-[100px] xs:mt-10 xs:mb-10 xs:max-w-[400px] xs:items-center  xs:relative xs:right-20">
          <div
            className="relative p-1 hover:bg-gradient-to-r from-sky-500 to-teal-600 
        transition-all duration-1000 w-[1186px] h-[261px] left-[80px] hover:w-[1186px] hover:h-[261px] rounded-[10px] 
        xs:w-[310px] xs:h-[600px] xs:top-32 xs:relative  xs:hover:h-[600px] xs:hover:w-[310px] xs:p-1  xs:items-center xs:right-0"
          >
            <div
              className="flex justify-center relative w-[1180px] h-[255px] border-2 
        transition-all duration-1000 rounded-[10px] bg-slate-100 text-gray-950 
        border-slate-200 shadow-sm hover:h-[255px] hover:w-[1180px] hover:right-[1.2px] hover:top-[-0.5px]  
        xs:w-[305px] xs:h-[595px] xs:hover:w-[305px] xs:hover:h-[590px] xs:border-2 xs:p-1 xs:items-center xs:relative xs:right-0 "
            >
              <div className="flex flex-row space-x-3 items-center relative justify-start xs:flex xs:flex-col xs:relative">
                <span
                  className="flex relative whitespace-nowrap w-[450px] bottom-[60px] left-[400px] font-os text-[25px]
              leading-[25px] font-bold hover:transition hover:duration-1000 hover:text-sky-600
              xs:w-[65px] xs:relative xs:top-[50px] xs:left-[-115px] xs:text-[13.5px] "
                >
                  Backend Development Intern, Pressply LLC
                </span>
                <span
                  className="flex relative whitespace-nowrap w-[240px] bottom-3 font-roboto text-[18px] right-[-100px]
               leading-[18px] font-semibold hover:transition hover:duration-1000 hover:text-sky-600
               xs:w-[70px] xs:relative xs:left-[-40px] xs:text-[12px] xs:top-[55px]"
                >
                  (Jan 2024 – May 2024)
                </span>
                <span
                  className="flex relative font-manrope text-[18px] font-light w-[900px] h-[90px] top-[65px] right-[315px]
               hover:transition hover:duration-1000 hover:text-sky-600
               xs:relative xs:text-[13px] xs:w-[280px] xs:left-[0px] xs:top-[95px] xs:leading-8"
                >
                  Built e-commerce backend with Express.js, PostgreSQL, Prisma,
                  and integrated Stripe for payments.{" "}
                  <br className="xs:hidden" />
                  Collaborated with frontend teams and participated in code
                  reviews.
                </span>

                <Link href="https://pressply.com/">
                  <img
                    src="/pressply.png"
                    className="bg-slate-100 w-[300px] h-[110px] rounded-[10px] flex relative right-[280px] hover:transition
                   hover:duration-1000 hover:border-2 hover:border-sky-600
                    xs:w-[250px] xs:h-[100px] xs:relative xs:left-0 xs:top-[-250px]"
                  />
                </Link>
                <div
                  class="hidden xs:flex justify-center absolute bg-slate-50 items-center top-[610px] rounded-[10px] left-[250px] border border-slate-50  
        hover:border hover:border-black hover:transition hover:duration-1000 xs:left-[0px] xs:top-[322px] xs:w-[250px] "
                >
                  <a
                    href="/RecommendationLetter_INT457.pdf"
                    download
                    class="flex items-center bg-gradient-to-r from-teal-500 to-sky-500 te
             px-6 py-3 rounded-lg shadow-xl hover:font-extrabold
            hover:bg-gradient-to-r hover:from-sky-500 hover:to-teal-600   hover:shadow-2xl hover:border-b-4 hover:border-sky-700"
                  >
                    <span class="text-sm font-semibold font-lora  text-slate-200 hover:transition hover:duration-1000  hover:shadow-2xl  ">
                      Recommendation letter
                    </span>
                    <img
                      src="/download.svg"
                      alt="Download Icon"
                      class="w-6 h-6 ml-2"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative p-1 mt-5 hover:bg-gradient-to-r from-sky-600 to-teal-600 
  transition-all duration-1000 w-[1186px] left-[80px] hover:w-[1186px] rounded-[10px] 
  hover:h-[261px] xs:w-[310px] xs:h-[600px] xs:top-32 xs:relative  xs:hover:h-[600px] xs:hover:w-[310px] xs:p-1  xs:items-center xs:right-0"
          >
            <div
              className="flex justify-center relative w-[1180px] rounded-[10px] shadow-xl
    border-slate-200 border-2 bg-slate-100 h-[255px] text-gray-950
    transition-all duration-500 hover:h-[255px] hover:w-[1180px] hover:right-[1.2px] hover:top-[-0.5px] 
     xs:w-[305px] xs:h-[595px] xs:hover:w-[305px] xs:hover:h-[590px] xs:border-2 xs:p-1 xs:items-center xs:relative xs:right-0 "
            >
              <div className="flex flex-row space-x-3 items-center relative justify-start xs:flex xs:flex-col xs:relative">
                <span
                  className="flex relative whitespace-nowrap w-[450px] bottom-[60px] left-[400px] font-os text-[25px] 
              leading-[25px] font-bold hover:transition hover:duration-1000 hover:text-sky-600  
              xs:w-[65px] xs:relative xs:top-[50px] xs:left-[-110px] xs:text-[13.5px]"
                >
                  Backend Development Intern, Taskirsview.
                </span>
                <span
                  className="flex relative whitespace-nowrap w-[240px] bottom-3 font-roboto text-[18px] right-[-100px] 
              leading-[18px] font-semibold hover:transition hover:duration-1000 hover:text-sky-600
              xs:w-[70px] xs:relative xs:left-[-30px] xs:text-[12px] xs:top-[55px]"
                >
                  (Jan 2025 – Feb 2025)
                </span>
                <span
                  className="flex relative font-manrope text-[18px] font-light w-[900px] h-[90px] top-[65px] right-[315px]
               hover:transition hover:duration-1000 hover:text-sky-600
                xs:relative xs:text-[13px] xs:w-[280px] xs:left-[0px] xs:top-[95px] xs:leading-10"
                >
                  Designed, Developed and maintained server-side logic,
                  integrated front-end elements, managed databases. Collaborated
                  with team for high quality solutions.
                </span>
                <Link href="https://t.ly/gup-v/">
                  <img
                    src="/taskirsview.png"
                    className="bg-slate-100 w-[300px] h-[110px] rounded-[10px] flex relative right-[280px] 
                  hover:transition hover:duration-1000 hover:border-2 hover:border-sky-600
                   xs:w-[250px] xs:h-[100px] xs:relative xs:left-0 xs:top-[-250px]"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div
            className="relative p-1 mt-5 hover:bg-gradient-to-r from-sky-600 to-teal-600 
  transition-all duration-1000 w-[1186px] left-[80px] hover:w-[1186px] rounded-[10px] 
  hover:h-[261px] xs:w-[310px] xs:h-[600px] xs:top-32 xs:relative  xs:hover:h-[600px] xs:hover:w-[310px] xs:p-1  xs:items-center xs:right-0"
          >
            <div
              className="flex justify-center relative w-[1180px] rounded-[10px] shadow-xl
    border-slate-200 border-2 bg-slate-100 h-[255px] text-gray-950
    transition-all duration-500 hover:h-[255px] hover:w-[1180px] hover:right-[1.2px] hover:top-[-0.5px] 
     xs:w-[305px] xs:h-[595px] xs:hover:w-[305px] xs:hover:h-[590px] xs:border-2 xs:p-1 xs:items-center xs:relative xs:right-0 "
            >
              <div className="flex flex-row space-x-3 items-center relative justify-start xs:flex xs:flex-col xs:relative">
                <span
                  className="flex relative whitespace-nowrap w-[450px] bottom-[60px] left-[400px] font-os text-[25px] 
              leading-[25px] font-bold hover:transition hover:duration-1000 hover:text-sky-600  
              xs:w-[70px] xs:relative xs:top-[50px] xs:left-[-95px] xs:text-[13.5px]"
                >
                  Web Development Intern, GAO Tek Inc.
                </span>
                <span
                  className="flex relative whitespace-nowrap w-[240px] bottom-3 font-roboto text-[18px] right-[-100px] 
              leading-[18px] font-semibold hover:transition hover:duration-1000 hover:text-sky-600
              xs:w-[70px] xs:relative xs:left-[-30px] xs:text-[12px] xs:top-[55px]"
                >
                  (Dec 2023 – Jan 2024)
                </span>
                <span
                  className="flex relative font-manrope text-[18px] font-light w-[900px] h-[90px] top-[65px] right-[315px]
               hover:transition hover:duration-1000 hover:text-sky-600
                xs:relative xs:text-[13px] xs:w-[280px] xs:left-[0px] xs:top-[95px] xs:leading-10"
                >
                  Executed software engineering tasks with a focus on quality,
                  contributing to team projects and surpassing performance goals
                </span>
                <Link href="https://gaotek.com/">
                  <img
                    src="/gaotek.png"
                    className="bg-slate-100 w-[300px] h-[110px] rounded-[10px] flex relative right-[280px] 
                  hover:transition hover:duration-1000 hover:border-2 hover:border-sky-600
                   xs:w-[250px] xs:h-[100px] xs:relative xs:left-0 xs:top-[-250px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Experience;
