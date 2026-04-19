"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import SlideUp from "@/components/Shared/animations/SlideUp";
import { projectCategories, projectsData } from "../../../../utils/projectData";
import { RiArrowRightLine } from "react-icons/ri";
import BadgeLabel from "@/components/Shared/BadgeLabel/BadgeLabel";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // FILTERING PROJECTS BASED ON SELECTED CATEGORY
  const filteredData =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter(
          (item) => item.category.includes(selectedCategory), // Use includes for array
        );

  // Limit display to 5 projects unless showAll is true
  const displayData = showAll ? filteredData : filteredData.slice(0, 3);

  // Check if we need to show the "Show All" button
  const shouldShowButton = filteredData.length > 3;

  return (
    <section id="projects" className="container md:my-14 my-20">
      {/* START HEADER SECTION */}
      <BadgeLabel
        text="Portfolio"
        showFullHeader={true}
        showTitle={true}
        showSubtitle={true}
        titleText="My Projects"
        subtitle="A collection of my recent work showcasing modern web development and innovative solutions"
        className="mb-16 md:mb-24"
      />
      {/* END HEADER SECTION */}

      <SlideUp delay={0.3}>
        <div className="my-10 flex justify-center flex-wrap gap-3">
          {projectCategories?.map((cat) => (
            <div key={cat} className="relative group">
              {/* Glow effect container */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#3B82F6]/20 via-transparent to-cyan-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <button
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowAll(false); // Reset to show only 5 when changing category
                }}
                className="relative"
              >
                {/* Glass morphism background */}
                <div
                  className={`relative px-6 py-2.5 rounded-3xl backdrop-blur-xl border text-sm font-satoshi font-medium transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-white/[0.15] to-white/[0.05] border-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/20"
                      : "bg-gradient-to-r from-white/[0.08] to-white/[0.02] border-white/10 text-gray-400 hover:text-white hover:border-[#3B82F6]/50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {/* Animated dot indicator */}
                    <div
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        selectedCategory === cat
                          ? "bg-gradient-to-r from-[#3B82F6] to-cyan-400 animate-pulse"
                          : "bg-gray-600 group-hover:bg-[#3B82F6]"
                      }`}
                    ></div>

                    {cat}

                    {selectedCategory === cat && (
                      <span className="relative ml-1">
                        <span className="relative z-10 px-2 py-0.5 text-xs bg-gradient-to-r from-[#3B82F6] to-cyan-400 rounded-full">
                          {filteredData.length}
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-cyan-400 rounded-full animate-ping opacity-30"></span>
                      </span>
                    )}
                  </span>
                </div>

                {/* Animated underline */}
                <div
                  className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-cyan-400 rounded-full transition-all duration-500 ${
                    selectedCategory === cat ? "w-3/4" : "group-hover:w-3/4"
                  }`}
                ></div>
              </button>
            </div>
          ))}
        </div>
      </SlideUp>

      {/* START FILTERED PROJECT CARD LIST */}
      <div>
        {displayData?.length > 0 ? (
          displayData.map((item, idx) => (
            <ProjectCard
              item={item}
              idx={idx}
              key={`${item.id}-${selectedCategory}`}
              delay={idx * 0.3}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            {/* Empty state illustration */}
            <div className="relative mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              {/* Animated dots */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#3B82F6] rounded-full animate-ping opacity-20"></div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              No Projects Found
            </h3>
            <p className="text-gray-400 max-w-md mb-6">
              {selectedCategory === "All"
                ? "No projects available at the moment. Check back soon!"
                : `No projects found in the "${selectedCategory}" category. Try another category or check back later.`}
            </p>
          </div>
        )}
      </div>
      {/* END FILTERED PROJECT CARD LIST */}

      {/* Show All / Show Less Button - Only show when there are more than 5 projects */}
      {shouldShowButton && (
        <SlideUp className="pt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative"
          >
            {/* Neon glow background */}
            <div className="absolute -inset-3 bg-gradient-to-r from-[#3B82F6] via-cyan-400 to-violet-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 group-hover:scale-105"></div>

            {/* Glowing border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3B82F6] via-cyan-400 to-[#3B82F6] rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"></div>

            {/* Glass morphism container */}
            <div className="relative px-8 py-4 rounded-2xl backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 group-hover:border-white/30 transition-all duration-500 overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/0 via-[#3B82F6]/10 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

              <span className="flex items-center gap-4 relative z-10">
                {/* Animated icon */}
                <div className="relative">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 ${
                      showAll
                        ? "bg-gradient-to-br from-[#3B82F6] to-cyan-400 shadow-lg shadow-[#3B82F6]/50"
                        : "bg-gradient-to-br from-gray-800 to-gray-700 group-hover:bg-gradient-to-br group-hover:from-[#3B82F6] group-hover:to-cyan-400"
                    }`}
                  >
                    <RiArrowRightLine
                      size={18}
                      className={`text-white transition-all duration-500 ${
                        showAll ? "rotate-90" : "group-hover:translate-x-1"
                      }`}
                    />
                  </div>

                  {/* Pulsing outer ring */}
                  {showAll && (
                    <>
                      <div className="absolute -inset-2 rounded-full border-2 border-[#3B82F6]/30 animate-ping"></div>
                      <div className="absolute -inset-1 rounded-full border border-cyan-400/50 animate-pulse"></div>
                    </>
                  )}
                </div>

                {/* Text with gradient effect */}
                <span className="font-satoshi font-semibold text-base">
                  {showAll ? (
                    <span className="bg-gradient-to-r from-[#3B82F6] via-cyan-400 to-[#3B82F6] bg-clip-text text-transparent bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500">
                      Show Less Projects
                    </span>
                  ) : (
                    <>
                      Show All{" "}
                      <span className="bg-gradient-to-r from-[#3B82F6] via-cyan-400 to-[#3B82F6] bg-clip-text text-transparent font-bold animate-gradient bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500">
                        {filteredData.length}
                      </span>{" "}
                      Projects
                    </>
                  )}
                </span>
              </span>
            </div>
          </button>
        </SlideUp>
      )}
    </section>
  );
};

export default Projects;
