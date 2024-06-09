import './skills.css'
import MainHeader from './main-header';
import SkillsProgress from './skill-prograss';
import { DiJavascript, DiMysql } from 'react-icons/di';
import { FaBootstrap, FaCss3, FaHtml5, FaReact } from 'react-icons/fa6';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { SiExpress } from 'react-icons/si';




export default function Skills(){

    return(
        <section id="skills">
            <MainHeader title={"My Skills"}/>
            <div className='container'>
                

                <div className="doughnut">
                   <SkillsProgress percentage={99}>99 %</SkillsProgress>

                    <h2><FaHtml5 style={{color: 'orange'}}/> HTML</h2>     
                </div>
                {/* CSS skill */}
                <div className="doughnut">
                    <SkillsProgress percentage={98} >98 %</SkillsProgress>

                    <h2><FaCss3 style={{color: 'blue'}}/> CSS</h2>     
                </div>
                {/* javaScript */}
                <div className="doughnut">
                    <SkillsProgress percentage={98}> 98 %</SkillsProgress>

                    <h2><DiJavascript style={{color: 'yellow'}}/> javaScript</h2>     
                </div>

                {/* react */}
                <div className="doughnut">
                    <SkillsProgress percentage={90}> 90 %</SkillsProgress>

                    <h2><FaReact style={{color: 'blue'}}/> React.js</h2>     
                </div>

                {/* Bootstrap */}
                <div className="doughnut">
                    <SkillsProgress percentage={88}> 88 %</SkillsProgress>

                    <h2><FaBootstrap style={{color: 'purple'}}/> Bootstrap</h2>     
                </div>

                {/* Tailwind */}
                <div className="doughnut">
                    <SkillsProgress percentage={87}> 87 %</SkillsProgress>

                    <h2><BiLogoTailwindCss style={{color: 'lightblue'}}/> Tailwind</h2>     
                </div>

                {/* Express */}
                <div className="doughnut">
                    <SkillsProgress percentage={95}> 95 %</SkillsProgress>

                    <h2><SiExpress style={{color: 'green'}}/> Express</h2>     
                </div>

                {/* Mysql */}
                <div className="doughnut">
                    <SkillsProgress percentage={93}> 93 %</SkillsProgress>

                    <h2><DiMysql style={{color: 'blue'}}/> Mysql</h2>
                </div>
            </div>

        </section>
            
    )
}


// check if the element is viwed of not
// const isElementInViewport = (el) => {
//     if (!el) return false;
//     const rect = el.getBoundingClientRect();
//     console.log(rect,document.documentElement.clientHeight,window.innerHeight)
//     return (
//         rect.top >= 0 - 200 &&
//         rect.bottom <= document.documentElement.clientHeight + 400
//     );
// };