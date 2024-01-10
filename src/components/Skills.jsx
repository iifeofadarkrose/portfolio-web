import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaSketch,
} from "react-icons/fa";
import { DiMongodb, DiPhotoshop, DiIllustrator } from "react-icons/di";
import { SiExpress } from "react-icons/si";

const Skills = () => {
  return (
    <div id="work" className="flex justify-center font-medium">
      <div className="max-w-xs text-white flex justify-center flex-col items-center md:max-w-xl">
        <p className="smm:text-[10px] sm:text-[12px] text-gray-500 md:text-xl ">
          A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.
        </p>
        <h1 className="text-xl uppercase m-4 md:text-5xl">
          Skills & Experience
        </h1>
        <p className="mb-4 text-center">
          The main area of expertise is front-end development (Design and
          client-side of the web).
        </p>
        <h2 className="text-sm my-8 md:text-lg text-center">
          HTML, CSS, JS, building small and medium web applications with React,
          custom plugins, features, animations, and coding interactive layouts.
          We have also full-stack developer experience with one of the most
          popular data-base MongoDB. <br />
          <p>We also provide web / mobile design services.</p>
        </h2>
        <div className="flex justify-center flex-wrap items-center gap-6 lg:gap-12 mt-[10%] lg:flex-nowrap ">
          <div className="flex flex-col items-center w-[40%] sm:w-[20%]">
            <FaReact className="fill-white text-2xl md:text-3xl lg:text-6xl" />
            <p className="text-white text-xl mt-2">React</p>
          </div>
          <div className="flex flex-col items-center w-[40%] sm:w-[20%]">
            <FaHtml5 className="fill-white text-2xl md:text-3xl lg:text-6xl" />
            <p className="text-white text-xl mt-2">HTML5</p>
          </div>
          <div className="flex flex-col items-center w-[40%] sm:w-[20%]">
            <FaCss3Alt className="fill-white text-2xl md:text-3xl lg:text-6xl" />
            <p className="text-white text-xl mt-2">CSS3</p>
          </div>
          <div className="flex flex-col items-center w-[40%] sm:w-[20%]">
            <FaJs className="fill-white text-2xl md:text-3xl lg:text-6xl" />
            <p className="text-white text-xl mt-2">JavaScript</p>
          </div>
          <div className="flex flex-col items-center w-[40%] sm:w-[20%]">
            <FaNodeJs className="fill-white text-2xl md:text-3xl lg:text-6xl" />
            <p className="text-white text-xl mt-2">NodeJs</p>
          </div>
          <div className="flex flex-col items-center w-[40%] sm:w-[20%]">
            <FaGitAlt className="fill-white text-2xl md:text-3xl lg:text-6xl" />
            <p className="text-white text-xl mt-2">Git</p>
          </div>
          <div className="flex flex-col items-center w-[40%] sm:w-[20%]">
            <DiMongodb className="fill-white text-2xl md:text-3xl lg:text-6xl" />
            <p className="text-white text-xl mt-2">MongoDB</p>
          </div>
          <div className="flex flex-col items-center w-[40%] sm:w-[20%]">
            <SiExpress className="fill-white text-2xl md:text-3xl lg:text-6xl" />
            <p className="text-white text-xl mt-2">Express</p>
          </div>
        </div>

        <div className="flex justify-center flex-row items-center mt-[5%] mb-[15%] gap-4 md:gap-10 md:mt-20">
          <div className="flex flex-col items-center">
            <FaFigma className="fill-white text-xl md:text-3xl lg:text-6xl" />
            <p className="text-white  mt-2">Figma</p>
          </div>
          <div className="flex flex-col items-center">
            <DiPhotoshop className="fill-white text-xl md:text-3xl lg:text-6xl" />
            <p className="text-white  mt-2">Photoshop</p>
          </div>
          <div className="flex flex-col items-center">
            <DiIllustrator className="fill-white text-xl md:text-3xl lg:text-6xl" />
            <p className="text-white mt-2">Illustrator</p>
          </div>
          <div className="flex flex-col items-center">
            <FaSketch className="fill-white text-xl md:text-3xl lg:text-6xl" />
            <p className="text-white mt-2">Sketch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
