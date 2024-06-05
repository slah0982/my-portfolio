import './skills.css'
import MainHeader from './main-header';
import SkillsProgress from './skill-prograss';




export default function Skills(){

    return(
        <section id="skills">
            <MainHeader title={"My Skills"}/>
            <div className='container'>
                

                <div className="doughnut">
                   <SkillsProgress percentage={97}>97 %</SkillsProgress>

                    <h2>HTML</h2>     
                </div>
                {/* CSS skill */}
                <div className="doughnut">
                    <SkillsProgress percentage={93} >93 %</SkillsProgress>

                    <h2>CSS</h2>     
                </div>
                {/* javaScript */}
                <div className="doughnut">
                    <SkillsProgress percentage={90}> 90 %</SkillsProgress>

                    <h2>javaScript</h2>     
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