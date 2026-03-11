import { Award, Users, Trophy, Handshake } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Achievements() {
  const images = [
    "/slider1.jpeg",
    "/slider2.jpeg",
    "/slider3.jpeg",
    "/slider4.jpeg",
    "/slider5.jpeg",
    "/slider6.jpeg",
    "/slider7.jpeg",
    "/slider8.jpeg",
    "/slider9.jpeg",
  ];

  return (
    <section className="bg-[#F9FAFB] py-10 sm:py-10 lg:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="mb-8 sm:mb-10 text-center lg:text-left">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-serif font-bold text-[#0b3557]">
            Achievements & Recognition
          </h2>

          <div className="w-40 sm:w-52 lg:w-64 h-[4px] bg-[#FF9933] mt-3 mx-auto lg:mx-0"></div>
        </div>

        {/* Image Slider */}
        <div className="relative bg-white rounded-xl border border-gray-200 shadow-sm mb-8 sm:mb-10 overflow-hidden">

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt="achievement"
                  className="w-full h-[240px] sm:h-[350px] md:h-[420px] lg:h-[510px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        {/* Recognition Stats */}
        <div className="bg-gradient-to-b from-[#001F3F] to-[#003366] text-white rounded-xl py-8 sm:py-10 px-6 sm:px-8">

          <h3 className="text-center text-[18px] sm:text-[20px] lg:text-[22px] font-semibold mb-6 sm:mb-8">
            Recognition & Impact
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 text-center">

            {/* Stat 1 */}
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto flex items-center justify-center bg-[#FF9933] rounded-full mb-3">
                <Award size={20} />
              </div>

              <h4 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold">
                4+
              </h4>

              <p className="text-xs sm:text-sm text-gray-300">
                Major Awards
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto flex items-center justify-center bg-white text-[#0b3557] rounded-full mb-3">
                <Users size={20} />
              </div>

              <h4 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold">
                4000+
              </h4>

              <p className="text-xs sm:text-sm text-gray-300">
                Event Participants
              </p>
            </div>

            {/* Stat 3 */}
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto flex items-center justify-center bg-[#FF9933] rounded-full mb-3">
                <Trophy size={20} />
              </div>

              <h4 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold">
                10+
              </h4>

              <p className="text-xs sm:text-sm text-gray-300">
                Events Organized
              </p>
            </div>

            {/* Stat 4 */}
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto flex items-center justify-center bg-white text-[#0b3557] rounded-full mb-3">
                <Handshake size={20} />
              </div>

              <h4 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold">
                350+
              </h4>

              <p className="text-xs sm:text-sm text-gray-300">
                Researchers Onboarded
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}