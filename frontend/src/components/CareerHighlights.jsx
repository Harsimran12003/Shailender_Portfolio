import { Briefcase, Medal, Globe, FileText } from "lucide-react";

const highlights = [
  {
    title: "Strategic Leadership",
    desc: "Secretary at Vajpayee Research Foundation overseeing governance and administrative compliance.",
    img: "/card1.png",
    badge: "Current Role",
    icon: <Briefcase size={18} />,
  },
  {
    title: "HR Excellence",
    desc: "Gold Medalist at ISPPR HR internship managing 40+ interns and onboarding 350+ researchers.",
    img: "/card2.png",
    badge: "Gold Medalist",
    icon: <Medal size={18} />,
  },
  {
    title: "National Impact",
    desc: "Core Volunteer at VBYLD 2026 coordinating operations for 4,000+ participants with MYAS and IAS officers.",
    img: "/card3.png",
    badge: "VBYLD 2026",
    icon: <Globe size={18} />,
  },
  {
    title: "Public Policy",
    desc: 'Published author on "Aatmanirbharata in Defence" in BJYM Magazine June 2025 Edition.',
    img: "/card4.jpg",
    badge: "Published Author",
    icon: <FileText size={18} />,
  },
];

export default function CareerHighlights() {
  return (
    <section className="bg-[#F9FAFB] py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="mb-10 sm:mb-12 text-center lg:text-left">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[38px] font-serif font-bold text-[#0b3557]">
            Career Highlights
          </h2>

          <div className="w-24 sm:w-28 lg:w-32 h-[4px] bg-[#FF9933] mt-3 mx-auto lg:mx-0"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">

          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative">

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[220px] sm:h-[250px] lg:h-[290px] object-cover"
                />

                {/* Badge */}
                <span className="absolute top-3 right-3 bg-[#FF9933] text-white text-xs sm:text-sm px-3 py-1 rounded-full font-medium">
                  {item.badge}
                </span>

                {/* Icon */}
                <div className="absolute bottom-[-16px] left-5 bg-white shadow-md p-2 sm:p-3 rounded-lg text-[#0b3557]">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 pt-7 sm:pt-8">

                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold text-[#0b3557] mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-[14px] sm:text-[15px] leading-6">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}