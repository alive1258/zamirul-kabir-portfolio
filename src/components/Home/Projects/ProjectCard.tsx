"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../../../../utils/projectData";
import SlideUp from "@/components/Shared/animations/SlideUp";
import { RiArrowRightLine } from "react-icons/ri";
import ProjectDetailsModal from "./ProductsDetailsModal";

interface ProjectCardProps {
  item: Project;
  idx: number;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item, idx, delay = 0 }) => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <SlideUp delay={delay}>
        <div
          className="relative group my-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glowing background effect */}
          <div className="absolute -inset-3 bg-gradient-to-r from-[#3B82F6]/20 via-transparent to-cyan-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

          {/* Main card */}
          <div className="relative bg-gradient-to-br from-white/[0.03] via-black/30 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 grid md:grid-cols-2 gap-8 overflow-hidden group-hover:border-[#3B82F6]/40 transition-all duration-500">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/0 via-transparent to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Floating particles */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-[#3B82F6] rounded-full animate-pulse"></div>
            <div
              className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>

            {/* Animated corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#3B82F6]/20 rounded-tl-xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-cyan-400/20 rounded-br-xl"></div>

            {/* START IMAGE SECTION */}
            <div
              className={`relative ${
                idx % 2 !== 0 ? "md:order-2" : "md:order-1"
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl">
                {/* Image container with glow - optimized */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#3B82F6]/30 via-transparent to-cyan-400/30 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl"></div>

                {/* Responsive image wrapper */}
                <div className="relative aspect-[4/3] md:aspect-[3/2] w-full overflow-hidden rounded-2xl">
                  <Image
                    className="object-fill transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105"
                    src={item?.image}
                    alt={item?.name}
                    fill
                    sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={idx < 3}
                    loading={idx < 3 ? "eager" : "lazy"}
                    quality={90}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  />
                </div>

                {/* Category overlay */}
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white border border-white/20">
                    {item.category}
                  </div>
                </div>
              </div>
            </div>
            {/* END IMAGE SECTION */}

            {/* START TEXT SECTION */}
            <div
              className={`relative ${
                idx % 2 !== 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              {/* Company Logo and Name */}
              <div className="flex items-center gap-x-4 mb-6">
                <div className="relative group/logo">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#3B82F6]/20 to-transparent rounded-full blur-sm opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h4 className="text-gray-200 md:text-2xl text-[20px] font-satoshi font-bold">
                    {item?.company}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-400">{item?.role}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm text-gray-400">
                      {item?.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Title */}
              <h1 className="md:text-2xl text-[20px] mb-4 font-satoshi font-bold">
                <button
                  onClick={() => setShowModal(true)}
                  className="text-gray-200  hover:text-[#3B82F6] text-left transition-colors duration-300 relative group/title"
                >
                  {item?.name}
                  {/* Animated underline */}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-cyan-400 group-hover/title:w-full transition-all duration-500"></div>
                </button>
              </h1>

              {/* Project Description */}
              <p className="text-gray-400 font-satoshi font-medium text-sm mb-6 leading-relaxed">
                {item?.description}
              </p>

              {/* Tags with hover effects */}
              <div className="mb-6 flex flex-wrap gap-3 space-y-1">
                {item?.tags?.map((tag, idx) => (
                  <div key={idx} className="relative group/tag">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3B82F6] to-cyan-400 rounded-3xl blur opacity-0 group-hover/tag:opacity-30 transition-opacity duration-300"></div>
                    <span className="relative px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 font-satoshi font-medium rounded-3xl text-sm hover:text-white hover:border-[#3B82F6]/50 transition-all duration-300 cursor-pointer">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats with animated dots */}
              <div className="mb-6 flex flex-wrap gap-4">
                {item.achievements.slice(0, 1).map((achievement, idx) => (
                  <div key={idx} className="flex items-center gap-2 group/stat">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-[#3B82F6] rounded-full blur opacity-0 group-hover/stat:opacity-30 transition-opacity duration-300"></div>
                      <div className="relative w-2 h-2 bg-gradient-to-r from-[#3B82F6] to-cyan-400 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover/stat:text-gray-300 transition-colors">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Links with enhanced animations */}
              <div className="flex flex-wrap gap-6">
                {[
                  {
                    label: "View Live",
                    href: item.live_link,
                    external: true,
                    icon: <RiArrowRightLine size={20} />,
                  },
                  {
                    label: "View Code",
                    href: item.github_link,
                    external: true,
                    icon: <RiArrowRightLine size={20} />,
                  },
                  // Conditionally add server link if it exists
                  ...(item.server_github_link
                    ? [
                        {
                          label: "Server Code",
                          href: item.server_github_link,
                          external: true,
                          icon: <RiArrowRightLine size={20} />,
                        },
                      ]
                    : []),
                  {
                    label: "View Details",
                    action: () => setShowModal(true),
                    icon: <RiArrowRightLine size={20} />,
                  },
                ].map((link, idx) => (
                  <div key={idx} className="group/link w-fit">
                    <div className="flex items-center gap-x-2">
                      {link.href ? (
                        <Link
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-x-2"
                        >
                          <span className="text-gray-400 text-sm font-satoshi font-bold uppercase cursor-pointer group-hover/link:text-[#3B82F6] transition-all duration-300 border-b border-transparent group-hover/link:border-[#3B82F6] pb-1">
                            {link.label}
                          </span>
                          <RiArrowRightLine
                            size={20}
                            className="text-gray-400 group-hover/link:text-[#3B82F6] group-hover/link:translate-x-1 transition-all duration-300"
                          />
                        </Link>
                      ) : (
                        <button
                          onClick={link.action}
                          className="flex items-center gap-x-2"
                        >
                          <span className="text-gray-400 text-sm font-satoshi font-bold uppercase cursor-pointer group-hover/link:text-[#3B82F6] transition-all duration-300 border-b border-transparent group-hover/link:border-[#3B82F6] pb-1">
                            {link.label}
                          </span>
                          <RiArrowRightLine
                            size={20}
                            className="text-gray-400 group-hover/link:text-[#3B82F6] group-hover/link:translate-x-1 transition-all duration-300"
                          />
                        </button>
                      )}
                    </div>
                    {/* Animated line effect */}
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent w-0 group-hover/link:w-full transition-all duration-500 mt-1"></div>
                  </div>
                ))}
              </div>
            </div>
            {/* END TEXT SECTION */}
          </div>
        </div>
      </SlideUp>

      {/* Project Details Modal */}
      {showModal && (
        <ProjectDetailsModal
          project={item}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
