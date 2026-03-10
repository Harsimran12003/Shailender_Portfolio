import { MapPin, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#001F3F] to-[#003366] text-white border-t-4 border-[#FF9933] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-10 py-20">
        {/* TOP ROW */}
        <div className="flex justify-between items-start gap-12">
          {/* LEFT CONTENT */}
          <div className="max-w-[650px]">
            <span className="bg-[#FF9933] text-white px-4 py-2 rounded-md text-md font-bold">
              Public Policy & HR Leadership
            </span>

            <h1 className="mt-12 text-[64px] leading-[70px] font-serif font-bold text-gray-200">
              Shailender Tiwari
            </h1>

            <h3 className="text-[22px] mt-4 text-gray-200 font-semibold">
              Secretary – Vajpayee Research Foundation
            </h3>

            <p className="mt-2 text-gray-300 text-[18px]">
              MBA (HR) Candidate | Public Policy | Human Resource Leadership
            </p>

            <div className="flex items-center gap-2 mt-3 text-gray-300">
              <MapPin size={18} />
              <span>Ludhiana, Punjab, India</span>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex-shrink-0">
            <img
              src="/profile.png"
              alt="profile"
              className="w-[390px] h-[260px] object-cover rounded-[24px]"
            />
          </div>
        </div>

        {/* SECOND ROW (FULL WIDTH TEXT) */}
        <div className="mt-8 max-w-full">
          <p className="text-gray-300 leading-7 text-[17px]">
            Results-driven MBA (HR) student with experience in human resource
            operations, public policy research, youth leadership initiatives,
            and organizational governance. Experienced in managing large teams,
            coordinating national programs, and contributing to public policy
            initiatives.
          </p>

          <div className="flex gap-5 mt-8">
            <button className="bg-[#FF9933] hover:bg-[#e68310] px-6 py-3 rounded-md font-semibold">
              View Experience
            </button>

            <button className="flex items-center gap-2 bg-gray-200 text-[#0b3557] px-6 py-3 rounded-md font-semibold hover:bg-gray-300">
              <Download size={18} />
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Background Watermark */}
      <div className="absolute right-20 bottom-[-100px] opacity-10">
        <div className="w-[350px] h-[350px] ">
          <img src="./backdrop.png" alt="" />
        </div>
      </div>
    </section>
  );
}
