import { FileText, Award } from "lucide-react";

export default function Publications() {
  return (
    <section className=" py-20 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-[36px] font-serif font-bold text-[#0b3557]">
            Publications
          </h2>

          <div className="w-40 h-[4px] bg-[#FF9933] mt-3"></div>

          <p className="text-gray-600 mt-4 max-w-[700px]">
            Published research and policy contributions on national security
            and self-reliance.
          </p>
        </div>

        {/* Featured Publication */}
        <div className="rounded-xl overflow-hidden shadow-md border border-[#FF9933] mb-10">

          {/* Top Orange Bar */}
          <div className="bg-[#FF9933] text-white px-6 py-3 flex items-center gap-2 text-sm font-semibold">
            <Award size={16}/>
            FEATURED PUBLICATION
          </div>

          {/* Content */}
          <div className="bg-gradient-to-r from-[#001F3F] to-[#003366] text-white p-8 flex gap-6 items-start">

            {/* Icon Box */}
            <div className="bg-[#FF9933] p-4 rounded-lg">
              <FileText size={26}/>
            </div>

            {/* Text */}
            <div>

              <h3 className="text-[24px] font-semibold leading-snug">
                "Shift Towards Self-Reliance (Aatmanirbharata) in Defence
                Production"
              </h3>

              {/* Tags */}
              <div className="flex gap-3 mt-4">
                <span className="bg-[#0b3557] px-3 py-1 rounded-md text-sm">
                  BJYM Magazine
                </span>

                <span className="bg-gray-200 text-[#0b3557] px-3 py-1 rounded-md text-sm font-medium">
                  June 2025 Edition
                </span>
              </div>

              <p className="mt-4 text-gray-200 leading-7 max-w-full">
                Published article exploring India's strategic shift towards
                self-reliance in defence manufacturing, analyzing policy
                frameworks, indigenous capabilities, and the vision for
                Aatmanirbhar Bharat in the defence sector.
              </p>

            </div>

          </div>

        </div>

        {/* Research Focus Areas */}
        <div className="bg-[#E5E7EB] rounded-xl border border-gray-200 p-6">

          <h3 className="text-[22px] font-semibold text-[#0b3557] mb-6">
            Research Focus Areas
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center font-medium text-[#0b3557] hover:shadow-md transition border-l-4 border-l-[#FF9933]">
              Defence Policy
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center font-medium text-[#0b3557] hover:shadow-md transition border-l-4 border-l-[#FF9933]">
              Aatmanirbhar Bharat
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center font-medium text-[#0b3557] hover:shadow-md transition border-l-4 border-l-[#FF9933]">
              Public Policy Research
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}