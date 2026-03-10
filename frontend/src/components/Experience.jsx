export default function Experience() {
  const experiences = [
    {
      icon: "VRF",
      role: "Secretary",
      org: "Vajpayee Research Foundation",
      date: "Feb 2026 – Present",
      points: [
        "Oversee governance and administrative compliance across organizational operations",
        "Lead strategic initiatives and coordinate with senior leadership on policy matters",
        "Manage stakeholder relationships and ensure alignment with foundation objectives",
      ],
    },
    {
      icon: "A",
      role: "Head of Human Resources",
      org: "Agrah",
      date: "Sep 2025 – Present",
      points: [
        "Lead end-to-end HR operations including recruitment, onboarding, and employee relations",
        "Develop and implement HR policies to enhance organizational efficiency",
        "Foster inclusive workplace culture and drive talent development initiatives",
      ],
    },
    {
      icon: "III",
      role: "HR Hiring Head Intern",
      org: "ISPPR (Indian Institute of Strategic and Policy Planning Research)",
      date: "Jun 2025 – Jan 2026",
      points: [
        "Managed recruitment operations for 40+ interns and successfully onboarded 350+ researchers",
        "Received Gold Medal for outstanding performance in HR management and coordination",
        "Streamlined hiring processes and improved candidate experience through structured workflows",
      ],
    },
    {
      icon: "TO",
      role: "Marketing Intern",
      org: "The Times of India",
      date: "Jun 2025 – Oct 2025",
      points: [
        "Supported marketing campaigns and promotional initiatives for digital platforms",
        "Conducted market research and analysis to identify growth opportunities",
        "Collaborated with cross-functional teams to execute strategic marketing projects",
      ],
    },
    {
      icon: "MoC",
      role: "Research Intern",
      org: "Ministry of Culture, Government of India",
      date: "Apr 2025 – May 2025",
      points: [
        "Conducted policy research on cultural heritage preservation and promotion",
        "Assisted in preparation of policy briefs and research reports for ministry officials",
        "Analyzed data and trends related to cultural programs and initiatives",
      ],
    },
    {
      icon: "LP",
      role: "HR Assistant Intern",
      org: "Lifestyle International Pvt. Ltd.",
      date: "Jul 2023 – Aug 2023",
      points: [
        "Supported HR team in recruitment coordination and employee onboarding processes",
        "Maintained employee records and assisted in HR documentation",
        "Coordinated with various departments for HR-related activities and communications",
      ],
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-[36px] font-serif font-bold text-[#0b3557]">
            Professional Experience
          </h2>
          <div className="w-40 h-[4px] bg-[#FF9933] mt-3"></div>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-[#FF9933]"></div>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-6">
                {/* Timeline Dot */}
                <div className="relative">
                  <div className="w-4 h-4 bg-[#FF9933] rounded-full border-3 border-white shadow mt-6"></div>
                </div>

                {/* Card */}
                <div className="bg-white shadow-sm rounded-lg p-6 w-full border border-gray-200 border-l-[4px] border-l-[#FF9933]">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      {/* Icon */}
                      <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#001F3F] to-[#003366] text-white text-sm rounded-md font-semibold">
                        {exp.icon}
                      </div>

                      <div>
                        <h3 className="text-[18px] font-semibold text-[#0b3557]">
                          {exp.role}
                        </h3>

                        <p className="text-gray-600 text-sm">{exp.org}</p>
                      </div>
                    </div>

                    {/* Date */}
                    <span className="bg-gradient-to-b from-[#001F3F] to-[#003366] text-white text-xs px-3 py-1 rounded-md">
                      {exp.date}
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[#FF9933]">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
