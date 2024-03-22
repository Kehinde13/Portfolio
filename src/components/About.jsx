


function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-300">
              About
            </p>
            <div></div>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-4xl font-bold sm:text-right">
            <p>Hi, I&apos;m Kenny, Nice to meet you please take a look around</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. My educational background in computer science
              has provided me with a strong foundation in programming languages. like JavaScript,
              and C, during my studies i delved deep into algorithms, data structures, and software 
              engineering principles, which gave me a understanding of the technology stack that powers
              the web, With each project i complete i gain valuable experience and i&apos;m growing into a 
              skilled developer that can turn any web design into a reality
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
