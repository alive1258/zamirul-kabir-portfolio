// components/testimonials/FeedTestimonials.tsx
"use client";

import React, { useState, useEffect } from "react";
import {
  Linkedin,
  Star,
  Calendar,
  UserCheck,
  Award,
  Sparkles,
  Quote,
  ExternalLink,
  Zap,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface FeedItem {
  id: number;
  name: string;
  img: string;
  role: string;
  company?: string;
  date: string;
  relationship: string;
  content: string;
  linkedin?: string;
  rating: number;
  isExpanded: boolean;
  color: string;
  skills: string[];
}

export default function FeedTestimonials() {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([
    {
      id: 1,
      name: "MD. LITON HOSSAIN",
      img: "/testimonials/liton.jpg",
      role: "CEO at ASIAN IT INC.",
      company: "ASIAN IT INC.",
      date: "January 6, 2024",
      relationship: "Mentor",
      content:
        "Zamirul Kabir is hard working and punctual programmer in my office. He loves to solve the problem and lead the team. He usually write clean code with appropriate comment before every function. I wish he will do better more in future. His leadership skills combined with technical expertise make him a valuable asset to any organization.",
      rating: 5,
      isExpanded: false,
      color: "from-amber-500/20 via-orange-500/20 to-red-500/20",
      skills: [
        "Clean Code",
        "Leadership",
        "Problem Solving",
        "Team Management",
        "Documentation",
      ],
    },
    {
      id: 2,
      name: "Sabbir Hasan",
      img: "/testimonials/sabbir.jpg",
      role: "SQA Engineer | Automation & API Testing Expert",
      company: "IDEEZA",
      date: "September 19, 2025",
      relationship: "Mentor",
      content:
        "I am pleased to recommend Zamirul Kabir, a highly skilled Full-Stack Developer with proven expertise in building scalable, user-friendly, and growth-driven web applications. At EForge IT (Italy), Zamirul has shown exceptional ability in turning digital ideas into impactful products that help businesses achieve their goals. His strengths include expertise in React.js, Next.js, Node.js, Nest.js, MongoDB, PostgreSQL, and MySQL. I believe Zamirul would be a valuable asset to any team or project looking for a developer who can deliver not just clean code, but real business impact.",
      rating: 5,
      isExpanded: false,
      color: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "Nest.js",
        "TypeScript",
        "PostgreSQL",
      ],
    },
    {
      id: 3,
      name: "Mehadi Hasan Shaon",
      img: "/testimonials/mehadi.jpg",
      role: "Google Certified UI/UX Designer",
      company: "Alagzoo Software",
      date: "July 14, 2025",
      relationship: "Client",
      content:
        "Zamirul is a skilled and dependable full-stack developer with solid MERN expertise. He's thoughtful in his work, easy to collaborate with, and always eager to learn and share. A great team player and someone you can count on. His attention to detail and commitment to quality makes him stand out from other developers.",
      rating: 5,
      isExpanded: false,
      color: "from-emerald-500/20 via-teal-500/20 to-green-500/20",
      skills: [
        "MERN Stack",
        "Collaboration",
        "Team Player",
        "Communication",
        "Problem Solving",
      ],
    },
  ]);

  const [activeHover, setActiveHover] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setFeedItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isExpanded: !item.isExpanded } : item,
      ),
    );
  };

  const RelationshipIcon = ({ type }: { type: string }) => {
    switch (type.toLowerCase()) {
      case "mentor":
        return <Award className="w-5 h-5 text-blue-500" />;
      case "client":
        return <UserCheck className="w-5 h-5 text-emerald-500" />;
      default:
        return <UserCheck className="w-5 h-5 text-gray-500" />;
    }
  };

  const RelationshipBadge = ({ type }: { type: string }) => {
    const config = {
      mentor: {
        color: "bg-blue-500/10",
        text: "text-blue-400",
        label: "Mentor",
      },
      client: {
        color: "bg-emerald-500/10",
        text: "text-emerald-400",
        label: "Client",
      },
    };

    const style =
      config[type.toLowerCase() as keyof typeof config] || config.mentor;

    return (
      <div
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${style.color} ${style.text} backdrop-blur-sm`}
      >
        <RelationshipIcon type={type} />
        <span className="text-sm font-medium">{style.label}</span>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0C1222] via-[#131a30] to-[#0C1222] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300 font-medium">
              Professional Endorsements
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
            Trusted by{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
              Experts
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            What industry professionals, clients, and mentors say about working
            with me
          </p>
        </div>

        {/* LinkedIn Badge */}
        <Link
          target="blank"
          href={
            "https://www.linkedin.com/in/zamirul-kabir/details/recommendations/?detailScreenTabIndex=0"
          }
        >
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 cursor-pointer group">
              <div className="p-2 bg-blue-600/30 rounded-lg group-hover:bg-blue-600/50 transition-colors">
                <Linkedin className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">
                  LinkedIn Recommendations
                </p>
                <p className="font-semibold text-white">
                  Verified Endorsements
                </p>
              </div>
              <ExternalLink className="w-5 h-5 text-blue-400 ml-4" />
            </div>
          </div>
        </Link>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 mb-20">
          {feedItems.map((item) => (
            <div
              key={item.id}
              className="relative group"
              onMouseEnter={() => setActiveHover(item.id)}
              onMouseLeave={() => setActiveHover(null)}
            >
              {/* Animated Border */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-3xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
              ></div>

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white/5 via-gray-900/50 to-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-white/20">
                {/* Top Section */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      {/* <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          {item.name.charAt(0)}
                        </span>
                      </div> */}
                      <Image
                        width={70}
                        height={70}
                        src={item?.img}
                        alt="img"
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{item.role}</p>
                      {item.company && (
                        <p className="text-gray-500 text-xs mt-1">
                          {item.company}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 transition-all duration-300 ${
                            i < item.rating
                              ? "text-yellow-400 fill-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]"
                              : "text-gray-700"
                          }`}
                        />
                      ))}
                    </div>
                    <RelationshipBadge type={item.relationship} />
                  </div>
                </div>

                {/* Quote Icon */}
                <div className="absolute top-8 right-8 opacity-10">
                  <Quote className="w-24 h-24 text-white" />
                </div>

                {/* Content */}
                <div className="relative mb-6">
                  <p
                    className={`text-gray-300 leading-relaxed transition-all duration-500 ${
                      !item.isExpanded ? "line-clamp-4" : ""
                    }`}
                  >
                    {item.content}
                  </p>
                  {item.content.length > 200 && (
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium text-blue-400 transition-all duration-300 hover:gap-3"
                    >
                      {item.isExpanded ? "Show Less" : "Read More"}
                      <Zap
                        className={`w-4 h-4 transition-transform ${
                          item.isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Footer */}
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm text-gray-500">Verified</span>
                      </div>
                    </div>
                    <Link
                      target="blank"
                      href={
                        "https://www.linkedin.com/in/zamirul-kabir/details/recommendations/?detailScreenTabIndex=0"
                      }
                    >
                      <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium text-gray-400 hover:text-white transition-all duration-300">
                        View Full →
                      </button>
                    </Link>
                  </div>

                  {/* Skills Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/5 hover:border-white/10 transition-all duration-300 cursor-pointer hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            {
              value: "100%",
              label: "Client Satisfaction",
              icon: "⭐",
              color: "from-yellow-500/20 to-amber-500/20",
            },
            {
              value: "5/5",
              label: "Average Rating",
              icon: "🎯",
              color: "from-blue-500/20 to-cyan-500/20",
            },
            {
              value: "3+",
              label: "Verified Testimonials",
              icon: "✅",
              color: "from-emerald-500/20 to-green-500/20",
            },
            {
              value: "3",
              label: "Years Experience",
              icon: "⚡",
              color: "from-purple-500/20 to-pink-500/20",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-white/5 via-black/30 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500 hover:scale-105 group"
            >
              <div
                className={`absolute inset-0 ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
              ></div>
              <div className="relative">
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
                <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-40 transition-opacity">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* CTA Section */}
        <div className="text-center">
          <div className="relative bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-xl border border-white/10 rounded-3xl p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>

            <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Lets build something amazing. Connect with me on LinkedIn or reach
              out directly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/zamirul-kabir/"
                className="group z-50 inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
              >
                Get In Touch
                <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
