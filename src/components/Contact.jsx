import React from "react";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";

const ContactInfo = [
  { 
    type: "Email", 
    value: "mostaphyasser18@gmail.com", 
    link: "mailto:mostaphyasser18@gmail.com" 
  },
  { 
    type: "GitHub", 
    value: "mostapha-yasser", 
    link: "https://github.com/mostapha-yasser" 
  },
  { 
    type: "Phone", 
    value: "+20 108 013 1563", 
    link: "tel:+201080131563" 
  },
  { 
    type: "Phone", 
    value: "+20 102 703 5927", 
    link: "tel:+201027035927" 
  },
  { 
    type: "LinkedIn", 
    value: "mostapha-yasser", 
    link: "https://www.linkedin.com/in/mostapha-yasser" 
  }
];

const ContactLink = ({ type, value, link }) => (
  <div className="flex items-center mb-3 bg-secondary/5 p-3 rounded-lg transition-all hover:bg-secondary/10">
    <strong className="mr-2 text-white min-w-[80px]">{type}:</strong>
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className='text-blue-400 hover:text-blue-300 truncate max-w-full'
    >
      {value}
    </a>
  </div>
);

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-contact p-8 rounded-2xl shadow-card'
      >
        <h3 className={`${styles.sectionHeadText} text-white`}>Get in Touch</h3>
        
        <div className='mt-6'>
          {ContactInfo.map((contact, index) => (
            <ContactLink 
              key={index} 
              type={contact.type} 
              value={contact.value} 
              link={contact.link} 
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
