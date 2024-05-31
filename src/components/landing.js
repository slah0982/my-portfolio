import "./landing.css"
import Typewriter from 'typewriter-effect'
import { motion } from "framer-motion"
import SoicalMediaIcons from "./Soical media";
import OnviewAnmation from "./onviewAnmation";


const computerImg = "./assets/landing-img.jpg"
const pointsImg = "./assets/landing-points-icon.png"

export default function Landing(){
    return(
        <section id="home">
            <Text />
            <LndingImg />
        </section>
    );
}

// information component
function Text(){
    return(
        <div className='text'>
            <OnviewAnmation dir="x" duration={1} dirValue={-100}>
                <h1 className="my-name">Hi, I’m Salah Almaghrby</h1>
            </OnviewAnmation>
            <h2 className="roles">
                <Typewriter
                    options={{
                        strings: ['A Websites Developer','An Apps Developer',"A Disktop Applictions Developer"],
                        autoStart: true,
                        deleteSpeed: 20,
                        delay: 20,
                        loop: true,
                    }}
                />
            </h2>
            <OnviewAnmation>
                <p className="info">
                    I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
                </p>
            </OnviewAnmation>
            
            <OnviewAnmation>
                <SoicalMediaIcons />
            </OnviewAnmation>
        </div>
    )
}

//img components
function LndingImg(){ 
    return(
        <div className="img">
            <img src={pointsImg} id="point-img" alt="landing-points-icon" />
            <motion.img
                animate={{opacity: [0,1], x: [300,0]}}
                transition={{duration: 1.5}}
                src={computerImg}
                id="computer-img"
                alt="computer img" 
            />
        </div>
    )
}