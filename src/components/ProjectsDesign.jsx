import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ProjectItem from "./ProjectItem";
import Fish from "../assets/fish1.png";
import Forest from "../assets/for1.png";
import Mountine from "../assets/mou1.png";
import English from "../assets/eng.png";

const Projects = () => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;

      const projects = document.getElementById("projects-design");
      const projectsTop = projects.offsetTop;

      if (scrolled > projectsTop - windowHeight / 2) {
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
      className="max-w-[1040px] m-auto md:pl-20 p-4 overflow-hidden mt-[5%]"
    >
      <h1 className="text-4xl font-bold text-center text-white">
        Web-design projects
      </h1>
      <p className="font-medium text-xl text-center text-white py-8">
        Some of our recent web design projects are shown here.
      </p>
      <motion.div className="sm:grid grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={controlsLeft}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <ProjectItem
              img={Fish}
              moreInfoLink={
                "https://www.behance.net/gallery/172679613/Fishing-Masters-Project"
              }
              title="Fishing masters"
            />
          </div>
          <div className="mb-12">
            <ProjectItem
              img={Forest}
              moreInfoLink={
                "https://www.behance.net/gallery/172679531/Eco-Tourism-Project"
              }
              title="Eco tourism agency"
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
              moreInfoLink={
                "https://www.behance.net/gallery/172679233/Learn-English-Academy"
              }
              title="English learning"
            />
          </div>
          <div className="mb-12">
            <ProjectItem
              img={Mountine}
              moreInfoLink={
                "https://www.behance.net/gallery/172679373/Climb-Advantures-Project"
              }
              title="Climb adventures"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
