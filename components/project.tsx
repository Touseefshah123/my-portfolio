"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        {/* Content Area */}
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          
          {/* Mobile View Live Link */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline sm:hidden"
          >
            🔗 View Live Project
          </a>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Link (for normal layout - Desktop only) */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 
            flex-col items-center gap-2 text-gray-600 hover:text-blue-600 
            transition-all group-hover:scale-110
            group-even:hidden dark:text-white/60 dark:hover:text-blue-400"
        >
          <FiExternalLink className="text-2xl md:text-3xl" />
          <span className="text-xs md:text-sm font-semibold whitespace-nowrap">
            View Live
          </span>
        </a>

        {/* Left Side Link (for even layout - Desktop only) */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:group-even:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 
            flex-col items-center gap-2 text-gray-600 hover:text-blue-600 
            transition-all group-hover:scale-110 dark:text-white/60 dark:hover:text-blue-400"
        >
          <FiExternalLink className="text-2xl md:text-3xl" />
          <span className="text-xs md:text-sm font-semibold whitespace-nowrap">
            View Live
          </span>
        </a>
      </section>
    </motion.div>
  );
}