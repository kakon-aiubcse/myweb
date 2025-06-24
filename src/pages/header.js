import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";

const Header = ({ sectionsRefs }) => {
  const router = useRouter();
  const isRootPage = router.pathname === "/";
  const iscontactPage = router.pathname === "/contact";
  const [activeSection, setActiveSection] = useState("homepage");

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionsRefs || !Array.isArray(sectionsRefs)) return;

      const scrollPosition = window.scrollY + 80; // add offset for fixed header height

      sectionsRefs.forEach((ref) => {
        if (!ref || !ref.current) return;

        const section = ref.current;
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionsRefs]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="bg-slate-50 flex justify-between items-center relative h-[80px] overflow-hidden border-b border-slate-200 px-10
    
    "
      >
        <div className="flex cursor-pointer">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-[50px] w-[110px] rounded-[10px] shadow-sm transition hover:border-2 
              hover:h-[55px] hover:border-sky-500 xs:relative xs:top-[8px] "
            />
          </Link>
        </div>
        <nav className="flex items-center space-x-8 xs:hidden">
          <ul className="flex space-x-8">
            {[
              "home",
              "experiences",
              "projects",
              "skills",
              "education",
              "about",
            ].map((section) => (
              <li
                key={section}
                className={`${
                  activeSection === section
                    ? "border-b-[3px] border-sky-400"
                    : ""
                }`}
              >
                <Link
                  href={
                    section === "home"
                      ? "/"
                      : isRootPage
                        ? `#${section}`
                        : `/${section}`
                  }
                >
                  <span
                    className={`hfont ${
                      activeSection === section
                        ? "!text-sky-400"
                        : "text-gray-800"
                    } transition duration-1000`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>{" "}
        {/* Contact and Email Section */}
        <div className="text-end hover:transition hover:duration-1000  xs:hidden">
          <div className="flex flex-col-2 relative right-6 space-x-2 hover:transition hover:duration-1000">
            <div className="hover:transition hover:duration-1000 border-r-[3.5px] border-sky-400 mr-[5px]">
              <Link href="/contact">
                <button className="hover:transition hover:duration-1000">
                  <img
                    src="/sent.svg"
                    className="w-[48px] h-[32px] mr-2 mt-1 hover:h-[40px] hover:transition hover:duration-1000"
                  />
                </button>
              </Link>
            </div>

            <div className="flex hover:transition hover:duration-1000 ">
              <button
                onClick={() =>
                  (window.location.href = "mailto:kakon.aiubcse@gmail.com")
                }
                className="hover:transition hover:duration-1000"
              >
                <img
                  src="/mailf.svg"
                  className="w-[48px] h-[36px] top-[-2px] flex relative hover:h-[40px] hover:transition hover:duration-1000"
                  alt="Mail Icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        className="hidden  xs:top-8 xs:block xs:absolute xs:right-8"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={36} /> : <Menu size={36} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-slate-100 text-black w-full h-screen shadow-lg rounded-lg transition duration-1000 overflow-hidden fixed top-20 left-0 z-50">
          <ul className="flex flex-col space-y-8 mt-16 ml-10 items-start   ">
            {[
              "home",
              "experiences",
              "projects",
              "skills",
              "education",
              "about",
            ].map((section) => (
              <li
                key={section}
                className={` ${activeSection === section ? "border-b-[3px] border-sky-400 " : ""}`}
              >
                <Link
                  href={
                    section === "home"
                      ? "/"
                      : isRootPage
                        ? `#${section}`
                        : `/${section}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <span
                    className={`hfont ${activeSection === section ? "!text-sky-400" : "text-gray-800"} transition duration-1000`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-end hover:transition hover:duration-1000">
            <div
              className="flex flex-col-2 relative justify-end top-0 mt-10
             space-x-2 hover:transition hover:duration-1000"
            >
              {!iscontactPage && (
                <div className="hover:transition hover:duration-1000 border-r-[3.5px] border-sky-400 mr-[5px]">
                  <Link href="/contact">
                    <button className="hover:transition hover:duration-1000">
                      <img
                        src="/sent.svg"
                        className="w-[48px] h-[32px] mr-2 mt-1 hover:h-[40px] hover:transition hover:duration-1000"
                      />
                    </button>
                  </Link>
                </div>
              )}

              <div className="flex hover:transition hover:duration-1000 ">
                <button
                  onClick={() =>
                    (window.location.href = "mailto:kakon.aiubcse@gmail.com")
                  }
                  className="hover:transition hover:duration-1000"
                >
                  <img
                    src="/mailf.svg"
                    className="w-[48px] h-[36px] top-[-2px] flex relative hover:h-[40px] hover:transition hover:duration-1000"
                    alt="Mail Icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
