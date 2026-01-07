'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: "NEON_NEXUS",
    description: "Decentralized identity management dashboard.",
    tags: ["NEXT.JS", "WEB3", "TAILWIND"],
    link: "#",
    github: "#"
  },
  {
    title: "VOID_CHAT",
    description: "Encrypted ephemeral messaging platform.",
    tags: ["REACT", "SOCKET.IO", "NODE"],
    link: "#",
    github: "#"
  },
  {
    title: "SYNTH_UI",
    description: "Retro-futuristic component library.",
    tags: ["TYPESCRIPT", "STORYBOOK", "CSS"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 max-w-5xl mx-auto border-t border-white/20">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-xl font-bold">{`> ls ./projects`}</span>
        <span className="h-px flex-1 bg-white/20"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-white p-6 relative group hover:bg-white hover:text-black transition-colors duration-0 cursor-pointer h-full flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <Folder size={24} className="stroke-1" />
                <div className="flex gap-3">
                   <a href={project.github} className="hover:underline opacity-0 group-hover:opacity-100 transition-opacity duration-0">[SRC]</a>
                   <a href={project.link} className="hover:underline opacity-0 group-hover:opacity-100 transition-opacity duration-0">[DEMO]</a>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">
                {project.title}
              </h3>
              
              <p className="text-sm mb-6 leading-relaxed opacity-80 group-hover:opacity-100">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs border border-white/30 px-2 py-1 group-hover:border-black/30">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
