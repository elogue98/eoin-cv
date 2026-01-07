'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: "DATA_ANALYSIS_&_VISUALIZATION",
    skills: ["Tableau (Server & Desktop)", "Power BI", "Grafana", "Qlikview", "Kibana"]
  },
  {
    name: "PROGRAMMING_&_ETL",
    skills: ["SQL", "Python", "Tableau Prep", "VBA", "R"]
  },
  {
    name: "PROJECT_MANAGEMENT",
    skills: ["AGILE Methodology (Jira)", "Microsoft Office", "Visio"]
  },
  {
    name: "COLLABORATION",
    skills: ["Jira", "Confluence", "SharePoint"]
  }
];

export default function Skills() {
  return (
    <section className="py-20 px-6 md:px-20 max-w-5xl mx-auto border-t border-white/20">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-xl font-bold">{`> ls ./skills`}</span>
        <span className="h-px flex-1 bg-white/20"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border border-white p-6"
          >
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">
              {category.name}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300">
                  <span className="text-gray-500">{`>`}</span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

