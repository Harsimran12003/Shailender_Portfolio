import { Lightbulb, Globe } from "lucide-react";

export default function SkillsLanguages() {
  const skills = [
    "Public Speaking",
    "Leadership",
    "Negotiation",
    "Human Resource Management",
    "Policy Research",
    "Team Coordination",
  ];

  return (
    <section className=" py-20 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-[36px] font-serif font-bold text-[#0b3557]">
            Skills & Languages
          </h2>
          <div className="w-40 h-[4px] bg-[#FF9933] mt-3"></div>
        </div>

        {/* Core Competencies */}
        <div className="mb-10">

          <h3 className="flex items-center gap-2 text-[20px] font-semibold text-[#0b3557] mb-6">
            <Lightbulb className="text-[#FF9933]" size={20} />
            Core Competencies
          </h3>

          <div className="grid md:grid-cols-2 gap-4 bg-[#F9FAFB] border border-gray-200 rounded-xl p-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-lg py-3 text-center text-[#0b3557] font-medium hover:shadow-md transition"
              >
                {skill}
              </div>
            ))}
          </div>

        </div>

        {/* Professional Strengths */}
        <div className="bg-gradient-to-r from-[#001F3F] to-[#003366] text-white rounded-xl p-8 mb-10">

          <h3 className="text-[20px] font-semibold mb-4">
            Professional Strengths
          </h3>

          <ul className="space-y-2 text-gray-200">
            <li className="flex gap-2">
              <span className="text-[#FF9933]">•</span>
              Strategic planning and execution
            </li>
            <li className="flex gap-2">
              <span className="text-[#FF9933]">•</span>
              Stakeholder engagement and management
            </li>
            <li className="flex gap-2">
              <span className="text-[#FF9933]">•</span>
              Event management and large-scale coordination
            </li>
          </ul>

        </div>

        {/* Language Proficiency */}
        <div className="mb-12">

          <h3 className="flex items-center gap-2 text-[20px] font-semibold text-[#0b3557] mb-6">
            <Globe className="text-[#FF9933]" size={20} />
            Language Proficiency
          </h3>

          <div className="space-y-6">

            {/* Hindi */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 border-l-4 border-l-[#FF9933]">

              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-[#0b3557]">Hindi</h4>
                <span className="bg-[#0b3557] text-white text-xs px-3 py-1 rounded-md">
                  Native
                </span>
              </div>

              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-[#FF9933] rounded-full w-full"></div>
              </div>

            </div>

            {/* English */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 border-l-4 border-l-[#FF9933]">

              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-[#0b3557]">English</h4>
                <span className="bg-[#0b3557] text-white text-xs px-3 py-1 rounded-md">
                  Fluent
                </span>
              </div>

              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-[#FF9933] rounded-full w-[90%]"></div>
              </div>

            </div>

          </div>

        </div>

        {/* Communication Excellence */}
        <div className="bg-[#F9FAFB] border border-gray-200 rounded-xl p-6">

          <h3 className="text-[20px] font-semibold text-[#0b3557] mb-3">
            Communication Excellence
          </h3>

          <p className="text-gray-600 mb-4">
            Trilingual proficiency enabling effective communication across
            diverse stakeholders, government officials, and community members
            in regional and national contexts.
          </p>

          <div className="flex flex-wrap gap-2">

            <span className="bg-[#FF9933] text-white text-xs px-3 py-1 rounded-md">
              Professional Communication
            </span>

            <span className="bg-[#0b3557] text-white text-xs px-3 py-1 rounded-md">
              Public Speaking
            </span>

            <span className="bg-[#FF9933] text-white text-xs px-3 py-1 rounded-md">
              Cross-Cultural Dialogue
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}