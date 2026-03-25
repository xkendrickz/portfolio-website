"use client";
import Image from "next/image";
import Link from "next/link";
import { LuGithub, LuExternalLink, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useState } from "react";

interface ProjectCardProps {
  imagePaths: string[];
  title: string;
  description: string;
  tags?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({
  imagePaths,
  title,
  description,
  tags = [],
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const [current, setCurrent] = useState(0);
  const hasMultiple = imagePaths.length > 1;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((i) => (i === 0 ? imagePaths.length - 1 : i - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((i) => (i === imagePaths.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="group relative bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden
      transition-all duration-300 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10">

      {/* Image slider */}
      <div className="relative overflow-hidden">
        <Image
          src={imagePaths[current]}
          alt={`${title} screenshot ${current + 1}`}
          width={800}
          height={600}
          className="w-full object-cover transition-all duration-500 group-hover:scale-105"
        />

        {/* Hover overlay with links */}
        {(githubUrl || liveUrl) && (
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm opacity-0
            group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                  bg-slate-800 border border-slate-700 text-gray-200
                  hover:border-indigo-500 hover:text-indigo-400 transition-colors duration-200"
              >
                <LuGithub size={16} />
                Code
              </Link>
            )}
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                  bg-indigo-600 text-white hover:bg-indigo-500 transition-colors duration-200"
              >
                <LuExternalLink size={16} />
                Live Demo
              </Link>
            )}
          </div>
        )}

        {/* Prev / Next arrows */}
        {hasMultiple && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                w-8 h-8 rounded-full bg-slate-900/70 border border-slate-700
                flex items-center justify-center text-gray-300
                hover:bg-slate-800 hover:text-white transition-all duration-200
                opacity-0 group-hover:opacity-100"
            >
              <LuChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10
                w-8 h-8 rounded-full bg-slate-900/70 border border-slate-700
                flex items-center justify-center text-gray-300
                hover:bg-slate-800 hover:text-white transition-all duration-200
                opacity-0 group-hover:opacity-100"
            >
              <LuChevronRight size={16} />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {hasMultiple && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {imagePaths.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200
                  ${i === current ? "bg-white w-3" : "bg-white/40"}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-100 mb-2
          group-hover:text-indigo-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          {description}
        </p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-indigo-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}