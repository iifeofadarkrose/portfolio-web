import { useState, useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectsDesign from "./components/ProjectsDesign";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Skills from "./components/Skills";
import { motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);
  const [initParticles, setInitParticles] = useState(false);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(loaderTimeout);
  }, []);

  useEffect(() => {
    if (!loading) {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInitParticles(true);
      });
    }
  }, [loading]);

  const scrollToTop = () => {
    const scrollToTopAnimation = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        window.scrollTo(0, scrollTop - 45); // Шаг скролла - уменьшение на 20 пикселей
        window.requestAnimationFrame(scrollToTopAnimation);
      }
    };

    scrollToTopAnimation();
  };

  return (
    <div
      style={
        loading
          ? {
              background: "#000000",
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }
          : {}
      }
    >
      {loading ? (
        <div
          className="loader"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#ffffff"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : null}
      <div style={{ position: "relative", zIndex: 1 }}>
        {!loading && initParticles && (
          <Particles
            id="tsparticles"
            options={{
              background: {
                color: {
                  value: "#000000",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 1,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        )}
        {!loading && (
          <div style={{ position: "relative", zIndex: 1 }}>
            <Sidenav />
            <Main />
            <Skills />
            <Projects />
            <ProjectsDesign />
            <Contact />
            <motion.button
              whileTap={{ scale: 0.9 }} // Эффект при нажатии кнопки
              onClick={scrollToTop}
              style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                border: "none",
                outline: "none",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                zIndex: 9999,
              }}
            >
              <span style={{ fontSize: "30px", lineHeight: "0" }}>↑</span>
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
