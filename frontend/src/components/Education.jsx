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
    <section className="bg-[#F9FAFB] py-20 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-[36px] font-serif font-bold text-[#0b3557]">
            Education
          </h2>
          <div className="w-28 h-[4px] bg-[#FF9933] mt-3"></div>
        </div>

        <div className="space-y-6">

          {education.map((item, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex justify-between items-center ${
                item.highlight
                  ? "border-l-4 border-l-[#FF9933]"
                  : "border-l-4 border-l-[#0b3557]"
              }`}
            >

              {/* Left Content */}
              <div className="flex gap-4 items-start">

                {/* Icon */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full text-white ${
                    item.highlight ? "bg-[#FF9933]" : "bg-[#0b3557]"
                  }`}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div>

                  <h3 className="text-[20px] font-semibold text-[#0b3557]">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-1 text-sm">
                    {item.school}
                  </p>

                  {/* Progress Bar */}
                  {item.progress && (
                    <div className="mt-4 w-[200px] h-3 bg-gray-200 rounded-full">
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
                <span className="bg-[#0b3557] text-white text-sm px-4 py-1 rounded-md">
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