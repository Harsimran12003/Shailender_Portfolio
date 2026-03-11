import { FileText, Award } from "lucide-react";

export default function Publications() {
  return (
    <section
      id="publications"
      className="py-10 sm:py-10 lg:py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="mb-8 sm:mb-10 text-center lg:text-left">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-serif font-bold text-[#0b3557]">
            Publications
          </h2>

          <div className="w-32 sm:w-36 lg:w-40 h-[4px] bg-[#FF9933] mt-3 mx-auto lg:mx-0"></div>

          <p className="text-gray-600 mt-4 max-w-[700px] mx-auto lg:mx-0 text-sm sm:text-base">
            Published research and policy contributions on national security and
            self-reliance.
          </p>
        </div>

        {/* Featured Publication */}
        <div className="rounded-xl overflow-hidden shadow-md border border-[#FF9933] mb-8 sm:mb-10">
          {/* Top Orange Bar */}
          <div className="bg-[#FF9933] text-white px-4 sm:px-6 py-3 flex items-center gap-2 text-xs sm:text-sm font-semibold">
            <Award size={16} />
            FEATURED PUBLICATION
          </div>

          {/* Content */}
          <div className="bg-gradient-to-r from-[#001F3F] to-[#003366] text-white p-5 sm:p-6 lg:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
            {/* Icon */}
            <div className="bg-[#FF9933] p-3 sm:p-4 rounded-lg">
              <FileText size={22} />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold leading-snug flex items-start gap-2">
                <a
                  href="https://library.bjp.org/jspui/bitstream/123456789/3219/3/BJYM%20Magazine_June_2025_option.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF9933] transition"
                >
                  "Shift Towards Self-Reliance (Aatmanirbharata) in Defence
                  Production"
                </a>
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
                <span className="bg-[#0b3557] px-3 py-1 rounded-md text-xs sm:text-sm">
                  BJYM Magazine
                </span>

                <span className="bg-gray-200 text-[#0b3557] px-3 py-1 rounded-md text-xs sm:text-sm font-medium">
                  June 2025 Edition
                </span>
              </div>

              <p className="mt-4 text-gray-200 leading-6 sm:leading-7 text-sm sm:text-base">
                Published article exploring India's strategic shift towards
                self-reliance in defence manufacturing, analyzing policy
                frameworks, indigenous capabilities, and the vision for
                Aatmanirbhar Bharat in the defence sector.
              </p>
            </div>
          </div>
        </div>

        {/* Research Focus Areas */}
        <div className="bg-[#E5E7EB] rounded-xl border border-gray-200 p-5 sm:p-6">
          <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold text-[#0b3557] mb-5 sm:mb-6 text-center lg:text-left">
            Research Focus Areas
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center font-medium text-[#0b3557] hover:shadow-md transition border-l-4 border-l-[#FF9933] text-sm sm:text-base">
              Defence Policy
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center font-medium text-[#0b3557] hover:shadow-md transition border-l-4 border-l-[#FF9933] text-sm sm:text-base">
              Aatmanirbhar Bharat
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center font-medium text-[#0b3557] hover:shadow-md transition border-l-4 border-l-[#FF9933] text-sm sm:text-base">
              Public Policy Research
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
