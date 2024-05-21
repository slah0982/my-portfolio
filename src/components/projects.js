import {  FaGithub } from 'react-icons/fa'
import MainHeader from './main-header'
import './projects.css'
import projects from './projectsData'




export default function Projects(){


    return(
        <section id="projects">
            
            <MainHeader title={"My projects"} />

            <div className='container'>
                {projects.map(pr => 
                    <ProjectCard
                        key={pr.id}
                        imgSrc={pr.src}
                        githubLink={pr.link}
                        title={pr.title}
                        description={pr.description}
                        techIcons={pr.techIcons}
                    />
                )}
            </div>
        </section>
    )
}


function ProjectCard({
    imgSrc,
    githubLink,
    title,
    description,
    techIcons
}){
    return(
        <div className='project-card'>
            <img src={imgSrc} alt='project' draggable='false'/>j
            <div className='overlay'>
                <a className='code-link row-1' href={githubLink}>
                    <FaGithub className='icon' /> <span> github link</span>
                </a>
                <div className='row-2'>
                    <h4 className='title'>{title}</h4>
                    <p className='description'> 
                        {description}
                    </p>
                    {techIcons}
                </div>
            </div>
        </div>
    )
}