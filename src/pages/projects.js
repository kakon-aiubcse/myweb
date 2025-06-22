import Link from "next/link";
import { useState } from "react";
import Header from "./header";
import { useRouter } from "next/router";

const projects = [
  {
    id: 1,
    name: "Project E-Commerce",
    video: "/ecom.mp4",
    description: "Created to establish payment from stripe",
    extra: "https://ecommerceproject-kikservercoder.netlify.app/",
  },
  {
    id: 2,
    name: "Booking Management",
    video: "/bookingvid.mp4",
    description: "Managing bookings and invoices with receipt",
    extra: "https://bookingapppersonal.netlify.app/",
  },
  {
    id: 3,
    name: "E-Shop Management",
    video: "/eshopvid.mp4",
    description:
      "Tracking and managing buy, sell of products and shows records",
    extra: "https://github.com/kakon-aiubcse/Eshopmanagementweb",
  },
  {
    id: 4,
    name: "Postiz Design",
    video: "/postizvid.mp4",
    description: "Purpose of learning tailwind-css and frontend properties.",
    extra: "https://postiz.netlify.app/",
  },
  {
    id: 5,
    name: "Info Strainer",
    video: "/infostrainervid.mp4",
    description: "Created on visual studio for information validation",
    extra: "https://github.com/kakon-aiubcse/info-strainer",
  },
];
const Project = () => {
  const router = useRouter();
  const isRootPage = router.pathname === "/";
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (project) => {
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      {!isRootPage && (
        <div className="xs:flex">
          <Header />
        </div>
      )}

      <div className="container bg-slate-50 overflow-hidden h-screen max-w-[1440px] mx-auto xs:bg-sky-950 xs:h-[800px]">
        <main className="mt-[70px] ">
          <Link
            href="/projects"
            className="hover:border-b hover:border-slate-200"
          >
            <h1 className="text-3xl flex relative font-os top-[20px] left-[600px] font-bold text-center xs:relative xs:left-[120px]">
              <span className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
                Projects{" "}
              </span>
              <img
                src="/curve.svg"
                className="w-[180px] h-[100px] flex relative rotate-[-55deg] top-[1px] right-[120px]"
                alt="curve decoration"
              />
            </h1>
          </Link>
          <div className="overflow-hidden ">
            <div className="flex animate-scroll">
              {[
                ...projects,
                ...projects,
                ...projects,
                ...projects,
                ...projects,
                ...projects,
                ...projects,
              ].map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[380px] border border-slate-100 bg-slate-50 h-[520px] text-gray-950 mx-[29px] rounded-[20px] shadow-md text-center relative hover:border hover:border-sky-600 xs:w-[190px] xs:h-[550px] xs:mt-4"
                  onClick={() => handleLinkClick(project.extra)}
                >
                  <video
                    onMouseEnter={() => handleMouseEnter(project)}
                    onMouseLeave={handleMouseLeave}
                    src={project.video}
                    alt={project.name}
                    className="h-[400px] w-full object-cover rounded-t-[20px] "
                    autoPlay
                    loop
                    muted
                  />
                  <h2 className="text-[20px] font-roboto mt-3 font-semibold">
                    {project.name}
                  </h2>
                  <p className="text-sm">{project.description}</p>

                  {hoveredProject && hoveredProject.id === project.id && (
                    <div className="absolute bg-slate-50 text-gray-950 p-2 rounded mt-2 left-1/2 transform -translate-x-1/2">
                      <span
                        className="underline cursor-pointer"
                        onClick={() => handleLinkClick(hoveredProject.extra)}
                      >
                        {hoveredProject.extra}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {isRootPage && (
            <Link href="#about">
              <div
                className="xs:hidden relative top-[50px] left-[1252px] transform -translate-x-1/2 cursor-pointer animate-bounce"
                aria-label="Scroll down"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-sky-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a1 1 0 011 1v12.586l4.293-4.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 011.414-1.414L9 13.586V1a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          )}
        </main>

        <style jsx>{`
          @keyframes infinite-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(
                -${projects.length * 380 + (projects.length - 1) * 58 + 58}px
              );
            }
          }
          .animate-scroll {
            display: flex;
            animation: infinite-scroll 60s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused; /* Pause on hover */
          }
        `}</style>
      </div>
    </>
  );
};

export default Project;
