"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FileText, PlayCircle } from "lucide-react";
type Certification = {
  id: number;
  title: string;
  issuer: string;
  issuerLogo: string;
  issuedDate: string;
  expiryDate?: string;
  credentialId?: string;
  skills: string[];
  description?: string;
  category: string;
  isExpired?: boolean;
  certificateUrl?: string;
  hasVideo?: boolean;
};

const certifications: Certification[] = [
  {
    id: 1,
    title: "Brand Strategy & Planning",
    issuer: "Keeron",
    issuerLogo: "Keeron",
    issuedDate: "Sep 2025",
    expiryDate: "Sep 2025",
    credentialId: "1758454927525",
    skills: [
      "Client communication and relationship building",
      "Important business connections",
    ],
    description:
      "From understanding the fundamentals of branding and studying case studies like bKash, Airbnb, Durex, Apple, and Samsung, to exploring brand identity, audience connection, IMC, and the future of AI in marketing—this journey has been truly eye-opening. I've learned how powerful branding goes beyond logos and visuals—it's about purpose, storytelling, and building meaningful connections. Looking forward to applying these insights in real-world projects!",
    category: "Business & Marketing",
    isExpired: true,
    certificateUrl: "https://keeron.com/certificate/1758454927525",
    hasVideo: true,
  },
  {
    id: 2,
    title: "Net Zero 101: What, Why and How",
    issuer: "UN CC:Learn",
    issuerLogo: "UN",
    issuedDate: "Jan 2025",
    skills: ["Sustainability", "Climate Action", "Environmental Science"],
    category: "Sustainability",
    certificateUrl:
      "https://drive.google.com/file/d/19OGKiFqDM4wwA_XyNxz7MJokQdY-2QLg/view",
  },
  {
    id: 3,
    title: "Mastering International Climate Negotiations: All You Need to Know",
    issuer: "UN CC:Learn",
    issuerLogo: "UN",
    issuedDate: "Dec 2024",
    skills: ["Climate Policy", "International Relations", "Negotiation Skills"],
    category: "Sustainability",
    certificateUrl:
      "https://drive.google.com/file/d/1O3ekJ_8OXrgzN5HPcfVuxU9X0AMQFkqE/view",
  },
  {
    id: 4,
    title: "English for Everyday",
    issuer: "10 Minute School",
    issuerLogo: "10MS",
    issuedDate: "Oct 2024",
    credentialId: "671dc9df4d425",
    skills: [
      "English Spoken",
      "Interview Communication",
      "Ask & Answer Effectively",
      "Interview Strategies",
    ],
    category: "Language & Communication",
    certificateUrl:
      "https://lms10.s3.ap-southeast-1.amazonaws.com/skillup/certificates/671dc9df4d425.pdf",
    hasVideo: true,
  },
  {
    id: 5,
    title: "Next Level Web Development",
    issuer: "Programming Hero",
    issuerLogo: "PH",
    issuedDate: "Sep 2024",
    credentialId: "PHlevel2-batch2-mernL2B2-10881171",
    skills: [
      "TypeScript",
      "Redux.js",
      "React.js",
      "Next.js",
      "MongoDB",
      "Mongoose",
      "Express.js",
      "Docker",
      "Node.js",
    ],
    description: "Full-stack MERN development with modern tools",
    category: "Web Development",
    certificateUrl:
      "https://web.programming-hero.com/verification?validationNumber=PHlevel2-batch2-mernL2B2-10881171",
    hasVideo: true,
  },
  {
    id: 6,
    title: "Presentation & Public Speaking",
    issuer: "Bohubrihi",
    issuerLogo: "Bohubrihi",
    issuedDate: "Dec 2023",
    skills: ["Public Speaking", "Presentation Skills"],
    category: "Communication",
    certificateUrl:
      "https://res.cloudinary.com/bohubrihi/image/upload/v1703519832/production/6589a654ce73e0a68f02ebcc.pdf",
  },
  {
    id: 7,
    title: "Art of Job Searching & Applications",
    issuer: "Bohubrihi",
    issuerLogo: "Bohubrihi",
    issuedDate: "Dec 2023",
    credentialId: "658994b3ce730a68f02ebc9",
    skills: ["Job Search", "Applications"],
    category: "Career Development",
    certificateUrl:
      "https://res.cloudinary.com/bohubrihi/image/upload/v1703515318/production/658994b3ce73e0a68f02ebc9.pdf",
  },
  {
    id: 8,
    title: "A Career Strategist's Guide to Getting a Job",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["Job Search Strategies"],
    category: "Career Development",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/5bafd52465d5ae3c189a5e511d43f108263e6c260119dffa0881dc88530c1de0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 9,
    title: "Getting Started as a Customer Support Specialist",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["Customer Support"],
    category: "Career Development",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/85d79164bb887e27d7ba821ec21581db01626d4cf430931a95f9fd7d30af6870?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 10,
    title: "Writing Email",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["Professional Communication"],
    category: "Communication",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/be70e07a927e73cbce5be7be8db493ec6b120099237e0a25868d57395aa3d305?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 11,
    title: "Writing a Cover Letter",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["Professional Writing"],
    category: "Career Development",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/01fcbbacbf2715f7ee2b4550df38924de17037a5d8dd6b24fabfd3aade1afb71?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 12,
    title: "Introduction to Social Media Strategy",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["Social Media Strategy"],
    category: "Marketing",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/70839d2561b1a91a25ac3fd021c8963de3b0dd0a92716cbe01158188f35f5217?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 13,
    title: "Social Media Monitoring: Strategies and Skills",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["Social Media Marketing"],
    category: "Marketing",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/479292383bc12cac0470ad3f138617b77fc0ee2dd0f3cc63aa79fe3c8cd9b8f7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 14,
    title: "Learning Python",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    credentialId:
      "0416e8e759c8ab0c88978e3b5b090979622c97852cf352ba2598d02dbfa7261",
    skills: ["Python Programming"],
    category: "Programming",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/10416e8e759c8ab0c88978e3b5b090979622c97852cf352ba2598d02dbfa7261?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 15,
    title: "Writing a Tech Resume",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["Resume Writing"],
    category: "Career Development",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/eece84ff7492e644b848cc3acafb9441c97e5edb48f5fe6075918e7a6267ccbe?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 16,
    title: "Master In-Demand Professional Soft Skills",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["Soft Skills"],
    category: "Professional Development",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/4cb0e5daa4ddb663b926a2251027067a655bd03c8be4ebbd1349a678fa3d1373?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 17,
    title: "Rock Your LinkedIn Profile",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["LinkedIn"],
    category: "Career Development",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/e5c0fc193c610c341325883a35305dca81ef0c6f7bc21a00e243f46f4bdd2a1f?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 18,
    title: "Managing Teams",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["Team Management"],
    category: "Leadership",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/535d1ec880a4c3be348773ddc2ed5b407f8d0b587343c3f3d307b9aa864cfcab?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 19,
    title: "Critical Thinking for Better Judgment and Decision-Making",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["Critical Thinking"],
    category: "Professional Development",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/8bdb53dea456e29f560abe229faca61f588727df468b9b0f113abd92b4a22656?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 20,
    title: "Project Management Skills for Leaders",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["Project Management"],
    category: "Leadership",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/c8ff27757a6f15505050a1360885f5abcfd9a18857aaf7523384c9d563375131?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 21,
    title: "Communication Skills for Modern Management",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["Communication", "Team Management"],
    category: "Leadership",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/f87ee904aad4fa542f59b65d38922fa518254e29f6205ccee4c9493a1cfe172f?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 22,
    title: "Effective Listening",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["Active Listening"],
    category: "Communication",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/aa9fbf2b6f9f50772b96e49c9057cf77654e59d57bdda9c4e74781919ff870f0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 23,
    title: "Building Resilience as a Leader",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["Resiliency", "Team Leadership"],
    category: "Leadership",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/f0c5ec36b6621faffc3ceb31fed47b5f0bc43e27121e4fb5d54748128633cad8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 24,
    title: "Leadership Foundations",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["Leadership"],
    category: "Leadership",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/a65204254f11069e49a49e372e194e67972a1cebc274b7b17d3a614476ead434?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 25,
    title: "Developing Your Emotional Intelligence",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["Emotional Intelligence"],
    category: "Professional Development",
    certificateUrl:
      "https://drive.google.com/file/d/1TDAxEovg74cIpqj6WaFAazeP0OsUNyp9/view",
  },
  {
    id: 26,
    title: "Optimize Your Resume for Applicant Tracking Systems",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["Job Search Strategies"],
    category: "Career Development",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/1cc5ea1aa948226ad24e660faf2f8fa5858925d5aa6346a2b448e51200bfd795?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 27,
    title: "Teamwork Foundations",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["Teamwork"],
    category: "Professional Development",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/5e6f39d3931fec23ac13d4b37d17e9782f66d2e60a4d0af180a7c66c4da7c6c7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 28,
    title: "Presentation & Public Speaking",
    issuer: "10 Minute School",
    issuerLogo: "10MS",
    issuedDate: "Dec 2023",
    credentialId: "657c5f4a08a7b",
    skills: ["Public Speaking", "Presentation Skills"],
    category: "Communication",
    certificateUrl:
      "https://lms10.s3.ap-southeast-1.amazonaws.com/skillup/certificates/657c5f4a08a7b.pdf",
  },
  {
    id: 29,
    title: "Negotiating Work Flexibility",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["Scheduling", "Benefits Negotiation"],
    category: "Career Development",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/12dc119389f7968eb73010cd9344b1ed00bd5be3ff675be7d6f04c89e9ce7d3f?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 30,
    title: "Communication Foundations",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["Interpersonal Communication", "Professional Communication"],
    category: "Communication",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/d1cf975cc72228a33ab30774c80e6f89a41dd7fb4ac817ad80a57c6a2caf465a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 31,
    title: "Finding a Job on LinkedIn",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["LinkedIn", "Job Search Strategies"],
    category: "Career Development",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/39e41ff232d24b373a45a455f309b2f6b382a3e9854bb38737dc3ffbf6d5f982?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 32,
    title: "Job Search Strategies",
    issuer: "LinkedIn",
    issuerLogo: "LinkedIn",
    issuedDate: "Dec 2023",
    skills: ["Job Search Strategies"],
    category: "Career Development",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/e9f004c29bd726d33d737aac0fc79fdbe31134df2c4d670816b8e110e62bbc4c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2chotuTtSX23xYfrBtmHVg%3D%3D",
  },
  {
    id: 33,
    title: "CV Writing & Interview",
    issuer: "10 Minute School",
    issuerLogo: "10MS",
    issuedDate: "Dec 2023",
    credentialId: "65708cfde4b92",
    skills: ["CV Writing", "Interview Skills"],
    category: "Career Development",
    certificateUrl:
      "https://lms10.s3.ap-southeast-1.amazonaws.com/skillup/certificates/65708cfde4b92.pdf",
  },
  {
    id: 34,
    title: "Email Writing",
    issuer: "10 Minute School",
    issuerLogo: "10MS",
    issuedDate: "Dec 2023",
    credentialId: "656eea38a683e",
    skills: ["Email Writing"],
    category: "Communication",
    certificateUrl:
      "https://lms10.s3.ap-southeast-1.amazonaws.com/skillup/certificates/656eea38a683e.pdf",
  },
  {
    id: 35,
    title: "Programming Hero Graduate Black Belt Web Developer",
    issuer: "Programming Hero",
    issuerLogo: "PH",
    issuedDate: "Jun 2023",
    credentialId: "WEB7-4570",
    skills: ["Full Stack Development", "Problem Solving", "Project Management"],
    category: "Web Development",
    certificateUrl:
      "https://drive.google.com/file/d/1KG3HXNruBzYeQ1RioMgArMJDAQ2NE87d/view",
    hasVideo: true,
  },
  {
    id: 36,
    title: "Complete Web Development Course",
    issuer: "Programming Hero",
    issuerLogo: "PH",
    issuedDate: "Jun 2023",
    credentialId: "WEB7-4570",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js"],
    category: "Web Development",
    certificateUrl:
      "https://drive.google.com/file/d/1wC9-uM7p0ytgc2D4QE1Zf_ixTRV1bbOh/view",
  },
  {
    id: 37,
    title: "Communication Secrets",
    issuer: "10 Minute School",
    issuerLogo: "10MS",
    issuedDate: "Dec 2023",
    credentialId: "656df69d354ac",
    skills: ["Communication Skills"],
    category: "Communication",
    certificateUrl:
      "https://lms10.s3.ap-southeast-1.amazonaws.com/skillup/certificates/656df69d354ac.pdf",
  },
];

export default function Certifications() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleViewCertificate = (e: React.MouseEvent, certId: number) => {
    e.stopPropagation(); // Prevent card from expanding when clicking the button
    console.log(`View certificate for ID: ${certId}`);
    // Add your certificate viewing logic here
    // For example: window.open(certificateUrl, '_blank')
  };

  const handleViewVideo = (e: React.MouseEvent, certId: number) => {
    e.stopPropagation(); // Prevent card from expanding when clicking the button
    console.log(`View video for ID: ${certId}`);
    // Add your video viewing logic here
  };

  return (
    <section id="certifications" className="relative py-20 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 relative">
          <span className="relative inline-block">
            <span className="text-white relative z-10">My</span>
            {/* Glow effect for "About" */}
            <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
          </span>

          <span
            className="relative ml-4 inline-block animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="relative z-10 bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              Licenses & Certifications
            </span>
            {/* Floating particles */}
            <div className="absolute -top-3 -right-3 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
            <div
              className="absolute -bottom-2 -left-2 w-2 h-2 bg-[#34a578] rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </span>
        </h1>
        <p className="text-gray-400 mb-12">
          Professional credentials and continuous learning achievements
        </p>

        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 gap-4 h-[650px] p-3 overflow-y-auto"
          >
            {certifications.map((cert) => {
              const isOpen = expandedId === cert.id;

              return (
                <motion.div
                  key={cert.id}
                  layout
                  id={`cert-${cert.id}`}
                  className="bg-slate-900/50 backdrop-blur border border-white/10 rounded-xl p-6 cursor-pointer hover:border-white/20 transition-colors relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => {
                    setExpandedId(isOpen ? null : cert.id);

                    // Smooth scroll into view
                    setTimeout(() => {
                      document
                        .getElementById(`cert-${cert.id}`)
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "nearest",
                        });
                    }, 50);
                  }}
                >
                  {/* TOP RIGHT BUTTONS - View Certificate & Video */}
                  <div className="absolute top-4 right-4 flex gap-2 z-10">
                    <button
                      onClick={() => window.open(cert.certificateUrl, "_blank")}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs bg-gradient-to-r from-[#2fd492] via-[#45d19c] to-cyan-500 text-white rounded-full transition-colors"
                    >
                      <FileText className="w-3 h-3" />
                      View Certificate
                    </button>
                  </div>

                  {/* Header */}
                  <div className="flex items-center justify-between gap-4 pr-24">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-300">
                          {cert.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <span className="text-cyan-400">{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.issuedDate}</span>
                        {cert.expiryDate && (
                          <>
                            <span>•</span>
                            <span>Expires: {cert.expiryDate}</span>
                          </>
                        )}
                      </div>

                      {/* Skills tags */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {cert.skills.slice(0, 3).map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 bg-white/10 text-gray-300 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="text-xs px-2 py-1 bg-white/10 text-gray-400 rounded">
                            +{cert.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Expand/Collapse Button - Moved inside header */}
                    <span className="text-gray-400 text-2xl flex-shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="mt-6 pt-6 border-t border-white/10"
                      >
                        {/* Description */}
                        {cert.description && (
                          <div className="mb-6">
                            <h4 className="text-sm font-medium text-gray-300 mb-2">
                              Description
                            </h4>
                            <p className="text-gray-400">{cert.description}</p>
                          </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Credential ID */}
                          {cert.credentialId && (
                            <div>
                              <h4 className="text-sm font-medium text-gray-300 mb-2">
                                Credential ID
                              </h4>
                              <p className="text-gray-400 font-mono text-sm">
                                {cert.credentialId}
                              </p>
                            </div>
                          )}

                          {/* Category */}
                          <div>
                            <h4 className="text-sm font-medium text-gray-300 mb-2">
                              Category
                            </h4>
                            <p className="text-gray-400">{cert.category}</p>
                          </div>
                        </div>

                        {/* All Skills */}
                        <div className="mt-6">
                          <h4 className="text-sm font-medium text-gray-300 mb-2">
                            Skills Gained ({cert.skills.length})
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-2 py-1 bg-white/10 text-gray-300 rounded"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons in expanded view */}
                        <div className="mt-6 pt-6 border-t border-white/10 flex justify-end gap-3">
                          {cert.hasVideo && (
                            <button
                              onClick={(e) => handleViewVideo(e, cert.id)}
                              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                            >
                              <PlayCircle className="w-4 h-4" />
                              Watch Video
                            </button>
                          )}

                          <button
                            onClick={(e) => handleViewCertificate(e, cert.id)}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Full Certificate
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Stats Summary */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {certifications.length}
              </div>
              <div className="text-sm text-gray-400">Total</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {
                  certifications.filter((c) => c.category === "Web Development")
                    .length
                }
              </div>
              <div className="text-sm text-gray-400">Tech</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {new Set(certifications.map((c) => c.issuer)).size}
              </div>
              <div className="text-sm text-gray-400">Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {certifications.filter((c) => !c.isExpired).length}
              </div>
              <div className="text-sm text-gray-400">Active</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
