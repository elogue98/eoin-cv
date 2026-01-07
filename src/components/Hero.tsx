'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const lineVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-5xl mx-auto pt-20">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        className="space-y-6 font-mono"
      >
        <motion.div variants={lineVariants} className="flex flex-col md:flex-row gap-8 items-start md:items-center border-b border-white/20 pb-8 mb-8">
          <div className="relative w-32 h-32 shrink-0 border border-white grayscale">
             <Image 
               src="/Avatar.JPG" 
               alt="Eoin Logue" 
               fill
               className="object-cover"
               priority
             />
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">:: SYSTEM INFO ::</p>
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-2">
              Eoin Logue
            </h1>
            <p className="text-xl md:text-2xl border-l-2 border-white pl-4">
              Data Analyst_
            </p>
          </div>
        </motion.div>

        <motion.div variants={lineVariants} className="space-y-2 text-sm md:text-base max-w-3xl">
          <p>{`> INIT_BIO_SEQUENCE...`}</p>
          <p>{`> LOADING SKILLS... [####################] 100%`}</p>
          <p className="pt-4 pb-8 leading-relaxed">
            {`> STATUS: ONLINE`} <br/>
            {`> MODE: DATA_DRIVEN_DECISION_MAKING`} <br/>
            {`> MESSAGE: Highly skilled Data Analyst with experience in banking and energy sectors. Proficient in optimising data flows and developing impactful dashboards.`}
          </p>
        </motion.div>

        <motion.div variants={lineVariants} className="flex flex-wrap gap-6">
          <a 
            href="/CV.pdf" 
            download
            className="border border-white px-6 py-3 uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-colors duration-0 flex items-center gap-3"
          >
            [ <Download size={16} /> DOWNLOAD_CV ]
          </a>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-white px-6 py-3 uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-colors duration-0"
          >
            [ CONTACT_ME ]
          </button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 right-10 text-xs animate-pulse hidden md:block">
        SYSTEM_READY_
      </div>
    </section>
  );
}
