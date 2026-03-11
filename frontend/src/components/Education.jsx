import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  const education = [
    {
      title: "MBA (Human Resources)",
      school: "Punjab College of Technical Education",
      year: "2024-2026",
      progress: 100,
      highlight: true,
      icon: <GraduationCap size={20} />,
    },
    {
      title: "BBA (Human Resources)",
      school: "Punjab College of Technical Education",
      year: "2021-2024",
      icon: <GraduationCap size={20} />,
    },
    {
      title: "Class 12",
      school: "Tagore Public School (CBSE)",
      icon: <Award size={20} />,
    },
    {
      title: "Class 10",
      school: "Tagore Public School (CBSE)",
      icon: <Award size={20} />,
    },
  ];

  return (
    <section id="education" className="bg-[#F9FAFB] py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="mb-10 sm:mb-12 text-center lg:text-left">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-serif font-bold text-[#0b3557]">
            Education
          </h2>

          <div className="w-20 sm:w-24 lg:w-28 h-[4px] bg-[#FF9933] mt-3 mx-auto lg:mx-0"></div>
        </div>

        <div className="space-y-5 sm:space-y-6">

          {education.map((item, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 ${
                item.highlight
                  ? "border-l-4 border-l-[#FF9933]"
                  : "border-l-4 border-l-[#0b3557]"
              }`}
            >
              {/* Left Content */}
              <div className="flex gap-3 sm:gap-4 items-start">

                {/* Icon */}
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-white ${
                    item.highlight ? "bg-[#FF9933]" : "bg-[#0b3557]"
                  }`}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div>

                  <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#0b3557]">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-1 text-xs sm:text-sm">
                    {item.school}
                  </p>

                  {/* Progress Bar */}
                  {item.progress && (
                    <div className="mt-3 w-full sm:w-[220px] h-3 bg-gray-200 rounded-full">
                      <div
                        className="h-3 bg-[#FF9933] rounded-full"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  )}

                </div>
              </div>

              {/* Year */}
              {item.year && (
                <span className="self-start sm:self-auto bg-[#0b3557] text-white text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-md">
                  {item.year}
                </span>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}