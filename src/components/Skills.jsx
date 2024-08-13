import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import typeScript from '../assets/file-type-typescript-official.svg';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Next from '../assets/nextjs.svg'

function Skills() {
  return (
    <div name="skills" className='bg-[#08192f] py-10 text-gray-400 '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Experience</p>
                <p className='py-4'>This are the technologies i&apos;ve worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="html icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="css icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="html JavaScript" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                    <p className='my-4'>ReactJS</p>
                </div>
                <div className='shadow shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={typeScript} alt="Firebase icon" />
                    <p className='my-4'>TypeScript</p>
                </div>
                <div className='shadow shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Next} alt="Vue icon" />
                    <p className='my-4'>NextJS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills