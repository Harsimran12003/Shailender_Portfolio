export default function About() {
  return (
    <section className=" py-20 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-[40px] font-serif font-bold text-[#0b3557]">
            About
          </h2>
          <div className="w-24 h-[4px] bg-[#FF9933] mt-3"></div>
        </div>

        {/* Professional Focus Card */}
        <div className="bg-gradient-to-b from-[#001F3F] to-[#003366] text-white rounded-xl p-8 shadow-md">
          <h3 className="text-[22px] font-semibold mb-4">
            Professional Focus
          </h3>

          <p className="text-gray-200 text-[17px] leading-7">
            Looking to leverage experience in{" "}
            <span className="text-[#FF9933] font-semibold">
              HR management
            </span>
            ,{" "}
            <span className="text-[#FF9933] font-semibold">
              development initiatives
            </span>
            , and{" "}
            <span className="text-[#FF9933] font-semibold">
              public policy research
            </span>{" "}
            to support high-impact organizational goals and nation-building
            efforts.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm">
            <h3 className="text-[36px] font-bold text-[#FF9933]">5+</h3>
            <p className="text-gray-600 mt-2">
              Organizations Served
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm">
            <h3 className="text-[36px] font-bold text-[#0b3557]">10+</h3>
            <p className="text-gray-600 mt-2">
              Major Events Led
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}