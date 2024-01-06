import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-center"
        src="https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461216-desk-work.jpg"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/70">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="smm:text-3xl sm:text-5xl text-4xl text-white">
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
                color: "rgb(87, 77, 74)",
              }}
              repeat={Infinity}
            />
          </h2>

          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaFacebookF className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaLinkedin className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
