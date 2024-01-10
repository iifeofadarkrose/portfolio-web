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


function App() {
  const [loading, setLoading] = useState(true);
  const [initParticles, setInitParticles] = useState(false);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

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
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
