'use client';

import { motion } from 'framer-motion';

const experience = [
  {
    role: "Data Analyst",
    company: "Citi",
    period: "JUL 2022 - PRESENT",
    description: [
      "Lead the design and development deployment of dashboard solutions for stakeholders within End User Services (EUS).",
      "Develop ETL processes with Python and SQL to transform data from various sources (CSV, TXT, JSON).",
      "Lead project planning by creating documentation, establishing timelines, and tracking progress.",
      "Facilitate adoption of modern Citi certified tooling and migration to latest technology.",
      "Led development of the Support Service Chatbot Dashboard in Tableau, improving operational efficiency.",
      "Designed high-performance dashboards using Tableau and Grafana, reducing load times by 90% via SQL optimization.",
      "Reengineered analytics methodologies by introducing a centralised dashboard catalog.",
      "Led development of the EUS Product Performance Dashboard, empowering product managers with actionable data.",
      "Mentored colleagues on Tableau best practices and ETL optimization as an advisor within the UX Analytics team.",
      "Resolved complex data quality challenges by implementing automated validation processes in Python and Tableau Prep."
    ]
  },
  {
    role: "Technology Analyst",
    company: "Citi",
    period: "JUL 2021 - JUL 2022",
    description: [
      "Assisted in Lab-as-a-Service project by analysing existing labs and engaging with vendors.",
      "Chaired the EUS Architecture Council, coordinating meetings and identifying process improvements.",
      "Contributed to ARM Processors business case by documenting technical viability and forecasting metrics.",
      "Improved EUS Architecture Council processes by creating a centralised solution in SharePoint."
    ]
  },
  {
    role: "Business Analyst",
    company: "Power NI",
    period: "JUN 2019 - AUG 2020",
    description: [
      "Analysed and interpreted trends in staff productivity and customer behaviour.",
      "Liaised with Management Team to develop better reporting mechanisms.",
      "Implemented automation solutions using VBA to create efficiencies and reduce human error.",
      "Designed and implemented a new commission payment structure, increasing sales conversion by 8%."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 px-6 md:px-20 max-w-5xl mx-auto border-t border-white/20">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-xl font-bold">{`> cat experience.log`}</span>
        <span className="h-px flex-1 bg-white/20"></span>
      </div>

      <div className="space-y-12">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
              <h3 className="text-2xl font-bold uppercase">{job.role}</h3>
              <div className="flex-1 md:border-b border-dashed border-gray-600 relative top-[-6px]"></div>
              <span className="text-lg font-bold">{job.company}</span>
            </div>
            
            <p className="text-sm text-gray-400 mb-4 font-mono">[{job.period}]</p>
            
            <ul className="space-y-2 ml-4 md:ml-8 border-l border-white/20 pl-6">
              {job.description.map((item, i) => (
                <li key={i} className="text-gray-300 relative">
                  <span className="absolute -left-[33px] text-gray-500">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
