import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Experience",
    "Achievements",
    "Leadership & Events",
    "Publications",
    "Education",
    "Volunteering",
    "Contact",
  ];

  return (
    <>
      {/* HEADER */}
      <header className="w-full">

        {/* Top colored lines */}
        <div className="w-full">
          <div className="h-[3px] bg-[#f39c12]"></div>
          <div className="h-[3px] bg-white"></div>
          <div className="h-[3px] bg-[#2e7d32]"></div>
        </div>

        {/* Logo Section */}
        <div className="px-4 sm:px-8 lg:px-16 py-6">
          <div className="flex justify-between items-center">

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#1b3b5a] flex items-center justify-center">
                <img src="./logo.png" alt="logo" />
              </div>

              <div>
                <h1 className="text-[22px] sm:text-[28px] lg:text-[32px] font-serif font-bold text-[#1b3b5a] leading-none">
                  Shailender Tiwari
                </h1>

                <p className="text-gray-600 text-[12px] sm:text-[14px]">
                  Public Policy & Leadership
                </p>
              </div>
            </div>

            <div className="hidden md:flex gap-6">
              <img src="./linkedin.png" className="h-[20px]" />
              <img src="./mail.png" className="h-[20px]" />
            </div>

            <button
              className="md:hidden text-[#1b3b5a]"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>
        </div>

        <div className="border-t border-gray-300"></div>

      </header>

      {/* STICKY NAVIGATION */}
      <div className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-[#FF9933]">
        <nav className="px-4 sm:px-8 lg:px-16 py-4">

          {/* Desktop Links */}
          <div className="hidden md:flex flex-wrap gap-x-10 gap-y-4 text-[18px] text-[#1b3b5a] font-medium justify-center">
            {links.map((item, i) => (
              <a
                key={i}
                className="relative cursor-pointer transition-all duration-300 hover:text-[#FF9933] group"
              >
                {item}

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF9933] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="flex flex-col gap-4 md:hidden mt-2 text-[#1b3b5a] font-medium">
              {links.map((item, i) => (
                <a
                  key={i}
                  className="hover:text-[#FF9933] transition"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}

        </nav>
      </div>
    </>
  );
}