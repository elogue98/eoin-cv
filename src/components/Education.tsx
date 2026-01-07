'use client';

import { motion } from 'framer-motion';

const education = [
  {
    degree: "BSc Business Information Technology",
    school: "Queen's University Belfast",
    result: "2:1 (Second Class Honours, Upper Division)",
    period: "2017 - 2021"
  },
  {
    degree: "A-Levels & GCSEs",
    school: "Our Lady & St. Patrick’s College, Belfast",
    result: "A-Levels: Business Studies (A), ICT (B), Govt & Politics (B). GCSEs: 2A, 7B, 1C.",
    period: "2010 - 2017"
  }
];

export default function Education() {
  return (
    <section className="py-20 px-6 md:px-20 max-w-5xl mx-auto border-t border-white/20">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-xl font-bold">{`> cat education.txt`}</span>
        <span className="h-px flex-1 bg-white/20"></span>
      </div>

      <div className="space-y-12">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-2">
              <h3 className="text-xl font-bold uppercase">{edu.degree}</h3>
              <div className="flex-1 md:border-b border-dashed border-gray-600 relative top-[-6px]"></div>
              <span className="text-lg font-bold">{edu.school}</span>
            </div>
            
            <p className="text-sm text-gray-400 mb-2 font-mono">[{edu.period}]</p>
            <p className="text-gray-300 border-l border-white/20 pl-4">
              Result: {edu.result}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

