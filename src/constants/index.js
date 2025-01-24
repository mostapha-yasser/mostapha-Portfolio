import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  bootstrap,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  itiGraduates,
  knowly,
  chatApp,
  jobit,
  tripguide,
  threejs,
  iti,
  upwork,
  sha,
 sameh,
  fatma,
  heba,
  amany,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "UI UX Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [


  {
    title: "Field Talent",
    company_name: "Self-employed",
    icon: upwork,
    iconBg: "#383E56",
    date: "Oct 2024 – Present",
    points: [
      "Led a team to create a project that connects civil engineers with clients seeking their services, ensuring seamless collaboration and efficient project delivery.",
      "Designed and developed the platform using React and Tailwind CSS, focusing on user-friendly interfaces and streamlined workflows.",
      "Project Link: https://github.com/mostapha-yasser/field-talent.git",
    ],
  },
  {
    title: "Front-End Developer (Freelancer)",
    company_name: "ITI Graduates Project",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "Sep 2024 – Oct 2024",
    points: [
      "Led the front-end team using React, Tailwind CSS, and Framer Motion to develop a performance-optimized interface aligned with ITI's branding.",
      "Integrated xlsx npm package for data export functionality.",
      "Designed wireframes and prototypes using Whimsical for efficient project planning.",
      "Project Link: https://github.com/ITI-Graduats",
    ],
  },
  {
    title: "Principles of UX/UI Design",
    company_name: "Meta ",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jun 2024",
    points: [
      "Completed an online non-credit course authorized by Meta on Principles of UX/UI Design.",
      "Acquired foundational knowledge in UX/UI principles, enhancing the ability to create user-centric designs.",
      "Certificate Link: https://coursera.org/verify/LSW58K5EWY6W",
    ],
  },
  {
    title: "Full Stack Developer (Internship)",
    company_name: "Information Technology Institute (ITI)",
    icon: iti,
    iconBg: "#383E56",
    date: "May 2024 – Sep 2024",
    points: [
      "Participated in an intensive training program on Full Stack Web Development using MERN stack.",
      "Gained hands-on experience in developing scalable and high-quality web applications.",
      "Collaborated with peers to create dynamic projects showcasing advanced front-end and back-end skills.",
    ],
  },
  {
    title: " Engineer (Graduate)",
    company_name: "El Shorouk Higher Institute of Engineering",
    icon: sha,
    iconBg: "#E6DEDD",
    date: "Oct 2018 – July 2023",
    points: [
      "Completed a Bachelor’s Degree in Engineering with a Graduation Project Grade of Excellent.",
      "Developed resilience, adaptability, and a strong analytical mindset applicable to software development.",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "Mostapha Yasser transformed our website into a masterpiece, matching the beauty of our product perfectly. His expertise and creativity are truly unparalleled, and we’re grateful.",
    name: "sameh elmnshawy",
    designation: "Cassation lawyer",
    company: "Al-Minshawy's office",
    image:sameh,
  },
  {
    testimonial:
      "I've never encountered a developer as dedicated to client success as Mostapha Yasser. His attention to detail and commitment to quality are simply exceptional.",
    name: "Fatma Youns",
    designation: "Front-end",
    company: "One-solution",
    image: fatma,
  },
  {
    testimonial:
      "Collaborating with Mostapha Yasser on my graduate project was incredible. His professionalism, dedication, and skills ensured a seamless process, producing results that exceeded expectations.",
    name: "Dr.Heba M Abd El Atty",
    designation: "Professor of communications",
    company: "Faculty of Engineering, portsaid university",
    image: heba,
  },
  {
    testimonial:
      "Mostapha Yasser’s front-end development expertise delivered outstanding results for our project. His attention to detail, creativity, and dedication ensured everything met our high standards perfectly.",
    name: "Amany",
    designation: "Project Manager",
    company: "Educational Buildings Authority",
    image: amany,
  },
];

const projects = [
  {
    name: "Field Talent",
    description:
      "A platform built with React and Tailwind CSS to connect civil engineers with clients, featuring a modern interface and tools for streamlined collaboration and efficient project management.",
    tags: [
      {
        name: "react",
        color: "text-blue-500",
      },
      {
        name: "tailwind",
        color: "text-pink-500",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
    ],
    image: knowly,
    source_code_link: "https://github.com/mostapha-yasser/field-talent.git",
  },
  {
    name: "ITI Graduates Platform",
    description:
      "Developed a high-performance platform for ITI graduates using React and Tailwind CSS, implementing smooth animations with Framer Motion and adding efficient data export functionality.",
    tags: [
      {
        name: "react",
        color: "text-blue-500",
      },
      {
        name: "tailwind",
        color: "text-pink-500",
      },
      {
        name: "framer-motion",
        color: "text-green-500",
      },
    ],
    image: itiGraduates,
    source_code_link: "https://github.com/ITI-Graduats",
  },
  {
    name: "Chat App",
    description:
      "Designed and implemented a responsive chat application using HTML and CSS, ensuring pixel-perfect accuracy to match the design while focusing on a clean and modern interface.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: chatApp,
    source_code_link:
      "https://github.com/mostapha-yasser/chat-app-css-illustration.git",
  },
];export { services, technologies, experiences, testimonials, projects };
