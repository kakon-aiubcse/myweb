import React from "react";
import Header from "./header";
import Homepage from "./homepage";
import Project from "./projects";
import Experience from "./experiences";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 bg-slate-200 px-10 z-10">
          <Header />
        </div>

        {/* Main Content */}
        <div className="mt-[60px] block relative bg-slate-200 px-10">
          <Homepage />
        </div>

        <div
          id="experiences"
          className="block relative top-[-70px] overflow-hidden bg-slate-200 px-10"
        >
          <Experience />
        </div>
        <div
          id="projects"
          className="block relative top-[-70px] bg-slate-200 px-10"
        >
          <Project />
        </div>
      </div>
    </>
  );
}
