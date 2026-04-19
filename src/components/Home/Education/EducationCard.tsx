import React from "react";
import {
  BiBook,
  BiCalendar,
  BiChevronRight,
  BiSolidGraduation,
} from "react-icons/bi";
import { MyEducationCardProps } from "./Education";
import SlideUp from "@/components/Shared/animations/SlideUp";

const EducationCard: React.FC<MyEducationCardProps> = ({ item, delay = 0 }) => {
  return (
    <div className="relative group">
      {/* Glowing background effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#34a578]/10 via-transparent to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

      <div className="relative ">
        {/* Left Content Card */}
        <SlideUp delay={delay}>
          <div className="flex-1">
            {/* Main card with glass effect */}
            <div className="relative p-2 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-[#34a578]/40 transition-all duration-500 group-hover:scale-[1.02]">
              {/* Certificate/Degree with animated underline */}
              <div className="mb-4">
                <h1 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-200 group-hover:to-white group-hover:bg-clip-text transition-all duration-500">
                  {item?.certificate}
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-[#34a578] to-cyan-400 rounded-full mb-4 group-hover:w-32 transition-all duration-700"></div>
              </div>

              {/* Institution name with gradient */}
              <h3 className="text-lg font-semibold mb-5">
                <span className="relative">
                  <BiSolidGraduation
                    className="absolute -left-8 top-1 text-[#34a578]"
                    size={20}
                  />
                  <span className="bg-gradient-to-r from-[#34a578] via-[#45d19c] to-cyan-400 bg-clip-text text-transparent">
                    {item?.name}
                  </span>
                </span>
              </h3>

              {/* Description with improved typography */}
              <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
                {item?.description}
              </p>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#34a578]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Hover indicator */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <BiChevronRight size={24} className="text-[#34a578]" />
              </div>

              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/10 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-cyan-500/10 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </SlideUp>

        {/* Right Timeline */}
        <div className="flex flex-col items-center relative">
          {/* Animated timeline circle */}
          <div className="relative z-10">
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#34a578] to-cyan-400 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>

            {/* Main circle */}

            {/* Floating dots */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce"></div>
          </div>

          {/* Animated timeline line */}
          <div className="relative mt-4">
            <div className="w-0.5 h-full bg-gradient-to-b from-[#34a578] via-gray-600 to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              {/* Moving dot */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#34a578] rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
            </div>

            {/* Bottom cap */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-transparent rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
