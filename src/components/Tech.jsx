import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useDeviceContext } from "../context/DeviceContext";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const Tech = () => {
  const { isMobile } = useDeviceContext();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="w-full flex flex-col items-center mb-10">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`${styles.sectionHeadText} text-center`}
        >
          My Technical Skills
        </motion.h1>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-full"
          src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=28&duration=2000&pause=500&center=true&vCenter=true&random=false&width=435&color=115e59&lines=HTML+5;CSS+3;Bootstrap;Javascript;Typescript;Reactjs;tailwind+css;Nodejs;mongodb;Redux;Figma;"
          alt="Technical Skills Typing SVG"
        />
      </div>

      {isMobile ? (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-4 justify-center items-center w-full"
        >
          {technologies.map((technology) => (
            <motion.div
              key={technology.name}
              variants={itemVariants}
              className="flex flex-col items-center justify-center p-3 border rounded-lg shadow-md bg-white/10 backdrop-blur-sm"
            >
              <motion.img 
                src={technology.icon} 
                alt={technology.name} 
                className="w-12 h-12 mb-2"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
              />
              <span className="text-base font-medium text-white text-center">{technology.name}</span>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-row flex-wrap justify-center gap-10"
        >
          {technologies.map((technology) => (
            <motion.div 
              key={technology.name}
              variants={itemVariants}
              className="w-28 h-28"
            >
              <BallCanvas icon={technology.icon} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
