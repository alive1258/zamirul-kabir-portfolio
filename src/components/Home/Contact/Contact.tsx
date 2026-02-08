// /* eslint-disable react/no-unescaped-entities */

// import { FaFacebookF, FaPinterestP, FaMapMarkerAlt } from "react-icons/fa";
// import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
// import { AiOutlineMail } from "react-icons/ai";

// import "../../Home/Services/Services.css";
// import SlideUp from "@/components/Shared/animations/SlideUp";
// import ContactForm from "./ContactForm";

// const Contact = () => {
//   const contactInfo = [
//     {
//       icon: <AiOutlineMail className="text-2xl" />,
//       title: "Email Address",
//       value: "zamirulkabir999@gmail.com",
//       color: "from-[#34a578] to-emerald-500",
//       link: "mailto:zamirulkabir999@gmail.com",
//     },
//     {
//       icon: <BsWhatsapp className="text-2xl" />,
//       title: "WhatsApp / Phone",
//       value: "+880 01611910296",
//       color: "from-green-500 to-emerald-600",
//       link: "https://wa.me/8801611910296",
//     },
//     {
//       icon: <FaMapMarkerAlt className="text-xl" />,
//       title: "Location",
//       value: "Dhaka, Bangladesh",
//       color: "from-cyan-500 to-blue-500",
//       link: "#",
//     },
//   ];

//   const socialLinks = [
//     {
//       icon: <FaFacebookF />,
//       label: "Facebook",
//       color: "bg-[#1877F2] hover:bg-[#1877F2]/90",
//       link: "https://www.facebook.com/profile.php?id=100060866764137",
//       delay: 0.1,
//     },
//     {
//       icon: <BsInstagram />,
//       label: "Instagram",
//       color:
//         "bg-gradient-to-r from-[#E1306C] to-[#F77737] hover:from-[#E1306C]/90 hover:to-[#F77737]/90",
//       link: "https://www.instagram.com/zamirul463/",
//       delay: 0.2,
//     },
//     {
//       icon: <BsLinkedin />,
//       label: "LinkedIn",
//       color: "bg-[#0A66C2] hover:bg-[#0A66C2]/90",
//       link: "https://www.linkedin.com/in/zamirul-kabir-575a41279/",
//       delay: 0.3,
//     },
//     {
//       icon: <FaPinterestP />,
//       label: "Pinterest",
//       color: "bg-[#E60023] hover:bg-[#E60023]/90",
//       link: "#",
//       delay: 0.4,
//     },
//   ];

//   return (
//     <div
//       id="contact"
//       className="md:py-32 py-16 overflow-hidden relative bg-gradient-to-b from-[#0C1222] via-[#131a30] to-[#0C1222]"
//     >
//       {/* Background effects */}
//       <div className="absolute top-20 left-10 w-96 h-96 bg-[#34a578]/5 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

//       {/* Grid pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

//       <div className="relative z-10 container">
//         {/* Header */}

//         {/* Title */}
//         <div className="relative text-center mb-16 md:mb-24">
//           {/* Animated background gradient */}
//           <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-r from-[#34a578]/10 via-transparent to-cyan-400/10 blur-3xl opacity-60 rounded-full"></div>

//           {/* Decorative pre-title elements */}
//           <div className="flex items-center justify-center gap-4 mb-8">
//             <div className="w-12 h-px bg-gradient-to-r md:space-x-0 from-transparent via-gray-500 to-transparent rounded-full"></div>
//             <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-full">
//               <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
//               <span className="text-sm font-medium text-gray-400 tracking-widest">
//                 GET IN TOUCH
//               </span>
//               <div
//                 className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
//                 style={{ animationDelay: "0.3s" }}
//               ></div>
//             </div>
//             <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full"></div>
//           </div>

//           {/* Main title with gradient effect */}
//           <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 relative">
//             <span className="relative inline-block">
//               <span className="text-white relative z-10">Let's</span>
//               {/* Glow effect for "About" */}
//               <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
//             </span>
//             <br />

//             <span
//               className="relative ml-4 inline-block animate-fade-up"
//               style={{ animationDelay: "0.3s" }}
//             >
//               <span className="relative z-10 bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
//                 Connect & Create
//               </span>
//               {/* Floating particles */}
//               <div className="absolute -top-3 -right-3 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
//               <div
//                 className="absolute -bottom-2 -left-2 w-2 h-2 bg-[#34a578] rounded-full animate-bounce"
//                 style={{ animationDelay: "0.2s" }}
//               ></div>
//             </span>
//           </h1>

//           {/* Animated separator */}
//           <div className="mt-6 flex items-center justify-center gap-6">
//             <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-full"></div>
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
//               <div
//                 className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
//                 style={{ animationDelay: "0.3s" }}
//               ></div>
//               <div
//                 className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"
//                 style={{ animationDelay: "0.6s" }}
//               ></div>
//             </div>
//             <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-full"></div>
//           </div>

//           {/* Subtitle */}
//           <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed px-4">
//             Have a project in mind? Let's discuss how we can bring your ideas to
//             life
//             <span className="inline-block mx-3 text-[#34a578] animate-bounce">
//               •
//             </span>
//             with exceptional web solutions.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Contact Info Card (keeping your current style) */}
//           <SlideUp delay={0.1}>
//             <div className="relative group">
//               {/* Glow effect */}
//               <div className="absolute -inset-4 bg-gradient-to-r from-[#34a578]/10 via-transparent to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

//               <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-[#34a578]/40 transition-all duration-500">
//                 {/* Corner decorations */}
//                 <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#34a578]/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//                 <h2 className="text-2xl font-bold text-white mb-6">
//                   Get In <span className="text-[#34a578]">Touch</span>
//                 </h2>

//                 <p className="text-gray-400 mb-8 leading-relaxed">
//                   I'm always open to discussing new projects, creative ideas, or
//                   opportunities to be part of your vision. Let's collaborate and
//                   create something amazing together.
//                 </p>

//                 {/* Contact Info */}
//                 <div className="space-y-6 mb-8">
//                   {contactInfo.map((info, index) => (
//                     <a
//                       key={index}
//                       href={info.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="group/info flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
//                     >
//                       <div
//                         className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color}/20 border border-white/10 flex items-center justify-center group-hover/info:scale-110 transition-transform duration-300`}
//                       >
//                         {info.icon}
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-400">{info.title}</p>
//                         <p className="text-white font-medium">{info.value}</p>
//                       </div>
//                     </a>
//                   ))}
//                 </div>

//                 {/* Social Links */}
//                 <div>
//                   <p className="text-gray-400 mb-4">Follow me on:</p>
//                   <div className="flex gap-3">
//                     {socialLinks.map((social, index) => (
//                       <SlideUp key={index} delay={social.delay}>
//                         <a
//                           href={social.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className={`${social.color} w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
//                           aria-label={social.label}
//                         >
//                           {social.icon}
//                         </a>
//                       </SlideUp>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Bottom accent */}
//                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full group-hover:w-32 transition-all duration-700"></div>
//               </div>
//             </div>
//           </SlideUp>

//           {/* Contact Form - Matching the same style */}
//           <div className="md:col-span-2">
//             <SlideUp delay={0.2}>
//               <div className="relative group">
//                 {/* Glow effect - same as contact card */}
//                 <div className="absolute -inset-4 bg-gradient-to-r from-[#34a578]/10 via-transparent to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

//                 {/* Main container - matching style */}
//                 <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-[#34a578]/40 transition-all duration-500">
//                   {/* Corner decorations - same style */}
//                   <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#34a578]/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//                   {/* Form header with same styling */}
//                   <div className="flex items-center gap-3 mb-8">
//                     <div className="w-3 h-10 bg-gradient-to-b from-[#34a578] to-cyan-400 rounded-full"></div>
//                     <h3 className="text-2xl font-bold text-white">
//                       Send a <span className="text-[#34a578]">Message</span>
//                     </h3>
//                   </div>

//                   {/* contact form  */}
//                   <ContactForm />

//                   {/* Form note with matching style */}
//                   <div className="mt-8 pt-6 border-t border-white/10">
//                     <div className="flex items-center justify-center gap-4">
//                       <div className="flex space-x-1">
//                         <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
//                         <div
//                           className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
//                           style={{ animationDelay: "0.2s" }}
//                         ></div>
//                         <div
//                           className="w-2 h-2 bg-[#45d19c] rounded-full animate-pulse"
//                           style={{ animationDelay: "0.4s" }}
//                         ></div>
//                       </div>
//                       <p className="text-sm text-gray-500">
//                         Response within 24 hours
//                       </p>
//                     </div>
//                   </div>

//                   {/* Bottom accent - same as contact card */}
//                   <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full group-hover:w-48 transition-all duration-700"></div>
//                 </div>
//               </div>
//             </SlideUp>
//           </div>
//         </div>
//         {/* Additional info */}
//         <div className="mt-16 text-center">
//           <div className="inline-flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-3xl mx-auto">
//             <div className="flex items-center gap-3">
//               <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
//               <span className="text-gray-400">Response Time:</span>
//               <span className="text-white font-medium">Within 24 hours</span>
//             </div>
//             <div className="hidden md:block w-0.5 h-6 bg-white/20"></div>
//             <div className="flex items-center gap-3">
//               <div
//                 className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
//                 style={{ animationDelay: "0.2s" }}
//               ></div>
//               <span className="text-gray-400">Availability:</span>
//               <span className="text-white font-medium">
//                 Open for new projects
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

/* eslint-disable react/no-unescaped-entities */

import { FaFacebookF, FaPinterestP, FaMapMarkerAlt } from "react-icons/fa";
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import "../../Home/Services/Services.css";
import SlideUp from "@/components/Shared/animations/SlideUp";
import ContactForm from "./ContactForm";

const Contact = () => {
  const contactInfo = [
    {
      icon: <AiOutlineMail className="text-2xl" />,
      title: "Email Address",
      value: "zamirulkabir999@gmail.com",
      color: "from-[#34a578] to-emerald-500",
      link: "mailto:zamirulkabir999@gmail.com",
    },
    {
      icon: <BsWhatsapp className="text-2xl" />,
      title: "WhatsApp / Phone",
      value: "+880 01611910296",
      color: "from-green-500 to-emerald-600",
      link: "https://wa.me/8801611910296",
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      color: "from-cyan-500 to-blue-500",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      label: "Facebook",
      color: "bg-[#1877F2] hover:bg-[#1877F2]/90",
      link: "https://www.facebook.com/profile.php?id=100060866764137",
      delay: 0.1,
    },
    {
      icon: <BsInstagram />,
      label: "Instagram",
      color:
        "bg-gradient-to-r from-[#E1306C] to-[#F77737] hover:from-[#E1306C]/90 hover:to-[#F77737]/90",
      link: "https://www.instagram.com/zamirul463/",
      delay: 0.2,
    },
    {
      icon: <BsLinkedin />,
      label: "LinkedIn",
      color: "bg-[#0A66C2] hover:bg-[#0A66C2]/90",
      link: "https://www.linkedin.com/in/zamirul-kabir-575a41279/",
      delay: 0.3,
    },
    {
      icon: <FaPinterestP />,
      label: "Pinterest",
      color: "bg-[#E60023] hover:bg-[#E60023]/90",
      link: "#",
      delay: 0.4,
    },
  ];

  return (
    <div
      id="contact"
      className="md:py-32 py-12 sm:py-16 overflow-hidden relative bg-gradient-to-b from-[#0C1222] via-[#131a30] to-[#0C1222]"
    >
      {/* Background effects - reduced size for mobile */}
      <div className="absolute top-10 left-4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#34a578]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      {/* Grid pattern - reduced size for mobile */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:60px_60px] opacity-30"></div>

      <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
        {/* Header */}

        {/* Title */}
        <div className="relative text-center mb-12 md:mb-24">
          {/* Animated background gradient - reduced size for mobile */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-[90vw] sm:w-[500px] md:w-[600px] h-[120px] sm:h-[160px] md:h-[200px] bg-gradient-to-r from-[#34a578]/10 via-transparent to-cyan-400/10 blur-3xl opacity-60 rounded-full"></div>

          {/* Decorative pre-title elements - mobile optimized */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-6 sm:w-8 md:w-12 h-px bg-gradient-to-r md:space-x-0 from-transparent via-gray-500 to-transparent rounded-full"></div>
            <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-full">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#34a578] rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider sm:tracking-widest">
                GET IN TOUCH
              </span>
              <div
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.3s" }}
              ></div>
            </div>
            <div className="w-6 sm:w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full"></div>
          </div>

          {/* Main title with gradient effect - mobile optimized */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 relative">
            <span className="relative inline-block">
              <span className="text-white relative z-10">Let's</span>
              {/* Glow effect for "About" */}
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
            </span>
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>

            <span
              className="relative sm:ml-4 inline-block animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <span className="relative z-10 bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                Connect & Create
              </span>
              {/* Floating particles - hidden on mobile */}
              <div className="hidden sm:block absolute -top-3 -right-3 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
              <div
                className="hidden sm:block absolute -bottom-2 -left-2 w-2 h-2 bg-[#34a578] rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </span>
          </h1>

          {/* Animated separator */}
          <div className="mt-4 sm:mt-6 flex items-center justify-center gap-3 sm:gap-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-full"></div>
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#34a578] rounded-full animate-pulse"></div>
              <div
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.3s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#34a578] rounded-full animate-pulse"
                style={{ animationDelay: "0.6s" }}
              ></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-full"></div>
          </div>

          {/* Subtitle - mobile optimized */}
          <p className="mt-4 sm:mt-6 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2 sm:px-4">
            Have a project in mind? Let's discuss how we can bring your ideas to
            life
            <span className="inline-block mx-2 sm:mx-3 text-[#34a578] animate-bounce">
              •
            </span>
            with exceptional web solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Info Card - full width on mobile */}
          <SlideUp delay={0.1}>
            <div className="relative group">
              {/* Glow effect - reduced inset for mobile */}
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-[#34a578]/10 via-transparent to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

              <div className="relative p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-[#34a578]/40 transition-all duration-500">
                {/* Corner decorations - smaller on mobile */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-l-2 border-[#34a578]/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-r-2 border-cyan-400/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Get In <span className="text-[#34a578]">Touch</span>
                </h2>

                <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Let's collaborate and
                  create something amazing together.
                </p>

                {/* Contact Info - mobile optimized */}
                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/info flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg text-white bg-gradient-to-br ${info.color}/20 border border-white/10 flex items-center justify-center group-hover/info:scale-110 transition-transform duration-300`}
                      >
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-gray-400">
                          {info.title}
                        </p>
                        <p className="text-white font-medium text-sm sm:text-base truncate">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
                    Follow me on:
                  </p>
                  <div className="flex gap-2 sm:gap-3 flex-wrap">
                    {socialLinks.map((social, index) => (
                      <SlideUp key={index} delay={social.delay}>
                        <a
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${social.color} w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                          aria-label={social.label}
                        >
                          {social.icon}
                        </a>
                      </SlideUp>
                    ))}
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full group-hover:w-24 sm:group-hover:w-32 transition-all duration-700"></div>
              </div>
            </div>
          </SlideUp>

          {/* Contact Form - full width on mobile */}
          <div className="md:col-span-2">
            <SlideUp delay={0.2}>
              <div className="relative group">
                {/* Glow effect - reduced inset for mobile */}
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-[#34a578]/10 via-transparent to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                {/* Main container - mobile optimized */}
                <div className="relative p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-[#34a578]/40 transition-all duration-500">
                  {/* Corner decorations - smaller on mobile */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-l-2 border-[#34a578]/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-r-2 border-cyan-400/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Form header with same styling - mobile optimized */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                    <div className="w-2 h-8 sm:h-10 bg-gradient-to-b from-[#34a578] to-cyan-400 rounded-full"></div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Send a <span className="text-[#34a578]">Message</span>
                    </h3>
                  </div>

                  {/* contact form  */}
                  <ContactForm />

                  {/* Form note with matching style - mobile optimized */}
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
                    <div className="flex items-center justify-center gap-3 sm:gap-4">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#34a578] rounded-full animate-pulse"></div>
                        <div
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#45d19c] rounded-full animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Response within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Bottom accent - smaller on mobile */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full group-hover:w-32 sm:group-hover:w-48 transition-all duration-700"></div>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>

        {/* Additional info - mobile optimized */}
        <div className="mt-12 sm:mt-16">
          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-[#34a578] rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm text-gray-400">
                  Response Time:
                </span>
                <span className="text-white font-medium text-sm sm:text-base">
                  Within 24 hours
                </span>
              </div>
              <div className="hidden sm:block w-0.5 h-6 bg-white/20"></div>
              <div className="block sm:hidden w-full h-px bg-white/20 my-1"></div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div
                  className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <span className="text-xs sm:text-sm text-gray-400">
                  Availability:
                </span>
                <span className="text-white font-medium text-sm sm:text-base">
                  Open for new projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
