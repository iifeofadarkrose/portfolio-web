import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ProjectItem from "./ProjectItem";
import Fish from "../assets/fish.png";
import Forest from "../assets/forest.png";
import Mountine from "../assets/mountine.png";
import English from "../assets/english.png";

const ProjectsDesign = () => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;

      const projectsDesign = document.getElementById("projects-design");
      const projectsDesignTop = projectsDesign.offsetTop;

      if (scrolled > projectsDesignTop - windowHeight / 2) {
        controlsLeft.start({ opacity: 1, x: 0 });
        controlsRight.start({ opacity: 1, x: 0 });
      } else {
        controlsLeft.start({ opacity: 0, x: -100 });
        controlsRight.start({ opacity: 0, x: 100 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controlsLeft, controlsRight]);

  return (
    <div
      id="projects-design"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16"
    >
      <h1 className="text-4xl font-bold text-center text-white">
        Projects-Design
      </h1>
      <p className="text-center py-8 text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        neque voluptate nemo laboriosam magni dolore officia repellat saepe,
        quis delectus!
      </p>
      <motion.div className="grid grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={controlsLeft}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <ProjectItem
              img={Fish}
              title="Fishing masters"
              moreInfoLink="https://www.behance.net/gallery/172679613/Fishing-Masters-Project"
            />
          </div>
          <div className="mb-12">
            <ProjectItem
              img={Forest}
              title="Eco tourism"
              moreInfoLink="https://www.behance.net/gallery/172679531/Eco-Tourism-Project"
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
              img={English}
              title="English academy"
              moreInfoLink="https://www.behance.net/gallery/172679233/Learn-English-Academy"
            />
          </div>
          <div className="mb-12">
            <ProjectItem
              img={Mountine}
              title="Climb Advantures"
              moreInfoLink="https://www.behance.net/gallery/172679373/Climb-Advantures-Project"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectsDesign;
