"use client";

import { getTransition } from "@/utils/getTransition";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className='wrapper section-padding h-[calc(100vh-5rem)] grid grid-cols-5'>
      {/* FIRST COL */}
      <div className='w-full h-full'>
        <div className='w-full h-4/6 overflow-hidden'>
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition()}
            className='w-full h-full'
          >
            <Image
              src='https://images.pexels.com/photos/4982737/pexels-photo-4982737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Woman in Black and Brown Long Sleeve Shirt Raising Her Hands'
              width={300}
              height={300}
              priority
              className='w-full h-full object-cover'
            />
          </motion.div>
        </div>
      </div>
      {/* SECOND COL */}
      <div className='w-full h-full'></div>
      {/* THIRD COL */}
      <div className='w-full h-full flex items-center'>
        <div className='w-full h-4/6 overflow-hidden'>
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition(0.2)}
            className='w-full h-full'
          >
            <Image
              src='https://images.pexels.com/photos/8185815/pexels-photo-8185815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Woman with her Eyes Closed holding Buckwheat Flowers'
              width={300}
              height={300}
              priority
              className='w-full h-full object-cover'
            />
          </motion.div>
        </div>
      </div>
      {/* FOURTH COL */}
      <div className='w-full h-full'></div>
      {/* FIFTH COL */}
      <div className='w-full h-full flex items-end'>
        <div className='w-full h-4/6 overflow-hidden'>
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition(0.4)}
            className='w-full h-full'
          >
            <Image
              src='https://images.pexels.com/photos/3925875/pexels-photo-3925875.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Yellow Instant Camera on Top of Ripped Paper Pages'
              width={300}
              height={300}
              priority
              className='w-full h-full object-cover'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
