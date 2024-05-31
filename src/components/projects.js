import {  FaGithub } from 'react-icons/fa'
import MainHeader from './main-header'
import './projects.css'
import projects from './projectsData'
import { motion } from 'framer-motion'



export default function Projects(){


    return(
        <section id="projects">
            
            <MainHeader title={"My projects"} />

            <div className='container'>
                {projects.map(pr => 
                    <ProjectCard
                        key={pr.id}
                        id={pr.id}
                        imgSrc={pr.src}
                        githubLink={pr.code}
                        link = {pr.link}
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
    link,
    title,
    description,
    techIcons,
    id
}){
    return(
        <motion.div
            initial={{ opacity: 0, y: 50}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true}}
            transition={{duration: id > 3 ? 1 : 1.5, delay: 0.5}}
            className='project-card'   
         >
            <img src={imgSrc} alt='project' draggable='false'/>j
            <a href={link} target='blank' className='overlay'>
                {githubLink ?
                
                <a className='code-link row-1' target='blank' href={githubLink}>
                    <FaGithub className='icon' /> <span> github link</span>
                </a> : <div></div>
                }
                <div className='row-2'>
                    <h4 className='title'>{title}</h4>
                    <p className='description'> 
                        {description}
                    </p>
                    {techIcons}
                </div>
            </a>
        </motion.div>
    )
}