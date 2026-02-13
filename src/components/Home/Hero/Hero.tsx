"use client";
import { AiOutlineDownload } from "react-icons/ai";
import "../../Home/Services/Services.css";
import ZoomIn from "@/components/Shared/animations/ZoomIn";
import ImageWithSkeleton from "@/components/Shared/animations/ImageWithSkeleton";
import { FiCode, FiStar } from "react-icons/fi";
import {
  FaDev,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";
import SlideUp from "@/components/Shared/animations/SlideUp";
import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const HeroSkeleton = dynamic(() => import("./HeroSkeleton"), {
  ssr: false,
  loading: () => (
    <div className="md:pt-28 pb-28 py-12 relative h-full w-full bg-[#0f172a]">
      <div className="container pt-10">
        <div className="h-96 bg-gray-900/50 rounded-2xl animate-pulse"></div>
      </div>
    </div>
  ),
});

const Hero = () => {
  const zamirulPic = "/assets/image/zks.png";
  const [isLoading, setIsLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    const contentTimer = setTimeout(() => {
      setContentLoaded(true);
    }, 1200);

    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, []);

  if (isLoading) {
    return <HeroSkeleton />;
  }

  return (
    <Suspense fallback={<HeroSkeleton />}>
      <div
        id="hero"
        className="relative w-full bg-[#0f172a] overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 lg:pb-32"
      >
        {/* Background Elements - Responsive */}
        <div className="absolute hidden lg:block blurred-blue-circle"></div>

        {/* Large blur circles - hide on mobile, adjust for tablet */}
        <div
          className="absolute rounded-full opacity-20 md:opacity-40 blur-[80px] md:blur-[150px] bg-[#E9C12F]"
          style={{
            width: "300px",
            height: "300px",
            right: "-100px",
            top: "-150px",
          }}
        ></div>

        <div className="absolute md:hidden">
          <div
            className="rounded-full opacity-40 blur-[150px] bg-[#E9C12F]"
            style={{
              width: "593.727px",
              height: "531.226px",
              right: "-72.727px",
              top: "-345.17px",
            }}
          ></div>
        </div>

        <div
          className="absolute rounded-full opacity-20 md:opacity-[0.38] blur-[60px] md:blur-[125px] bg-[#5158DA] pointer-events-none"
          style={{
            width: "250px",
            height: "250px",
            left: "50px",
            bottom: "-150px",
          }}
        ></div>

        <div className="absolute md:hidden">
          <div
            className="rounded-full opacity-[0.38] blur-[125px] bg-[#5158DA] pointer-events-none"
            style={{
              width: "699.729px",
              height: "626.07px",
              left: "152.271px",
              bottom: "-377.762px",
            }}
          ></div>
        </div>

        {/* Grid pattern - smaller on mobile */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_20px] md:bg-[size:32px_26px] lg:bg-[size:48px_39px]"></div>

        {/* Main Content Container */}
        <div className="container px-4 sm:px-6 lg:px-20 mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 pt-8 lg:pt-12">
            {/* Left Column - Text Content */}
            <div className="w-full lg:w-1/2 text-white relative">
              {/* Floating particles - reduced count on mobile */}
              <div className="absolute -inset-4 sm:-inset-6 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-gradient-to-r from-[#34a578]/20 to-cyan-400/20 animate-float-slow"
                    style={{
                      width: `${Math.random() * 4 + 2}px`,
                      height: `${Math.random() * 4 + 2}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: `${Math.random() * 10 + 10}s`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                {/* Intro Line */}
                <div className="flex items-center gap-2 mb-4 sm:mb-6 animate-fade-in">
                  <div className="w-10 sm:w-16 h-1 bg-gradient-to-r from-[#34a578] via-cyan-400 to-[#45d19c] rounded-full animate-glow" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest text-gray-400">
                    WELCOME TO MY PORTFOLIO
                  </span>
                </div>

                {/* Hero Title */}
                <div className="mb-3 sm:mb-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    <span className="block mb-2">
                      <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-text-shimmer">
                        Zamirul Kabir
                      </span>
                    </span>
                    <span className="bg-gradient-to-r animate-pulse-slow from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent animate-gradient-x text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                      Full-Stack Developer
                    </span>
                  </h1>
                  <div className="w-full h-1 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full animate-width-pulse mt-2" />
                </div>

                {/* Description Card */}
                <div className="relative group mb-4">
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#34a578]/20 via-transparent to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                  <div className="relative p-4 sm:p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-[#34a578]/40 transition-colors duration-500">
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 mb-4 sm:mb-6 group-hover:text-white/90 transition-colors duration-300">
                      As a dedicated{" "}
                      <span className="font-bold text-white group-hover:text-[#34a578] transition-colors duration-300">
                        Frontend-Focused Full-Stack Engineer
                      </span>{" "}
                      with{" "}
                      <span className="font-bold text-[#34a578]">
                        2.5+ years
                      </span>{" "}
                      of experience, I specialize in transforming complex
                      requirements into elegant, performant solutions.
                    </p>

                    <div className="space-y-2 sm:space-y-2.5 mb-6">
                      <div className="flex items-start gap-3 group/item hover:translate-x-1 sm:hover:translate-x-2 transition-transform duration-300">
                        <div className="relative mt-1">
                          <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse flex-shrink-0"></div>
                          <div className="absolute -inset-1 border-2 border-cyan-500/30 rounded-full animate-ping"></div>
                        </div>
                        <span className="text-sm sm:text-base text-gray-300 group-hover/item:text-white transition-colors duration-300">
                          🚀 Architected systems handling{" "}
                          <span className="font-bold text-cyan-300">
                            200K+ monthly users
                          </span>{" "}
                          with enterprise-grade reliability
                        </span>
                      </div>

                      <div className="flex items-start gap-3 group/item hover:translate-x-1 sm:hover:translate-x-2 transition-transform duration-300">
                        <div className="relative mt-1">
                          <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full animate-pulse flex-shrink-0"></div>
                          <div className="absolute -inset-1 border-2 border-green-500/30 rounded-full animate-ping"></div>
                        </div>
                        <span className="text-sm sm:text-base text-gray-300 group-hover/item:text-white transition-colors duration-300">
                          ⚡ Achieved{" "}
                          <span className="font-bold text-green-400">
                            95+ Lighthouse scores
                          </span>{" "}
                          and{" "}
                          <span className="font-bold text-green-400">
                            40-60% faster load times
                          </span>{" "}
                          across all projects
                        </span>
                      </div>

                      <div className="flex items-start gap-3 group/item hover:translate-x-1 sm:hover:translate-x-2 transition-transform duration-300">
                        <div className="relative mt-1">
                          <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse flex-shrink-0"></div>
                          <div className="absolute -inset-1 border-2 border-purple-500/30 rounded-full animate-ping"></div>
                        </div>
                        <span className="text-sm sm:text-base text-gray-300 group-hover/item:text-white transition-colors duration-300">
                          💰 Saved clients{" "}
                          <span className="font-bold text-purple-400">
                            30-50% in development costs
                          </span>{" "}
                          through optimized workflows and reusable architectures
                        </span>
                      </div>

                      <div className="flex items-start gap-3 group/item hover:translate-x-1 sm:hover:translate-x-2 transition-transform duration-300">
                        <div className="relative mt-1">
                          <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-pulse flex-shrink-0"></div>
                          <div className="absolute -inset-1 border-2 border-yellow-500/30 rounded-full animate-ping"></div>
                        </div>
                        <span className="text-sm sm:text-base text-gray-300 group-hover/item:text-white transition-colors duration-300">
                          👨‍💼 Led{" "}
                          <span className="font-bold text-yellow-400">
                            15+ enterprise projects
                          </span>{" "}
                          with{" "}
                          <span className="font-bold text-yellow-400">
                            100% client satisfaction
                          </span>{" "}
                          and on-time delivery
                        </span>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <SlideUp delay={0.4}>
                      <div className="pt-4 sm:pt-6 border-t border-white/10">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                          {[
                            {
                              value: "2.5+",
                              label: "Years",
                              color: "text-[#34a578]",
                            },
                            {
                              value: "35+",
                              label: "Projects",
                              color: "text-cyan-400",
                            },
                            {
                              value: "5K+",
                              label: "Coding Hours",
                              color: "text-[#45d19c]",
                            },
                            {
                              value: "100%",
                              label: "Satisfaction",
                              color: "text-white",
                            },
                          ].map((stat, index) => (
                            <div
                              key={index}
                              className="text-center p-3 rounded-lg bg-white/5 group/stat hover:bg-white/10 transition-colors duration-300"
                            >
                              <div
                                className={`text-xl sm:text-2xl font-bold ${stat.color}`}
                              >
                                {stat.value}
                              </div>
                              <div className="text-xs sm:text-sm text-gray-400 mt-1">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </SlideUp>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-0">
                  <a
                    href="/Resume_of_Zamirul.pdf"
                    download="Resume_of_Zamirul.pdf"
                    className="block w-full sm:w-auto"
                  >
                    <button className="group relative w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#34a578] to-[#45d19c] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#34a578]/30 transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#34a578] to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
                      <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                        DOWNLOAD RESUME
                        <AiOutlineDownload
                          size={18}
                          className="group-hover:translate-y-1 transition-transform"
                        />
                      </span>
                    </button>
                  </a>

                  <a href="#contact" className="block w-full sm:w-auto">
                    <button className="group w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-[#34a578]/30 text-white font-semibold rounded-xl hover:bg-[#34a578]/10 hover:border-[#34a578] transition-all duration-300">
                      <span className="flex items-center justify-center gap-2 sm:gap-3">
                        Lets Connect
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Image Content */}
            <div className="w-full lg:w-1/2">
              <ZoomIn>
                <div className="relative">
                  {/* Main Image Container */}
                  <div className="relative group">
                    {/* Outer glow layers - reduced on mobile */}
                    <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-br from-[#34a578]/30 via-transparent to-cyan-400/30 rounded-3xl sm:rounded-[40px] blur-xl sm:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
                    <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-[#34a578]/20 via-transparent to-cyan-400/20 rounded-2xl sm:rounded-[32px] blur-lg sm:blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700"></div>

                    {/* Animated gradient border */}
                    {/* <div className="absolute -inset-0.5 rounded-2xl sm:rounded-[28px] bg-gradient-to-r from-[#34a578] via-cyan-400 to-[#45d19c] opacity-0 group-hover:duration-300 ease-in-out transition-all group-hover:opacity-100 animate-gradient-x-fast"></div> */}
                    <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-[#34a578]/10 to-cyan-400/10 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-0 group-hover/stats:opacity-100 transition-opacity duration-700"></div>
                    {/* Main image container */}
                    <div className="relative  bg-gradient-to-br from-white/[0.06] via-black/40 to-white/[0.03] backdrop-blur-xl sm:backdrop-blur-2xl border border-white/20 rounded-2xl sm:rounded-3xl min-w-[200px] sm:min-w-[280px] transform group-hover/stats:translate-y-[-5px] transition-transform duration-500">
                      <ImageWithSkeleton
                        src={zamirulPic}
                        alt="Zamirul Kabir - Full Stack Developer & Tech Lead"
                        width={700}
                        height={610}
                        classNameWrapper="relative overflow-hidden rounded-2xl"
                        classNameImage="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[610px] object-cover rounded-2xl group-hover:scale-110 transition-transform duration-[1.2s] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                        priority
                      />
                      <div className="absolute bottom-96 left-1">
                        <div className="relative group/badge">
                          <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 to-[#45d19c] rounded-full blur opacity-0 group-hover/badge:opacity-30 transition-opacity duration-500"></div>
                          <div className="relative px-3 py-2 sm:px-4 rounded-full sm:py-3 bg-gradient-to-br from-white/[0.06] via-black/40 to-white/[0.03] backdrop-blur-xl sm:backdrop-blur-2xl border border-white/20 text-white font-bold text-sm sm:text-base shadow-xl sm:shadow-2xl shadow-[#34a578]/30">
                            <span className="flex items-center gap-2">
                              <FiStar className="text-lg" />
                              Problem Solver
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-52 left-1">
                        <div className="relative group/badge">
                          <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 to-[#45d19c] rounded-full blur opacity-0 group-hover/badge:opacity-30 transition-opacity duration-500"></div>
                          <div className="relative px-3 py-2 sm:px-4 rounded-full sm:py-3 bg-gradient-to-br from-white/[0.06] via-black/40 to-white/[0.03] backdrop-blur-xl sm:backdrop-blur-2xl border border-white/20 text-white font-bold text-sm sm:text-base shadow-xl sm:shadow-2xl shadow-[#34a578]/30">
                            <span className="flex items-center gap-2">
                              <FiStar className="text-lg" />
                              Team Lead
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-1">
                        <div className="relative group/badge">
                          <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 to-[#45d19c] rounded-full blur opacity-0 group-hover/badge:opacity-30 transition-opacity duration-500"></div>
                          <div className="relative px-3 py-2 sm:px-4 rounded-full sm:py-3 bg-gradient-to-br from-white/[0.06] via-black/40 to-white/[0.03] backdrop-blur-xl sm:backdrop-blur-2xl border border-white/20 text-white font-bold text-sm sm:text-base shadow-xl sm:shadow-2xl shadow-[#34a578]/30">
                            <span className="flex items-center gap-2">
                              <FiStar className="text-lg" />
                              NEXT.js
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Floating tech badges - Responsive positioning */}
                      <div className="absolute top-4 right-4 sm:top-7 sm:right-2">
                        <div className="relative group/badge">
                          <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full blur opacity-0 group-hover/badge:opacity-30 transition-opacity duration-500"></div>
                          <div className="relative px-3 py-2 sm:px-4 rounded-full sm:py-3 bg-gradient-to-br from-white/[0.06] via-black/40 to-white/[0.03] backdrop-blur-xl sm:backdrop-blur-2xl border border-white/20 text-white font-bold text-sm sm:text-base shadow-xl sm:shadow-2xl shadow-[#34a578]/30">
                            <span className="flex items-center gap-1 sm:gap-2">
                              <FiCode className="text-sm sm:text-lg" />
                              REACT.js
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Status indicator */}
                      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 group/status">
                        <div className="relative">
                          <div className="absolute -inset-2 sm:-inset-3 bg-[#34a578]/20 rounded-full blur opacity-0 group-hover/status:opacity-100 transition-opacity duration-500"></div>
                          <div className="relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 bg-black/60 backdrop-blur-xl sm:backdrop-blur-2xl rounded-full border border-white/20">
                            <div className="relative">
                              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#34a578] rounded-full animate-pulse"></div>
                              <div className="absolute -inset-1 sm:-inset-2 border border-[#34a578]/30 rounded-full animate-ping"></div>
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-white">
                              Available for Hire
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* GitHub Stats Card - Responsive positioning */}
                  <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 lg:block hidden">
                    <div className="relative group/stats animate-fade-in">
                      <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-[#34a578]/10 to-cyan-400/10 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-0 group-hover/stats:opacity-100 transition-opacity duration-700"></div>

                      <div className="relative p-4 sm:p-6 bg-gradient-to-br from-white/[0.06] via-black/40 to-white/[0.03] backdrop-blur-xl sm:backdrop-blur-2xl border border-white/20 rounded-2xl sm:rounded-3xl min-w-[200px] sm:min-w-[280px] transform group-hover/stats:translate-y-[-5px] transition-transform duration-500">
                        <div className="text-center mb-3 sm:mb-4">
                          <div className="text-2xl sm:text-4xl font-black text-white mb-1 sm:mb-2 animate-count-up">
                            112+
                          </div>
                          <div className="text-xs sm:text-sm text-gray-400 font-medium">
                            Public Repos
                          </div>
                        </div>
                        <div className="flex items-center justify-center gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#34a578] rounded-full animate-pulse"></div>
                          <div className="text-xs sm:text-sm text-gray-300 font-medium">
                            Active since 2021
                          </div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        </div>

                        <div className="mt-3 sm:mt-4 w-full h-1.5 sm:h-2 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#34a578] via-cyan-400 to-[#45d19c] rounded-full animate-progress"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Icons - Responsive */}
                  <div className="mt-6 sm:mt-8 lg:mt-12">
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5">
                      {[
                        {
                          icon: FaLinkedin,
                          href: "https://www.linkedin.com/in/zamirul-kabir/",
                          label: "LinkedIn",
                          color: "text-blue-400",
                          hover: "border-blue-500",
                        },
                        {
                          icon: FaGithub,
                          href: "https://github.com/alive1258",
                          label: "GitHub",
                          color: "text-gray-300",
                          hover: "border-purple-500",
                        },
                        {
                          icon: FaMedium,
                          href: "https://medium.com/@zamirulkabir999",
                          label: "Medium",
                          color: "text-gray-300",
                          hover: "border-yellow-500",
                        },
                        {
                          icon: FaDev,
                          href: "https://dev.to/zamirul_kabir",
                          label: "Dev.to",
                          color: "text-gray-300",
                          hover: "border-green-500",
                        },
                        {
                          icon: FaFacebookF,
                          href: "https://www.facebook.com/zamirul.kabir.s",
                          label: "Facebook",
                          color: "text-blue-500",
                          hover: "border-blue-600",
                        },
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group relative p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:${social.hover} transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-lg`}
                          aria-label={social.label}
                        >
                          <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                            <social.icon
                              className={`w-4 h-4 sm:w-5 sm:h-5 ${social.color} group-hover:text-white transition-colors duration-300`}
                            />
                          </div>
                          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            {social.label}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </ZoomIn>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Hero;
