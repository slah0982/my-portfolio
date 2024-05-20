import { FaCss3, FaGithub, FaHtml5 } from 'react-icons/fa'
import MainHeader from './main-header'
import './projects.css'

const imgSrcs = './assets/projects/pr_1.png'

export default function Projects(){


    return(
        <section id="projects">
            <MainHeader title={"My projects"} />

            <div className='container'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}


function ProjectCard({
    title,
    description,
    imgSrc
}){
    return(
        <div className='project-card'>
            <img src={imgSrcs} alt='project' draggable='false'/>j
            <div className='overlay'>
                <a className='code-link row-1' href='/#'>
                    <FaGithub className='icon' /> <span> github link</span>
                </a>
                <div className='row-2'>
                    <h4 className='title'>Landing pages</h4>
                    <p className='description'> 
                        A group of landing pages with pure HTML and CSS.<br/>
                        The pages desgins I have taken from interner and implemented in my own way.
                    </p>
                    <div className='tech-icons'>
                        <FaHtml5 className='icon' style={{color: 'darkorange'}}/>
                        <FaCss3 className='icon' style={{color: 'blue'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}