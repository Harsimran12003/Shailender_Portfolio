import { Flag, HandHeart, Heart, Users } from "lucide-react";

export default function CommunityService() {
  const services = [
    {
      title: "Ministry of Youth Affairs & Sports",
      role: "Volunteer",
      desc: "Actively contributed to national youth development programs and initiatives under MYAS",
      icon: <Flag size={20} />,
    },
    {
      title: "National Service Scheme (NSS)",
      role: "Volunteer",
      desc: "Participated in community service activities focused on social welfare and rural development",
      icon: <HandHeart size={20} />,
    },
    {
      title: "UNICEF India",
      role: "Volunteer",
      desc: "Supported child welfare and development programs promoting education and health",
      icon: <Heart size={20} />,
    },
    {
      title: "Bharat Youth Federation",
      role: "Founder Member",
      desc: "Co-founded youth organization dedicated to empowering young leaders and fostering civic engagement",
      icon: <Users size={20} />,
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-20 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-[36px] font-serif font-bold text-[#0b3557]">
            Community Service & Volunteering
          </h2>

          <div className="w-64 h-[4px] bg-[#FF9933] mt-3"></div>

          <p className="text-gray-600 mt-4 max-w-full">
            Committed to social impact through active participation in
            community service, youth development, and public welfare initiatives.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex gap-4 hover:shadow-md transition"
            >

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-[#FF9933] text-white rounded-full">
                {item.icon}
              </div>

              {/* Content */}
              <div>

                <h3 className="text-[20px] font-semibold text-[#0b3557]">
                  {item.title}
                </h3>

                <span className="inline-block bg-[#0b3557] text-white text-xs px-3 py-1 rounded-md mt-2">
                  {item.role}
                </span>

                <p className="text-gray-600 mt-3 text-sm leading-6">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Social Impact Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#001F3F] to-[#003366] text-white rounded-xl py-10 px-8 text-center">

          <h3 className="text-[22px] font-semibold mb-3">
            Commitment to Social Impact
          </h3>

          <p className="text-gray-200 max-w-[750px] mx-auto">
            Dedicated to creating positive change through volunteer work,
            youth empowerment, and community development initiatives aligned
            with national development goals.
          </p>

        </div>

      </div>
    </section>
  );
}