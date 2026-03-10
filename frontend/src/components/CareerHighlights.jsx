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
    <section className="bg-[#F9FAFB] py-20 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-[38px] font-serif font-bold text-[#0b3557]">
            Career Highlights
          </h2>
          <div className="w-32 h-[4px] bg-[#FF9933] mt-3"></div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >

              {/* Image Section */}
              <div className="relative">

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[290px] object-cover"
                />

                {/* Badge */}
                <span className="absolute top-3 right-3 bg-[#FF9933] text-white text-md px-3 py-1 rounded-full font-medium">
                  {item.badge}
                </span>

                {/* Icon */}
                <div className="absolute bottom-[-18px] left-5 bg-white shadow-md p-3 rounded-lg text-[#0b3557]">
                  {item.icon}
                </div>

              </div>

              {/* Content */}
              <div className="p-6 pt-8">

                <h3 className="text-[22px] font-semibold text-[#0b3557] mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-6">
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