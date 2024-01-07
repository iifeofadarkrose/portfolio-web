import { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail, AiOutlinePicture } from 'react-icons/ai';
import { GrProjects } from 'react-icons/gr';
import { Link } from 'react-scroll';

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu size={40} onClick={handleNav} className='absolute fill-white top-4 right-4 z-[99] border m-3 p-2 rounded-3xl border-white md:hidden' />
            {nav ? (
                 <div className='fixed w-full h-screen bg-black/75 flex flex-col justify-center items-center z-20'>
                 <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-800'>
                     <AiOutlineHome size={20}/>
                     <span className='pl-4 '>Home</span>
                 </a>
                 <a onClick={handleNav} href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-800'>
                     <GrProjects size={20}/>
                     <span className='pl-4 '>Work</span>
                 </a>
                 <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-800'>
                     <AiOutlineProject size={20}/>
                     <span className='pl-4 '>Projects</span>
                 </a>
                 <a onClick={handleNav} href="#projects-design" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-800'>
                     <AiOutlinePicture size={20}/>
                     <span className='pl-4 '>Projects-design</span>
                 </a>
                 <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-800'>
                     <AiOutlineMail size={20}/>
                     <span className='pl-4 '>Contact</span>
                 </a>
             </div>
            ) : (
                ''
            )}

            {/* The Block that appears on larger screens */}
            <div className='md:block hidden fixed top-[25%] z-10 '>
                <div className='flex flex-col'>
                    <Link
                        to='main'
                        smooth={true}
                        offset={-80} 
                        duration={700}
                        className='w-[75%] flex justify-center item-center rounded-full shadow-lg bg-gray-100 border-[#001b5e] border-2 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome size={20} />
                    </Link>
                    <Link
                        to='work'
                        smooth={true}
                        offset={-80} 
                        duration={700}
                        className='w-[75%] flex justify-center item-center rounded-full shadow-lg bg-gray-100 border-[#001b5e] border-2 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <GrProjects size={20} />
                    </Link>
                    <Link
                        to='projects'
                        smooth={true}
                        offset={-80} 
                        duration={700}
                        className='w-[75%] flex justify-center item-center rounded-full shadow-lg bg-gray-100 border-[#001b5e] border-2 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineProject size={20} />
                    </Link>
                    <Link
                        to='projects-design'
                        smooth={true}
                        offset={-80} 
                        duration={700}
                        className='w-[75%] flex justify-center item-center rounded-full shadow-lg bg-gray-100 border-[#001b5e] border-2 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlinePicture size={20} />
                    </Link>
                    <Link
                        to='contact'
                        smooth={true}
                        offset={200}
                        duration={700}
                        className='w-[75%] flex justify-center item-center rounded-full shadow-lg bg-gray-100 border-[#001b5e] border-2 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail size={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidenav;
