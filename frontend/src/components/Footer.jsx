import { Mail, Phone, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#001F3F] text-white">
      {/* Top Accent Lines */}
      <div className="w-full pt-8">
        <div className="h-[3px] bg-[#FF9933]"></div>
        <div className="h-[3px] bg-[#FFFFFF]"></div>
        <div className="h-[3px] bg-[#2e7d32]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Left */}
          <div>
            <h3 className="text-[22px] font-serif font-semibold">
              Shailender Tiwari
            </h3>

            <p className="text-gray-300 mt-4 text-sm leading-6">
              Secretary – Vajpayee Research Foundation
            </p>

            <p className="text-gray-300 text-sm">
              MBA (HR) Candidate | Public Policy Professional
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[20px] font-semibold mb-4">
              Contact Information
            </h3>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                shailendertiwari1211@gmail.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                +91 95926 50601
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-[20px] font-semibold mb-4">Connect</h3>

            <a
              href="https://www.linkedin.com/in/shailendertiwar1211"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#002B4F] px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition"
            >
              <Linkedin size={18} />
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 pt-2"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-300">
            © 2026 Shailender Tiwari – Professional Portfolio
          </p>

          <p className="text-sm text-gray-400 mt-2">
            Committed to excellence in public service, human resource
            leadership, and policy development.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 my-8"></div>

        {/* Credits */}
        <div className="text-center text-sm text-gray-400 space-y-1">
          <p>
            Website Designed by{" "}
            <a
              href="https://www.linkedin.com/in/prerna-sablok30/"
              target="_blank"
              className="hover:text-white transition"
            >
              Prerna Sablok
            </a>{" "}
            | Developed by{" "}
            <a
              href="https://www.linkedin.com/in/harsimranjitk12/"
              target="_blank"
              className="hover:text-white transition"
            >
              Harsimranjit Kaur
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
