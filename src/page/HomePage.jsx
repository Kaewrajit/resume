/* eslint-disable react/no-unescaped-entities */
import profile from "../assets/profile.png";
import Navbar from "../components/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
function HomePage() {
  return (
    <>
      <Navbar />
      <section
        id="home"
        className="pt-32  box-border  border-4 border-orange-700"
      >
        <div className="md:flex  justify-center items-center gap-10 ">
          <div className="flex  justify-center items-center border-4 border-orange-500 ">
            <img className=" max-w-md" src={profile} />
          </div>
          <div className="flex flex-col  border-4 border-orange-700 gap-4 ">
            <p className="text-3xl  ">Hello 👋 </p>
            <h1 className="text-6xl font-bold">I'm Rajitkaew</h1>
            <p className="text-3xl text-center ">Frontend Developer</p>
            <button>Download CV</button>
            <button>Contact Info</button>
            <button>
              <FaGithub />
            </button>
            <button>
              <FaLinkedin />
            </button>
          </div>
        </div>
      </section>
      <AboutMe />
      <Skills />
    </>
  );
}

export default HomePage;
