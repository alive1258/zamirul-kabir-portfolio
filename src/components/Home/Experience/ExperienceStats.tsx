"use client";
import React from "react";
import SlideUp from "@/components/Shared/animations/SlideUp";

interface Stat {
  value: string;
  label: string;
  icon: string;
  gradient: string;
}

const stats: Stat[] = [
  {
    value: "3",
    label: "Years Experience",
    icon: "📅",
    gradient: "from-[#34a578] to-cyan-400",
  },
  {
    value: "5",
    label: "Professional Roles",
    icon: "🎯",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    value: "1000+",
    label: "Students Mentored",
    icon: "👨‍🎓",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    value: "40%",
    label: "Avg. Performance Gain",
    icon: "📈",
    gradient: "from-amber-500 to-yellow-500",
  },
];

const ExperienceStats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 md:gap-5 gap-3 md:max-w-4xl w-full mx-auto mb-20">
      {stats.map((stat, idx) => (
        <SlideUp key={idx} delay={0.2 + idx * 0.1}>
          <div className="group/stat relative md:px-5 md:py-5 px-3 py-4 rounded-2xl bg-gradient-to-br from-white/[0.07] to-transparent backdrop-blur-sm border border-white/10">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl opacity-5`}
            ></div>
            <div className="relative z-10 text-center">
              <div className="text-2xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                <span>{stat.icon}</span>
                <span>{stat.value}</span>
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          </div>
        </SlideUp>
      ))}
    </div>
  );
};

export default ExperienceStats;
