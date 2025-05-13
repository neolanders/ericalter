import React, { useState } from 'react';
import { CodeBracketIcon, UserGroupIcon, Cog6ToothIcon, RocketLaunchIcon, ChatBubbleLeftRightIcon, WrenchScrewdriverIcon, AcademicCapIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/solid';

const skills = [
  {
    label: "Frontend Development",
    icon: <CodeBracketIcon className="w-8 h-8" />,
    color: "bg-blue-500 hover:bg-blue-700",
    popup: "It's responsible. Pick up new technologies as required.",
  },
  {
    label: "Quick Learner",
    icon: <AcademicCapIcon className="w-8 h-8" />,
    color: "bg-green-500 hover:bg-green-700",
    popup: "Full experience. Strong Coding.",
  },
  {
    label: "Team Player",
    icon: <UserGroupIcon className="w-8 h-8" />,
    color: "bg-yellow-500 hover:bg-yellow-700",
    popup: "Good communication. It's strong.",
  },
  {
    label: "Project Management",
    icon: <Cog6ToothIcon className="w-8 h-8" />,
    color: "bg-purple-500 hover:bg-purple-700",
    popup: "It's flexible. Easy To Maintenance.",
  },
  {
    label: "Backend Development",
    icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
    color: "bg-pink-500 hover:bg-pink-700",
    popup: "It's Stubborn.",
  },
  {
    label: "Growth",
    icon: <ArrowTrendingUpIcon className="w-8 h-8" />,
    color: "bg-orange-500 hover:bg-orange-700",
    popup: "KingMa.",
  },
  {
    label: "Communication",
    icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
    color: "bg-teal-500 hover:bg-teal-700",
    popup: "Good communication.",
  },
  {
    label: "Rocket Power",
    icon: <RocketLaunchIcon className="w-8 h-8" />,
    color: "bg-red-500 hover:bg-red-700",
    popup: "Full experience.",
  },
];

export default function SkillsBubbles() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative flex flex-wrap justify-center items-center gap-8 max-w-3xl mx-auto">
      {skills.map((skill, idx) => (
        <div
          key={skill.label}
          className={`relative flex flex-col items-center group transition-all duration-300`}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Bubble */}
          <div className={`flex items-center justify-center w-24 h-24 rounded-full shadow-lg text-white text-center text-sm font-semibold border-4 border-white ${skill.color} transition-colors duration-300`}>
            {skill.icon}
          </div>
          <span className="mt-2 font-medium">{skill.label}</span>
          {/* Popup */}
          {hovered === idx && (
            <div className="absolute left-1/2 -translate-x-1/2 top-28 z-20 w-56 p-4 bg-white text-gray-800 rounded shadow-lg border border-gray-200 animate-fade-in">
              {skill.popup}
            </div>
          )}
          {/* Connector line (except last bubble) */}
          {idx < skills.length - 1 && (
            <div className="absolute top-1/2 left-full w-8 h-1 bg-gray-300 z-0"></div>
          )}
        </div>
      ))}
    </div>
  );
} 