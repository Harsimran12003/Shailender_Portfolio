import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="w-full">
      {/* Top colored lines */}
      <div className="w-full mt-4">
        <div className="h-[3px] bg-[#f39c12]"></div>
        <div className="h-[3px] bg-[#fffff]"></div>
        <div className="h-[3px] bg-[#2e7d32]"></div>
      </div>

      {/* Navbar body */}
      <div className=" px-16 py-6">
        {/* Top section */}
        <div className="flex justify-between items-center">
          {/* Left section */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="w-14 h-14 rounded-full border-2 border-[#1b3b5a] flex items-center justify-center">
              <img src="./logo.png" alt="" />
            </div>

            {/* Name + Subtitle */}
            <div>
              <h1 className="text-[32px] font-serif font-bold text-[#1b3b5a] leading-none">
                Shailender Tiwari
              </h1>
              <p className="text-gray-600 text-[15px] mt-1">
                Public Policy & Leadership
              </p>
            </div>
          </div>

          {/* Icons */}
          <div className="flex gap-6 text-[20px] text-[#1b3b5a]">
            <img src="./linkedin.png" alt="linkedin"  className="cursor-pointer h-[20px] w-[20px]"/>
            <img src="./mail.png" alt="mail" className="cursor-pointer h-[20px] w-[20px]"/>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Navigation menu */}
        <nav className="flex flex-wrap gap-x-10 gap-y-4 text-[18px] text-[#1b3b5a] font-medium">
          <a className="hover:underline cursor-pointer">Home</a>
          <a className="hover:underline cursor-pointer">About</a>
          <a className="hover:underline cursor-pointer">Experience</a>
          <a className="hover:underline cursor-pointer">Achievements</a>
          <a className="hover:underline cursor-pointer">Leadership & Events</a>
          <a className="hover:underline cursor-pointer">Publications</a>
          <a className="hover:underline cursor-pointer">Education</a>

          {/* second line */}
          <a className="hover:underline cursor-pointer">Volunteering</a>
          <a className="hover:underline cursor-pointer">Contact</a>
        </nav>
      </div>
    </header>
  );
}
