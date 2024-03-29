import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import ProjectItem from "./ProjectItem";
import Books from "../assets/HOME.png";
import webstudio from "../assets/Tablet.png";
import power from "../assets/power.png";
import choko from "../assets/desktop.png";
import April from "../assets/April.png";
import Dashboard from "../assets/Dashboard.png";

const Projects = () => {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (!animationPlayed) {
        const scrolled = window.scrollY;
        const windowHeight = window.innerHeight;

        const projects = document.getElementById("projects");
        const projectsTop = projects.offsetTop;

        if (scrolled > projectsTop - windowHeight / 2) {
          controlsLeft.start({ opacity: 1, x: 0 });
          controlsRight.start({ opacity: 1, x: 0 });
          setAnimationPlayed(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controlsLeft, controlsRight, animationPlayed]);

  return (
    <div
      id="projects"
      className="max-w-[1040px] m-auto md:pl-20 p-4 overflow-hidden"
    >
      <h1 className="text-3xl font-bold text-center text-white">
        Web-development projects
      </h1>
      <p className="font-medium text-xl text-center text-white py-8">
        Some of our recent web development projects are shown here.
      </p>
      <motion.div className="sm:grid grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={controlsLeft}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <ProjectItem
              img={Books}
              moreInfoLink={"https://iifeofadarkrose.github.io/Bookshelf/"}
              title="Book-shelf"
            />
          </div>
          <div className="mb-12">
            <ProjectItem
              img={choko}
              moreInfoLink={
                "https://iifeofadarkrose.github.io/Project-Chocolate/"
              }
              title="Project Chocolate"
              className="cursor-pointer"
            />
          </div>
          <div className="mb-12">
            <ProjectItem
              img={April}
              moreInfoLink={"https://aprilconcepte.com/"}
              title="April Design Group"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={controlsRight}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <ProjectItem
              img={webstudio}
              moreInfoLink={"https://iifeofadarkrose.github.io/WebStudio/"}
              title="Web-Studio project"
            />
          </div>
          <div className="mb-12">
            <ProjectItem
              img={power}
              moreInfoLink={"https://vern-gora.github.io/PowerPulse"}
              title="Powerpulse project"
            />
          </div>
          <div className="mb-12">
            <ProjectItem
              img={Dashboard}
              moreInfoLink={"https://dashboard-theta-liart.vercel.app/dashboard"}
              title="Powerpulse project"
            />
          </div>
          
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
