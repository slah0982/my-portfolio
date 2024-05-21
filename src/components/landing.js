import "./landing.css"
import Typewriter from 'typewriter-effect'
import { motion } from "framer-motion"
import { useState, useEffect} from "react";
import SoicalMediaIcons from "./Soical media";



const computerImgs = ["./assets/landing-img.jpg",'https://images.pexels.com/photos/3850263/pexels-photo-3850263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
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
            <h1 className="my-name">Hi, I’m Salah Almaghrby</h1>
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
            <p className="info">
                I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
            </p>
            <SoicalMediaIcons/>
        </div>
    )
}

//img components
function LndingImg(){
    const [imgIndex,setImgIndex] = useState(0)
     // Function to update the image index
    const updateImgIndex = () => {
        setImgIndex((prevIndex) => (prevIndex + 1) % computerImgs.length);
    };

    useEffect(() => {
        const intervalId = setInterval(updateImgIndex, 3800); // Adjust this value according to your animation duration
        return () => clearInterval(intervalId);
    }, [imgIndex]); // Re-run effect when imgIndex changes
    return(
        <div className="img">
            <img src={pointsImg} id="point-img" alt="landing-points-icon" />
            <motion.img
                animate={{opacity: [0,1], x: [300,0]}}
                transition={{repeat: 3, duration: 1.5, repeatDelay: 2.2}}
                src={computerImgs[imgIndex]}
                id="computer-img"
                alt="computer img" 
            />
        </div>
    )
}