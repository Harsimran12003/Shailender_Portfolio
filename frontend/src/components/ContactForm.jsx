import { Send } from "lucide-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    )
    .then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.log(error);
        alert("Failed to send message");
      }
    );
  };

  return (
    <section className="bg-[#F9FAFB] py-16 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 sm:p-8">

          <h2 className="text-[24px] sm:text-[28px] font-serif font-bold text-[#0b3557] mb-8">
            Send a Message
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />

            </div>

            <input
              type="text"
              name="subject"
              placeholder="Enter subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <textarea
              rows="4"
              name="message"
              placeholder="Enter your message"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            ></textarea>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#FF9933] text-white py-3 rounded-lg"
            >
              <Send size={18} />
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}