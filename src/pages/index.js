import React, { useRef, useState, useEffect } from "react";

import Header from "./header";
import Homepage from "./homepage";
import Project from "./projects";
import Experience from "./experiences";
import Skills from "./skills";
import Education from "./education";
import About from "./about";
import Hobby from "./component/hobbies";
import Footer from "./footer";
import Spinner from "./component/spinner";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const homepageRef = useRef(null);
  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    // Simulate load, or use actual data fetch
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 👈 Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="h-screen">
        <div className="fixed top-0 left-0 right-0  px-10 z-10 xs:px-0 xs:z-10 tb:w-screen tb:px-0 xb:bg-slate-50">
          <Header
            sectionsRefs={[
              homepageRef,
              experiencesRef,
              projectsRef,
              skillsRef,
              educationRef,
              aboutRef,
            ]}
          />
        </div>

        <div
          id="home"
          ref={homepageRef}
          className="bg-slate-50 mt-[60px] block relative  px-10 tb:flex tb:items-start tb:justify-start tb:px-0 xs:px-0 xb:items-center xb:justify-center xb:flex xb:bg-slate-50"
        >
          <Homepage />
        </div>
        <div
          id="experiences"
          ref={experiencesRef}
          className="block relative top-[-70px] overflow-hidden  px-10 xb:p-0 xs:p-0 xs:bg-slate-950 
          xs:top-[-50px]  xs:rounded-t-[60px]  xb:items-center xb:justify-center xb:flex xb:right-0
         tb:px-0 xb:bg-slate-50"
        >
          <Experience />
        </div>
        <div
          id="projects"
          ref={projectsRef}
          className="block relative top-[-70px]  px-10 xs:top-[-65px] xs:px-0 xb:bg-slate-50  "
        >
          <Project />
        </div>
        <div
          id="skills"
          ref={skillsRef}
          className="block relative top-[-70px] overflow-hidden h-auto  px-10 
          xs:top-[-70px] xs:px-0  xb:items-center xb:justify-center xb:flex xb:right-0 xb:top-[-80px] xb:bg-slate-50"
        >
          <Skills />
        </div>
        <div
          id="education"
          ref={educationRef}
          className="block relative xb:bg-slate-50 bg-slate-200 overflow-hidden top-[-75px]  px-10 xs:px-0 xs:top-[-80px] xb:items-center xb:justify-center xb:flex xb:bg-slate-800 xb:top-[-110px]"
        >
          <Education />
        </div>
        <div
          id="about"
          ref={aboutRef}
          className="block relative overflow-hidden xb:bg-slate-50 top-[-30px] min-h-screen  px-10  xs:px-0 xs:top-[-170px] xb:top-[-110px] xb:flex xb:flex-col xb:relative xb:justify-center xb:items-center"
        >
          <About />
          <Hobby />
        </div>
        <div
          id="footer"
          className="block relative top-[-0px] overflow-x-hidden min-h-[400px] xs:top-[-230px] xb:top-[-230px]
         "
        >
          <Footer />
        </div>
      </div>
    </>
  );
}
