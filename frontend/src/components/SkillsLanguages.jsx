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
    <section className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="mb-8 sm:mb-10 text-center lg:text-left">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-serif font-bold text-[#0b3557]">
            Skills & Languages
          </h2>

          <div className="w-28 sm:w-32 lg:w-40 h-[4px] bg-[#FF9933] mt-3 mx-auto lg:mx-0"></div>
        </div>

        {/* Core Competencies */}
        <div className="mb-8 sm:mb-10">

          <h3 className="flex items-center justify-center lg:justify-start gap-2 text-[18px] sm:text-[20px] font-semibold text-[#0b3557] mb-5 sm:mb-6">
            <Lightbulb className="text-[#FF9933]" size={20} />
            Core Competencies
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-[#F9FAFB] border border-gray-200 rounded-xl p-5 sm:p-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-lg py-3 text-center text-[#0b3557] text-sm sm:text-base font-medium hover:shadow-md transition"
              >
                {skill}
              </div>
            ))}
          </div>

        </div>

        {/* Professional Strengths */}
        <div className="bg-gradient-to-r from-[#001F3F] to-[#003366] text-white rounded-xl p-5 sm:p-6 lg:p-8 mb-8 sm:mb-10">

          <h3 className="text-[18px] sm:text-[20px] font-semibold mb-4">
            Professional Strengths
          </h3>

          <ul className="space-y-2 text-gray-200 text-sm sm:text-base">
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
        <div className="mb-10 sm:mb-12">

          <h3 className="flex items-center justify-center lg:justify-start gap-2 text-[18px] sm:text-[20px] font-semibold text-[#0b3557] mb-5 sm:mb-6">
            <Globe className="text-[#FF9933]" size={20} />
            Language Proficiency
          </h3>

          <div className="space-y-5 sm:space-y-6">

            {/* Hindi */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 border-l-4 border-l-[#FF9933]">

              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-[#0b3557] text-sm sm:text-base">
                  Hindi
                </h4>

                <span className="bg-[#0b3557] text-white text-[10px] sm:text-xs px-3 py-1 rounded-md">
                  Native
                </span>
              </div>

              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-[#FF9933] rounded-full w-full"></div>
              </div>

            </div>

            {/* English */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 border-l-4 border-l-[#FF9933]">

              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-[#0b3557] text-sm sm:text-base">
                  English
                </h4>

                <span className="bg-[#0b3557] text-white text-[10px] sm:text-xs px-3 py-1 rounded-md">
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
        <div className="bg-[#F9FAFB] border border-gray-200 rounded-xl p-5 sm:p-6">

          <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#0b3557] mb-3">
            Communication Excellence
          </h3>

          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Trilingual proficiency enabling effective communication across
            diverse stakeholders, government officials, and community members
            in regional and national contexts.
          </p>

          <div className="flex flex-wrap gap-2">

            <span className="bg-[#FF9933] text-white text-[10px] sm:text-xs px-3 py-1 rounded-md">
              Professional Communication
            </span>

            <span className="bg-[#0b3557] text-white text-[10px] sm:text-xs px-3 py-1 rounded-md">
              Public Speaking
            </span>

            <span className="bg-[#FF9933] text-white text-[10px] sm:text-xs px-3 py-1 rounded-md">
              Cross-Cultural Dialogue
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}