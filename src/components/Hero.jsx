import { ArrowRight } from "react-feather";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div name="home" className="bg-[#08192f] w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-3 flex flex-col justify-center h-full">
        <p className="text-[#8892b0]">Hi, My Name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Kehinde Balogun
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I&apos;m a Frontend Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I&apos;m a Frontend web developer specializing in HTML, CSS, Vanilla JS, reactJS
          and NextJS. Currently, I&apos;m Focused on mastering TypeScript, 
          I&apos;m also a graduate of AltSchool Africa, where i studied Frontend Engineering.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <ArrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
