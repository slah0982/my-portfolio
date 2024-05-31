import './skills.css'
import PrograssBar from './skill-prograss';
import MainHeader from './main-header';




export default function Skills(){

    return(
        <section id="skills">
            <MainHeader title={"My Skills"}/>
            <div className='container'>
                <div className="doughnut">
                    <PrograssBar 
                        percentColor='var(--lines-color)'
                        emptyColor='var(--secondry-color)'
                        percentage={90}
                    >
                        {90}%
                    </PrograssBar>

                    <h2>HTML</h2>     
                </div>
                {/* CSS skill */}
                <div className="doughnut">
                    <PrograssBar 
                        percentColor='var(--lines-color)'
                        emptyColor='var(--secondry-color)'
                        percentage={88}
                    >
                        {88}%
                    </PrograssBar>

                    <h2>CSS</h2>     
                </div>
                {/* javaScript */}
                <div className="doughnut">
                    <PrograssBar 
                        percentColor='var(--lines-color)'
                        emptyColor='var(--secondry-color)'
                        percentage={90}
                    >
                        {90}%
                    </PrograssBar>

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