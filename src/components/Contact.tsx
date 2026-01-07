'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530); // Classic DOS cursor blink rate
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-20 px-6 md:px-20 max-w-5xl mx-auto border-t border-white/20">
       <div className="flex items-center gap-4 mb-12">
        <span className="text-xl font-bold">{`> ./contact_me.sh`}</span>
        <span className="h-px flex-1 bg-white/20"></span>
      </div>
       
       <div className="border border-white p-8 md:p-12 font-mono">
         <p className="mb-6 text-gray-400">
           # Send a transmission.<br/>
           # 57 Royal Lodge Road, Belfast BT8 7UL | 07729431660
         </p>

         <div className="space-y-4 text-lg md:text-xl">
           <div className="flex flex-col md:flex-row gap-2 md:gap-4">
             <span className="text-gray-500 whitespace-nowrap">root@user:~$</span>
             <span className="text-white break-all">
               mail -s "Hello" <a href="mailto:eoinlogue@gmail.com" className="hover:underline hover:bg-white hover:text-black transition-colors px-1">eoinlogue@gmail.com</a>
             </span>
           </div>

           <div className="flex flex-col md:flex-row gap-2 md:gap-4">
             <span className="text-gray-500 whitespace-nowrap">root@user:~$</span>
             <div className="flex gap-6">
               <a href="#" className="flex items-center gap-2 hover:bg-white hover:text-black px-2 transition-colors -ml-2">
                 <span>LINKEDIN</span>
                 <Linkedin size={16} />
               </a>
             </div>
           </div>

           <div className="flex gap-2 mt-8">
             <span className="text-green-500">{`>`}</span>
             <span className={`w-3 h-6 bg-green-500 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
           </div>
         </div>
       </div>
    </section>
  );
}
