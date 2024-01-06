import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ProjectItem from "./ProjectItem";
import Fish from "../assets/fish.png";
import Forest from "../assets/forest.png";
import Mountine from "../assets/mountine.png";
import English from "../assets/english.png";


const Projects = () => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;

      const projects = document.getElementById('projects');
      const projectsTop = projects.offsetTop;

      if (scrolled > projectsTop - windowHeight / 2) {
        controlsLeft.start({ opacity: 1, x: 0 });
        controlsRight.start({ opacity: 1, x: 0 });
      } else {
        controlsLeft.start({ opacity: 0, x: -100 });
        controlsRight.start({ opacity: 0, x: 100 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controlsLeft, controlsRight]);

  return (
    <div id='projects-design' className='max-w-[1040px] m-auto md:pl-20 p-4 overflow-hidden'>
      <h1 className='text-4xl font-bold text-center text-white'>Projects Design</h1>
      <p className='text-center text-white py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque voluptate nemo laboriosam magni dolore officia repellat saepe, quis delectus!</p>
      <motion.div className='sm:grid grid-cols-2 gap-12'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={controlsLeft}
          transition={{ duration: 0.5 }}
        >
          <div className='mb-12'>
            <ProjectItem img={Fish} title='Book-shelf' />
          </div>
          <div className='mb-12'>
            <ProjectItem img={Forest} title='Home project' />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={controlsRight}
          transition={{ duration: 0.5 }}
        >
          <div className='mb-12'>
            <ProjectItem img={Mountine} title='Web-Studio project' />
          </div>
          <div className='mb-12'>
            <ProjectItem img={English} title='Powerpulse project' />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Projects;
