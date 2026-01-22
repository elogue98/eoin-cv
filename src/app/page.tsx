'use client';

import { cvData } from '@/data/cvData';
import { motion } from 'framer-motion';
import { LayoutDashboard, Code2, Briefcase, GraduationCap, ArrowLeft, Download, Crown, Activity, Award, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 font-sans">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-72 bg-slate-900 text-white p-6 shadow-xl z-20">
          <div className="flex items-center gap-3 mb-10 px-4">
            <span className="font-semibold text-lg tracking-tight">CV</span>
          </div>

          <nav className="space-y-2 flex-1">
            {[
              { icon: Briefcase, label: 'Employment Experience', id: 'experience' },
              { icon: Code2, label: 'Key Skills', id: 'skills' },
              { icon: GraduationCap, label: 'Education', id: 'education' },
              { icon: Award, label: 'Interests', id: 'interests' },
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(item.id)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all hover:bg-slate-800 text-slate-400 hover:text-white group hover:translate-x-1 text-left"
              >
                <item.icon size={18} className="group-hover:text-blue-400 transition-colors shrink-0" />
                <span className="leading-tight">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 relative scroll-smooth" id="overview">

          {/* Header */}
          <header className="flex flex-col xl:flex-row justify-between items-start gap-6 mb-8">
            <div className="flex-1 w-full">
              <h1 className="text-4xl font-bold text-slate-900 mb-6">{cvData.personal.name}</h1>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="relative w-32 h-32 shrink-0 rounded-full overflow-hidden border-4 border-slate-50 shadow-inner">
                  <img src={cvData.personal.avatar} alt={cvData.personal.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="font-medium text-slate-900 mb-3 text-lg">{cvData.personal.address} | {cvData.personal.phone} | {cvData.personal.email}</p>
                  <p className="text-slate-600 leading-relaxed text-base">{cvData.personal.bio}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 shrink-0">
              <a href="/CV.pdf" download className="flex items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-xl text-sm hover:bg-slate-50 hover:border-blue-300 transition-all shadow-sm text-slate-600 font-medium h-fit">
                <Download size={18} />
                Export CV
              </a>
              <button onClick={() => window.location.href = `mailto:${cvData.personal.email}`} className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm hover:bg-blue-700 shadow-md shadow-blue-200 transition-all font-medium h-fit">
                Email Eoin
              </button>
            </div>
          </header>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Activity size={24} /></div>
                <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded font-bold">ANALYTICAL</span>
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-1">6+</h3>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Years Experience</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><Code2 size={24} /></div>
                <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded font-bold font-mono">TECH STACK</span>
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-1">16+</h3>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Tools & Technologies</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-orange-50 text-orange-600 rounded-xl"><Crown size={24} /></div>
                <span className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded font-bold">LAST YEAR</span>
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-1">1500+</h3>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Games of Chess</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Experience Timeline */}
            <div className="lg:col-span-2 space-y-8" id="experience">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="text-blue-600" size={20} />
                <h2 className="text-lg font-bold text-slate-800">Employment Experience</h2>
              </div>

              <div className="space-y-6">
                {cvData.experience.map((job, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden p-6 hover:border-blue-200 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                        <p className="text-blue-600 font-semibold text-lg">{job.company}</p>
                      </div>
                      <span className="inline-block mt-2 md:mt-0 text-xs font-mono bg-slate-100 px-3 py-1 rounded-full text-slate-600 border border-slate-200">
                        {job.period}
                      </span>
                    </div>

                    <div className="mb-6 bg-slate-50 p-4 rounded-lg border border-slate-100 text-slate-600 text-[15px] leading-loose">
                      {job.summary}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[5.5fr_6.5fr] gap-8">
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Responsibilities</h4>
                        <ul className="space-y-3">
                          {job.responsibilities?.map((resp, i) => (
                            <li key={i} className="text-[15px] text-slate-600 flex gap-2 leading-relaxed">
                              <span className="text-blue-400 mt-1">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Achievements</h4>
                        <ul className="space-y-3">
                          {job.achievements?.map((ach, i) => (
                            <li key={i} className="text-[15px] text-slate-600 flex gap-2 leading-relaxed">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills & Education Column */}
            <div className="flex flex-col gap-8 h-full">

              {/* Skills */}
              <div id="skills">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="text-purple-600" size={20} />
                  <h2 className="text-lg font-bold text-slate-800">Key Skills</h2>
                </div>
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 sticky top-6">
                  {cvData.skills.categories.map((cat, i) => (
                    <div key={i} className="mb-8 last:mb-0">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">{cat.name}</h3>
                      <div className="space-y-4">
                        {cat.items
                          .sort((a, b) => b.level - a.level) // Sort by proficiency level descending
                          .map((skill, j) => (
                            <div key={j}>
                              <div className="flex justify-between text-sm mb-1.5">
                                <span className="font-medium text-slate-700">{skill.name}</span>
                              </div>
                              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1, delay: 0.2 }}
                                  className={`h-full rounded-full ${i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-purple-500' : i === 2 ? 'bg-orange-500' : 'bg-green-500'}`}
                                />
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div id="education">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="text-orange-600" size={20} />
                  <h2 className="text-lg font-bold text-slate-800">Education</h2>
                </div>
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                  {cvData.education.map((edu, index) => (
                    <div key={index} className="mb-6 last:mb-0 relative pl-4 border-l-2 border-slate-100">
                      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-slate-300"></div>
                      <h4 className="font-bold text-slate-900 text-sm leading-tight mb-1">{edu.degree}</h4>
                      <p className="text-xs text-slate-500 mb-2">{edu.school}</p>
                      <p className="text-xs font-medium text-blue-600 bg-blue-50 inline-block px-2 py-1 rounded">{edu.result}</p>
                      <p className="text-xs text-slate-400 mt-1">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div id="interests" className="flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-yellow-500" size={20} />
                  <h2 className="text-lg font-bold text-slate-800">Activities & Interests</h2>
                </div>
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 flex-1 flex flex-col justify-center">
                  <ul className="space-y-4">
                    {cvData.interests.map((interest, i) => (
                      <li key={i} className="text-[15px] text-slate-600 flex gap-3 leading-relaxed">
                        <span className="text-yellow-500 mt-1 shrink-0">•</span>
                        <span>{interest}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <footer className="mt-12 text-center text-slate-400 text-sm py-8 border-t border-slate-200">
            <p>© {new Date().getFullYear()} Eoin Logue.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
