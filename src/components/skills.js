import './skills.css'
import { useEffect, useRef, useState } from 'react';
import PrograssBar from './skill-prograss';




export default function Skills(){
    const [percentge,setPercentage] = useState(0);
    const skillsRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (isElementInViewport(skillsRef.current)) {
                console.log('showed')
                setPercentage(90)
            }else{
                setPercentage(0)
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [skillsRef]);





    return(
        <section ref={skillsRef} id="skills">
            <h1 className="main-header">My Skills</h1>
            <div className="doughnut">
                <PrograssBar 
                    percentColor='var(--lines-color)'
                    emptyColor='var(--secondry-color)'
                    percentage={percentge}
                >
                    {percentge}%
                </PrograssBar>

                <h2>HTML</h2>     
            </div>

            

        </section>
            
    )
}


// check if the element is viwed of not
const isElementInViewport = (el) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    console.log(rect,document.documentElement.clientHeight,window.innerHeight)
    return (
        rect.top >= 0 - 200 &&
        rect.bottom <= document.documentElement.clientHeight + 400
    );
};