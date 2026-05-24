"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const contactInfo = {
    phone: "+91 9398217889",
    email: "sai.bhommidi@gmail.com",
    location: "Hyderabad, India"
  };

  const handleDownload = () => {
    // Points to the resume.pdf you successfully placed in the public folder
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 bg-[#030014] text-center">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="z-10 flex flex-col items-center gap-4">
        <h2 className="text-purple-400 font-mono tracking-widest text-sm font-bold">
          {contactInfo.location} | {contactInfo.phone}
        </h2>

        <h1 className="text-6xl md:text-8xl font-extrabold text-white">
          I'M <span className="text-purple-500 underline decoration-cyan-500/30">
            Sai Bhommidi
          </span>
        </h1>

        <div className="text-2xl md:text-4xl font-bold text-slate-200 min-h-[60px]">
          <Typewriter
            options={{
              strings: [
                "Senior SRE Engineer",
                "Cloud Architect",
                "DevOps Specialist"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mt-4">
          Engineering high-availability systems with <span className="text-white font-bold">4.5+ years</span> of expertise. 
          Specializing in AWS, Kubernetes, and automated disaster recovery.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <button 
            onClick={handleDownload}
            className="px-8 py-4 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-all shadow-lg active:scale-95"
          >
            Download Resume
          </button>
          
          {/* Improved Email Link with Subject Line */}
          <a 
            href={`mailto:${contactInfo.email}?subject=Inquiry%20regarding%20Senior%20SRE%20Opportunities`}
            className="px-8 py-4 border border-slate-700 text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;