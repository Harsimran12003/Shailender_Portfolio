import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      title: "Email",
      value: "shailendertiwari1211@gmail.com",
      icon: <Mail size={20} />,
    },
    {
      title: "Phone",
      value: "+91 95926 50601",
      icon: <Phone size={20} />,
    },
    {
      title: "Location",
      value: "Ludhiana, Punjab, India",
      icon: <MapPin size={20} />,
    },
    {
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      icon: <Linkedin size={20} />,
    },
  ];

  return (
    <section id="contact" className="bg-[#F9FAFB]  px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-[32px] sm:text-[36px] font-serif font-bold text-[#0b3557]">
            Contact
          </h2>

          <div className="w-24 h-[4px] bg-[#FF9933] mt-3"></div>

          <p className="text-gray-600 mt-4 max-w-full text-sm sm:text-base">
            For professional inquiries, collaboration opportunities, or to
            discuss policy matters, please feel free to reach out.
          </p>
        </div>

        {/* Get in Touch */}
        <h3 className="text-[22px] font-semibold text-[#0b3557] mb-6">
          Get in Touch
        </h3>

        {/* Contact Cards */}
        <div className="space-y-4">

          {contacts.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition"
            >

              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center bg-[#0b3557] text-white rounded-full">
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <p className="text-gray-500 text-sm">{item.title}</p>
                <p className="text-[#0b3557] font-medium text-sm sm:text-base">
                  {item.value}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* Opportunity Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#001F3F] to-[#003366] text-white rounded-xl p-8 ">

          <h3 className="text-[20px] sm:text-[22px] font-semibold mb-3">
            Open to Opportunities
          </h3>

          <p className="text-gray-200 text-sm sm:text-base max-w-full mx-auto">
            Available for HR consultations, policy research collaborations,
            and youth leadership initiatives.
          </p>

        </div>

      </div>
    </section>
  );
}