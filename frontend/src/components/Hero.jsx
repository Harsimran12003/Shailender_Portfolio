import { MapPin, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-[#001F3F] to-[#003366] text-white overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 py-14 sm:py-16 lg:py-20">
        {/* TOP ROW */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-12">
          {/* LEFT CONTENT */}
          <div className="max-w-[650px] text-center lg:text-left">
            <span className="bg-[#FF9933] text-white px-4 py-2 rounded-md text-sm sm:text-md font-bold">
              Public Policy & HR Leadership
            </span>

            <h1 className="mt-8 sm:mt-10 text-[36px] sm:text-[48px] lg:text-[64px] leading-tight font-serif font-bold text-gray-200">
              Shailender Tiwari
            </h1>

            <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] mt-4 text-gray-200 font-semibold">
              Secretary – Vajpayee Research Foundation
            </h3>

            <p className="mt-2 text-gray-300 text-[15px] sm:text-[17px] lg:text-[18px]">
              MBA (HR) Candidate | Public Policy | Human Resource Leadership
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-2 mt-3 text-gray-300">
              <MapPin size={18} />
              <span>Ludhiana, Punjab, India</span>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex-shrink-0">
            <img
              src="/profile.png"
              alt="profile"
              className="w-[260px] sm:w-[320px] lg:w-[390px] h-auto object-cover rounded-[20px] lg:rounded-[24px]"
            />
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="mt-8 text-center lg:text-left">
          <p className="text-gray-300 leading-7 text-[15px] sm:text-[16px] lg:text-[17px] max-w-[900px] mx-auto lg:mx-0">
            Results-driven MBA (HR) student with experience in human resource
            operations, public policy research, youth leadership initiatives,
            and organizational governance. Experienced in managing large teams,
            coordinating national programs, and contributing to public policy
            initiatives.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-5 mt-8">
            <a href="#experience">
              <button className="bg-[#FF9933] hover:bg-[#e68310] px-6 py-3 rounded-md font-semibold cursor-pointer">
                View Experience
              </button>
            </a>

            <a href="/ShailenderTiwariCV.pdf" download>
              <button className="flex items-center justify-center gap-2 bg-gray-200 text-[#0b3557] px-6 py-3 rounded-md font-semibold hover:bg-gray-300 cursor-pointer">
                <Download size={18} />
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Background Watermark */}
      <div className="absolute right-[-40px] sm:right-10 lg:right-20 bottom-[-80px] sm:bottom-[-100px] opacity-10">
        <div className="w-[200px] sm:w-[280px] lg:w-[350px]">
          <img src="./backdrop.png" alt="background" />
        </div>
      </div>
    </section>
  );
}
