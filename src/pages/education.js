import Link from "next/link";
import React from "react";
import Header from "./header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Spinner from "./component/spinner";
const Education = () => {
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
        <div className="xs:flex xs:bg-slate-50">
          <Header />
        </div>
      )}
      <div
        className="flex flex-col max-w-[1440px] top-0 pt-[50px] bg-slate-200 relative bottom-10 min-h-[700px]
      xs:h-[2500px] xs:items-center xs:flex xs:flex-col xs:overflow-hidden xs:top-0 xs:bg-slate-200"
      >
        <div>
          <Link
            href="/education"
            className="hover:border-b hover:border-slate-200"
          >
            <h1 className="text-3xl flex relative font-os top-[85px] left-[570px] font-bold text-center  xs:relative xs:left-[100px]">
              <span className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
                Education{" "}
              </span>
              <img
                src="/curve.svg"
                className="w-[180px] h-[100px] flex relative rotate-[-55deg] top-[1px] right-[120px]"
                alt="curve decoration"
              />
            </h1>
          </Link>
        </div>
        <div className="flex flex-row space-x-4 left-[40px] relative top-[80px] h-screen xs:flex xs:flex-col xs:h-[1700px] xs:space-y-10 xs:items-start">
          <div
            className="flex flex-col w-[400px] h-[500px] relative bg-slate-100 rounded-[15px] 
          hover:transition hover:duration-1000 hover:border-2 hover:border-sky-600 xs:w-[350px] xs:left-[-5px] xs:bg-sky-200"
          >
            <ul className="flex relative flex-col items-center font-roboto space-y-[20px] top-[40px] ">
              <li
                className="text-[20px] font-[600] leading-[20px] 
              hover:transition hover:duration-1000 hover:shadow-xl hover:text-sky-600 xs:text-[17px]"
              >
                BSc in Computer Science & Engineering
              </li>
              <li className="text-[18px] font-[500] leading-[18px] hover:transition hover:duration-1000 hover:shadow-xl hover:text-sky-600 xs:text-[15px]">
                American Internation University of Bangladesh
              </li>
              <li className="flex relative bottom-4 hover:transition hover:duration-1000 hover:shadow-xl hover:text-sky-600 ">
                Kuratoli, Khilkhet
              </li>
              <li className="hover:transition hover:duration-1000 hover:shadow-xl hover:text-sky-600 ">
                <span className="text-[16px] font-[500] leading-[18px] ">
                  Graduated :
                </span>{" "}
                Spring (2023-2024)
              </li>
              <li className="hover:transition hover:duration-1000 hover:shadow-xl hover:text-sky-600 ">
                {" "}
                <span className="text-[16px] font-[500] leading-[18px] ">
                  Major :{" "}
                </span>
                Software Engineering
              </li>
              <li className="hover:transition hover:duration-1000 hover:shadow-xl hover:text-sky-600 ">
                CGPA :
                <span className="text-[16px] font-[500] leading-[18px]">
                  3.66
                </span>
              </li>
              <li className="hover:transition hover:duration-1000 hover:shadow-xl hover:border hover:border-sky-600 ">
                <a href="https://www.aiub.edu/">
                  <img
                    src="/aiub.png"
                    className="h-[124px] w-[124px] flex relative top-[5px]"
                  />{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-[400px] h-[500px] relative">
            <div
              className="flex flex-col w-[400px] h-[500px] top-[20px] relative bg-slate-100 rounded-[15px] 
          hover:transition hover:duration-1000 hover:border-2 hover:border-sky-600 
          xs:w-[350px] xs:left-[-22px] xs:bg-sky-200 xs:top-[-1px]"
            >
              <ul className="flex relative flex-col items-center font-roboto space-y-[20px] top-[20px]">
                <li className="hover:transition hover:duration-1000 hover:shadow-xl hover:border hover:border-sky-600 ">
                  <a href="https://sherpurgovtcollege.edu.bd/">
                    <img
                      src="/sgc.jpeg"
                      className="h-[124px] w-[124px] flex relative top-[5px]"
                    />{" "}
                  </a>
                </li>
                <li className="text-[20px] font-[600] leading-[20px] hover:transition hover:duration-1000 hover:shadow-xl hover:text-sky-600  ">
                  Higher Secondary College
                </li>
                <li className="text-[18px] font-[500] leading-[18px] hover:transition hover:duration-1000 hover:shadow-xl hover:text-sky-600 ">
                  Sherpur Government College
                </li>
                <li className="flex relative bottom-4 hover:transition hover:duration-1000 hover:shadow-xl hover:text-sky-600 ">
                  Sherpur, Mymensingh, Bangladesh
                </li>
                <li className="hover:transition hover:duration-1000 hover:shadow-xl hover:text-sky-600 ">
                  <span className="text-[16px] font-[500] leading-[18px]  ">
                    Year of Completion :
                  </span>{" "}
                  2019
                </li>
                <li className="hover:transition hover:duration-1000 hover:shadow-xl hover:text-sky-600 ">
                  {" "}
                  <span className="text-[16px] font-[500] leading-[18px] ">
                    Group :{" "}
                  </span>
                  Science
                </li>
                <li className="hover:transition hover:duration-1000 hover:shadow-xl hover:text-sky-600 ">
                  GPA :
                  <span className="text-[16px] font-[500] leading-[18px]">
                    4.00/5.00
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-[400px] h-[500px]  relative">
            <div
              className="flex flex-col w-[400px] h-[500px] relative bg-slate-100 rounded-[15px] 
          hover:transition hover:duration-1000 hover:border-2 hover:border-sky-600 xs:w-[350px] xs:left-[-22px] xs:bg-sky-200"
            >
              <ul className="flex relative flex-col items-center font-roboto space-y-[20px] top-[40px]">
                <li className="text-[20px] font-[600] leading-[20px] hover:transition hover:duration-1000 hover:shadow-xl hover:text-sky-600  ">
                  Secondary School Certificate (SSC)
                </li>
                <li className="text-[18px] font-[500] leading-[18px] hover:transition hover:duration-1000 hover:shadow-xl hover:text-sky-600 ">
                  Jangaldi High School
                </li>
                <li className="flex relative bottom-4 hover:transition hover:duration-1000 hover:shadow-xl hover:text-sky-600 ">
                  Sherpur, Dhaka, Bangladesh
                </li>
                <li className="hover:transition hover:duration-1000 hover:shadow-xl hover:text-sky-600 ">
                  <span className="text-[16px] font-[500] leading-[18px] ">
                    Year of Completion :
                  </span>{" "}
                  2017
                </li>
                <li className="hover:transition hover:duration-1000 hover:shadow-xl hover:text-sky-600 ">
                  {" "}
                  <span className="text-[16px] font-[500] leading-[18px] ">
                    Group :{" "}
                  </span>
                  Science
                </li>
                <li className="hover:transition hover:duration-1000 hover:shadow-xl hover:text-sky-600 ">
                  GPA :
                  <span className="text-[16px] font-[500] leading-[18px]">
                    5.00/5.00
                  </span>
                </li>
                <li className="hover:transition hover:duration-1000 hover:shadow-xl hover:border hover:border-sky-600 ">
                  <img
                    src="/school.png"
                    className="h-[124px] w-[124px] flex relative top-[5px]"
                  />{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span
          className="flex relative bg-slate-200 w-[200px] h-[50px] bottom-[100px] left-[50px] text-[35px] font-lora font-[600]
        hover:transition hover:duration-500 hover:border-b-2 hover:border-sky-600 hover:text-sky-500 hover:font-[700] items-center justify-center 
        xs:relative xs:top-[10px] xs:left-0 xs:bg-slate-200"
        >
          Certificates
        </span>
        <ul
          className="bg-slate-200 w-[1100px] left-[150px] bottom-[48px] flex relative flex-col justify-between space-y-2 items-center 
          xs:h-[500px] xs:w-[400px] xs:relative xs:top-10 xs:left-[100px] xs:bg-slate-200 
        "
        >
          <li
            className="relative bg-slate-100 w-[1100px] h-[550px] justify-between top-[5px] flex flex-row rounded-[20px] 
          hover:transition hover:duration-1000 hover:border-2 hover:border-sky-600 hover:shadow-md 
          xs:relative xs:right-[100px] xs:h-[400px] xs:w-[350px] xs:top-0"
          >
            <img
              src="/cisco-1.png"
              className="w-[1100px] h-[550px] rounded-[20px] hover:transition hover:duration-1000 hover:border-2 hover:border-sky-600 
              hover:shadow-md xs:shadow-none xs:w-[350px] xs:h-[400px] "
            />
          </li>
        </ul>
      </div>
    </>
  );
};
export default Education;
