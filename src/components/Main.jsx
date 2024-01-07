import { TypeAnimation } from "react-type-animation";
import { FaBehance, FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import comp from "../assets/comp.png";
const Main = () => {
  return (
    <div id="main" style={{ position: "relative", height: "100vh" }}>
      <div
        id="video-background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        <img
          src={comp}
          className="w-full h-full object-cover object-center"
          alt=""
        />
      </div>
      <div className="ssm: max-w-[800px] m-auto py-20 flex flex-col justify-center lg:items-start pl-[20%] pt-[30%] ">
        <h1 className="smm:text-3xl sm:text-5xl text-white">
          Group of web developers/designers
        </h1>
        <h2 className="flex center smm:text-2xl sm:text-3xl text-2xl pt-4 text-white">
          We make
          <TypeAnimation
            sequence={[
              "Web-sites",
              2000,
              "Landing pages",
              2000,
              "Web/mobile design",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "1em",
              paddingLeft: "5px",
              color: "rgb(109, 155, 229)",
            }}
            repeat={Infinity}
          />
        </h2>

        <div className="flex justify-between pt-6 max-w-[200px] w-full">
          <a href="https://github.com/iifeofadarkrose">
            <FaGithubAlt className="cursor-pointer fill-white" size={24} />
          </a>
          <a href="https://www.behance.net/vladislbabenko1">
            <FaBehance className="cursor-pointer fill-white" size={24} />
          </a>
          <a href="https://www.linkedin.com/in/viacheslav-babenko/">
            <FaLinkedin className="cursor-pointer fill-white" size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
