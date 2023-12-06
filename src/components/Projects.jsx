import React from 'react'
import ProjectItem from './ProjectItem'
import Books from '../assets/B.png'
import Home from '../assets/HOME.png'
import Avatar from '../assets/avatar.jpg'
import desktop from '../assets/desktop.png'
import webstudio from '../assets/Web.png'
import bodyparts from '../assets/Body.png'
import choko from '../assets/choko.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
    <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
    <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque voluptate nemo laboriosam magni dolore officia repellat saepe, quis delectus!</p>
    <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={Books} title='Book-shelf' />
        <ProjectItem img={choko} title='Home project' />
        {/* <ProjectItem img={desktop} title='Desktop web' /> */}
        <ProjectItem img={webstudio} title='Web-Studio project' />
        <ProjectItem img={bodyparts} title='Powerpulse project' />
    </div>
    </div>
  )
}

export default Projects