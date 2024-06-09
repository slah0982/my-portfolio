import './skills.css'
import MainHeader from './main-header';
import SkillsProgress from './skill-prograss';
import { DiJavascript } from 'react-icons/di';
import { FaCss3, FaHtml5, FaReact } from 'react-icons/fa6';




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
                    <SkillsProgress percentage={98}> 98 %</SkillsProgress>

                    <h2><FaReact style={{color: 'blue'}}/> React.js</h2>     
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