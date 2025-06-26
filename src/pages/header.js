import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import * as flubber from "flubber";
const menuPath = "M3 6h18 M3 12h18 M3 18h18"; // 3 lines (hamburger)
const closePath = "M6 6l12 12 M18 6l-12 12"; // X shape
const Header = ({ sectionsRefs }) => {
  const router = useRouter();
  const isRootPage = router.pathname === "/";
  const iscontactPage = router.pathname === "/contact";
  const [activeSection, setActiveSection] = useState("homepage");
  const [path, setPath] = useState(menuPath);
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    const interpolator = flubber.interpolate(menuPath, closePath);
    let animationFrame;
    let progress = 0;
    const duration = 600; // ms
    const frameRate = 60;
    const increment = 1 / (duration / (1000 / frameRate));

    function animate() {
      progress += isOpen ? increment : -increment;
      progress = Math.min(Math.max(progress, 0), 1);
      setPath(interpolator(progress));
      if ((isOpen && progress < 1) || (!isOpen && progress > 0)) {
        animationFrame = requestAnimationFrame(animate);
      }
    }
    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [isOpen]);

  return (
    <>
      <div
        className="bg-slate-50 flex justify-between items-center relative h-[80px] overflow-hidden border-b border-slate-200 px-10 
        xs:border xs:bg-slate-800 xs:border-slate-800 
    
    "
      >
        <div className="flex cursor-pointer">
          <a href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-[50px] w-[110px] rounded-[10px] shadow-sm transition hover:border-2 
              hover:h-[55px] hover:border-sky-500 xs:relative xs:top-[2px] "
            />
          </a>
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
      {/*menu button*/}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="hidden xs:block absolute top-8 right-8 z-50 xs:bg-transparent rounded p-1 xs:top-[20px]"
        style={{ width: 36, height: 36, border: "none", cursor: "pointer" }}
      >
        <motion.svg
          width={36}
          height={36}
          viewBox="0 0 24 24"
          fill="none"
          stroke={isOpen ? "red" : "white"}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.path
            d={path}
            animate={{ d: path }}
            initial={false}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </motion.svg>
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
