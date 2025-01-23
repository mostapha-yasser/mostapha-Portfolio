import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center m-10">
        <h1 className="font-bold text-4xl mb-4 text-center"> My Technical Skills</h1>
          <img
  src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=28&duration=2000&pause=500&center=true&vCenter=true&random=false&width=435&color=115e59&lines=HTML+5;CSS+3;Bootstrap;Javascript;Typescript;Reactjs;tailwind+css;Nodejs;mongodb;Redux;Figma;"
  alt="Technical Skills Typing SVG"
          />
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");