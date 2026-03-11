import { Mic, Users, Calendar } from "lucide-react";

export default function LeadershipEvents() {
  const events = [
    {
      img: "/event1.png",
      role: "Head Organizer",
      title: "British Parliamentary Debate",
      desc: "Led organization of prestigious debate tournament with comprehensive management of logistics, coordination, judging panel, and event execution.",
      stats: "65 Teams, 250+ Participants",
      location: "",
      icon: <Mic size={18} />,
    },
    {
      img: "/event2.png",
      role: "Core Volunteer",
      title: "VBYLD 2026",
      desc: "Coordinated operations at Bharat Mandapam for the Viksit Bharat Young Leaders Dialogue working directly with MYAS officials and IAS trainee officers.",
      stats: "4,000+ Participants",
      location: "Bharat Mandapam, New Delhi",
      icon: <Users size={18} />,
    },
    {
      img: "/event3.jpg",
      role: "Organizing Team Member",
      title: "Yuva Connect 2025",
      desc: "Part of organizing committee for major youth engagement event facilitating networking and knowledge-sharing among students and professionals.",
      stats: "",
      location: "NIT Jalandhar",
      icon: <Calendar size={18} />,
    },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="mb-10 sm:mb-12 text-center lg:text-left">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-serif font-bold text-[#0b3557]">
            Leadership & Events
          </h2>

          <div className="w-40 sm:w-52 lg:w-64 h-[4px] bg-[#FF9933] mt-3 mx-auto lg:mx-0"></div>

          <p className="text-gray-600 mt-3 max-w-[700px] mx-auto lg:mx-0 text-sm sm:text-base">
            Demonstrated leadership through organizing large-scale events,
            managing teams, and coordinating with government officials and
            stakeholders.
          </p>
        </div>

        {/* Event Cards */}
        <div className="space-y-8 sm:space-y-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px] object-cover"
                />

                {/* Floating Icon */}
                <div className="absolute top-4 left-4 bg-white shadow-md p-2 sm:p-3 rounded-full text-[#FF9933]">
                  {event.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">

                {/* Role Badge */}
                <span className="bg-[#FF9933] text-white text-[11px] sm:text-xs px-3 py-1 rounded-full font-medium">
                  {event.role}
                </span>

                <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#0b3557] mt-3">
                  {event.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-6 text-sm sm:text-base">
                  {event.desc}
                </p>

                {/* Stats */}
                {event.stats && (
                  <div className="mt-4 flex items-center gap-2 text-sm text-[#0b3557] font-medium">
                    <span className="text-[#FF9933]">•</span>
                    {event.stats}
                  </div>
                )}

                {/* Location */}
                {event.location && (
                  <div className="text-sm text-gray-500 mt-1">
                    {event.location}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

        {/* Additional Leadership Roles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 sm:mt-12">

          <div className="bg-[#F9FAFB] border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#0b3557]">
              Class Representative – MBA
            </h3>

            <p className="text-gray-600 mt-3 text-sm leading-6">
              Elected representative serving as liaison between students and
              faculty
            </p>
          </div>

          <div className="bg-[#F9FAFB] border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#0b3557]">
              Student Head Organizer – Vyapaar 3.0
            </h3>

            <p className="text-gray-600 mt-3 text-sm leading-6">
              Led business and entrepreneurship conclave with comprehensive
              event management
            </p>
          </div>

          <div className="bg-[#F9FAFB] border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#0b3557]">
              Sponsorship Head – VIPANAN 2.0
            </h3>

            <p className="text-gray-600 mt-3 text-sm leading-6">
              Secured sponsorships and managed corporate partnerships for
              marketing summit
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}