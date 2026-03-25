"use client";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { LuSend } from "react-icons/lu";

const contactInfo = [
  {
    icon: <FaEnvelope className="w-5 h-5" />,
    title: "Email",
    value: "kendrickchandra128@gmail.com",
    link: "mailto:kendrickchandra128@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt className="w-5 h-5" />,
    title: "Location",
    value: "Dumai, Riau, Indonesia",
    link: "https://www.google.com/maps/search/?api=1&query=Dumai,Riau,Indonesia",
  },
];

const socialLinks = [
  {
    icon: <FaGithub className="w-5 h-5" />,
    label: "GitHub",
    href: "https://github.com/xkendrickz",
  },
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kendrickchandra/",
  },
];

const inputStyles =
  `w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 
  text-gray-200 placeholder-gray-500 text-sm outline-none
  focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50
  transition-colors duration-200`;

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY!);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        (event.target as HTMLFormElement).reset();
        toast.success("Message sent successfully!", {
          style: { background: "#1e293b", color: "#e2e8f0", border: "1px solid #4f46e5" },
        });
      } else {
        toast.error("Something went wrong. Please try again.", {
          style: { background: "#1e293b", color: "#e2e8f0", border: "1px solid #ef4444" },
        });
      }
    } catch {
      toast.error("Network error. Please try again.", {
        style: { background: "#1e293b", color: "#e2e8f0", border: "1px solid #ef4444" },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-28">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

        {/* Left side */}
        <div data-aos="fade-right">
          <h2 className="py-3 text-3xl md:text-4xl font-bold tracking-wide text-transparent
            bg-clip-text bg-gradient-to-r from-indigo-400 to-gray-300">
            Get In Touch
          </h2>
          <p className="text-gray-400 mb-8 text-sm lg:text-base leading-relaxed">
            I&apos;m currently open to full-time opportunities and internships.
            Whether you have a project in mind or just want to connect, feel free to reach out.
          </p>

          {/* Contact info cards */}
          <div className="space-y-3 mb-8">
            {contactInfo.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 p-4 rounded-2xl border border-slate-800
                  bg-slate-900 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10
                  transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20
                  grid place-items-center text-indigo-400 group-hover:bg-indigo-600/20 transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">{item.title}</p>
                  <p className="text-sm text-gray-200 group-hover:text-indigo-400 transition-colors duration-300">
                    {item.value}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-xl border border-slate-800 bg-slate-900
                  grid place-items-center text-gray-400 hover:text-white
                  hover:border-indigo-500/50 transition-all duration-200"
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Form */}
        <div data-aos="fade-left" data-aos-delay="150">
          <form
            onSubmit={onSubmit}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className={inputStyles}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className={inputStyles}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className={inputStyles}
              required
            />
            <textarea
              name="message"
              placeholder="Your message..."
              required
              className={`${inputStyles} resize-none`}
              rows={5}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 
                disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl 
                transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <LuSend size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}