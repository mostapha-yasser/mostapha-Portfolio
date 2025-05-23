import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className='lg:w-[350px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.8, 0.8)}
        className='w-full  green-pink-gradient p-[1px] rounded-[20px] shadow-card '
        whileHover={{
          rotateX: 15,
          rotateY: 15,
          scale: 1.05,
          transition: {
            duration: 0.4,
            ease: "easeOut"
          }
        }}
        style={{
          perspective: 1000,
          transformStyle: "preserve-3d"
        }}
      >
        <div
          className='bg-cartbg rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          style={{
            backfaceVisibility: "hidden"
          }}
        >
          <motion.img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
            whileHover={{
              rotateZ: 360,
              transition: {
                duration: 0.6,
                ease: "easeOut"
              }
            }}
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};
const About = () => {
  return (
    < >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 p-10 lg:p-0'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");