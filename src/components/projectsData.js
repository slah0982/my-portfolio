import { FaCss3, FaHtml5, FaNodeJs } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiExpress } from 'react-icons/si'


const projects = [
    {
        id: 1,
        src: './assets/projects/pr_1.png',
        code: "",
        link: "https://btt.ly/",
        title: "SADO Company",
        description: `A full website with an admin control panel in node.js for an ISP company called SADO`,
        techIcons:
        <div className='tech-icons'>    
            <FaHtml5 className='icon' style={{color: 'darkorange'}}/>
            <FaCss3 className='icon' style={{color: 'blue'}}/>
            <RiJavascriptFill className='icon' style={{color: 'yellow'}}/>
            <FaNodeJs className='icon' style={{color: 'darkgreen'}}/>
            <SiExpress className='icon' style={{color: 'darkgreen'}}/>
            <GrMysql className='icon' style={{color: 'blue'}}/>
        </div>,

    },
    {
        id: 2,
        src: './assets/projects/pr_2.png',
        code: "https://github.com/slah0982/Barber-website",
        link: "https://slah0982.github.io/Barber-website/",
        title: "Barber Shop",
        description: `A website for a barber shop`,
        techIcons: <div className='tech-icons'>
            <FaHtml5 className='icon' style={{color: 'darkorange'}}/>
            <FaCss3 className='icon' style={{color: 'blue'}}/>
            <RiJavascriptFill className='icon' style={{color: 'yellow'}}/>
        </div>
    },
    {
        id: 3,
        src: './assets/projects/pr_3.png',
        code: "https://github.com/slah0982/mohmmed-website.git",
        link: "https://slah0982.github.io/mohmmed-website/",
        title: "Mohmmed Al-maghrby",
        description: `Personal website for my brother who works as a mechanic`,
        techIcons: <div className='tech-icons'>
            <FaHtml5 className='icon' style={{color: 'darkorange'}}/>
            <FaCss3 className='icon' style={{color: 'blue'}}/>
        </div>
    },
    {
        id: 4,
        src: './assets/projects/pr_4.png',
        code: "https://github.com/slah0982/Template-portfolio.git",
        link: "https://slah0982.github.io/Template-portfolio/",
        title: "Tempate portfolio",
        description: `A template single page for a fake compony`,
        techIcons: <div className='tech-icons'>
            <FaHtml5 className='icon' style={{color: 'darkorange'}}/>
            <FaCss3 className='icon' style={{color: 'blue'}}/>
            <RiJavascriptFill className='icon' style={{color: 'yellow'}}/>
        </div>
    },
    {
        id: 5,
        src: './assets/projects/pr_5.png',
        code: "https://github.com/slah0982/landing-pages.git",
        link: "https://slah0982.github.io/landing-pages/",
        title: "landing pages",
        description: `A group of landing pages with pure HTML and CSS.
            The pages desgins I have taken from interner and implemented in my own way.`,
        techIcons: <div className='tech-icons'>
            <FaHtml5 className='icon' style={{color: 'darkorange'}}/>
            <FaCss3 className='icon' style={{color: 'blue'}}/>
        </div>
    },
    {
        id: 6,
        src: './assets/projects/pr_6.png',
        code: "",
        link: "https://mental-hospital.onrender.com/",
        title: "Mental Hospital",
        description: `A full sack website for a mental hospital`,
        techIcons: <div className='tech-icons'>
            <FaHtml5 className='icon' style={{color: 'darkorange'}}/>
            <FaCss3 className='icon' style={{color: 'blue'}}/>
            <RiJavascriptFill className='icon' style={{color: 'yellow'}}/>
            <FaNodeJs className='icon' style={{color: 'darkgreen'}}/>
            <SiExpress className='icon' style={{color: 'darkgreen'}}/>
            <GrMysql className='icon' style={{color: 'blue'}}/>
        </div>
    },
]

export default projects