import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Project E-Commerce",
    video: "/ecom.mp4",
    description: "Created to establish payment from stripe",
    extra: "https://t.ly/RgvWY",
  },
  {
    id: 2,
    name: "Booking Management",
    video: "/bookingvid.mp4",
    description: "Managing bookings and invoices with receipt",
    extra: "https://t.ly/iFunV",
  },
  {
    id: 3,
    name: "E-Shop Management",
    video: "/eshopvid.mp4",
    description:
      "Tracking and managing buy, sell of products and shows records",
    extra: "https://t.ly/v0hFd",
  },
  {
    id: 4,
    name: "Postiz Design",
    video: "/postizvid.mp4",
    description: "Purpose of learning tailwind-css and frontend properties.",
    extra: "https://t.ly/cn_Tz",
  },
  {
    id: 5,
    name: "Info Strainer",
    video: "/infostrainervid.mp4",
    description: "Created on visual studio for information validation",
    extra: "https://t.ly/Fy3Hu",
  },
];

const Project = () => {
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
    <div className="container bg-slate-50 overflow-hidden h-screen max-w-[1440px] mx-auto">
      <main className="mt-[70px]">
        <h1 className="text-3xl flex relative font-os top-[35px] left-[550px] font-bold text-center">
          My Projects
          <img
            src="/curve.svg"
            className="w-[200px] h-[120px] flex relative rotate-[-55deg] top-[1px] right-[130px]"
          />
        </h1>
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {/* Render the projects with video */}
            {projects.concat(projects).map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[380px] border border-slate-100 bg-slate-50 h-[520px] mt-8
                 text-gray-950 mx-[29px] rounded-[20px] shadow-md text-center relative"
                onMouseEnter={() => handleMouseEnter(project)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleLinkClick(hoveredProject.extra)}
              >
                <video
                  src={project.video}
                  alt={project.name}
                  className="h-[400px] w-full object-cover rounded-t-[20px]"
                  autoPlay
                  loop
                  muted
                />
                <h2 className="text-[20px] font-roboto mt-3 font-semibold">
                  {project.name}
                </h2>
                <p className="text-sm">{project.description}</p>

                {/* Tooltip for the extra link */}
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
      </main>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Project;
