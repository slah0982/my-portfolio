import './skill-prograss.css'
import{motion} from "framer-motion"
export default function SkillsProgress({
    thick = 70,
    percentColor = 'var(--lines-color)',
    emptyColor = 'var(--secondry-color)',
    percentage = 50,
    size = 200,
    children,
}){
    return(
        <motion.div
            style={{
                height: `${size}px`,
                width: `${size}px`,
            }}
            initial={{ background: `conic-gradient(${percentColor} 0, ${emptyColor} 0)`}}
            whileInView={{background: `conic-gradient(${percentColor} ${percentage}%, ${emptyColor} 0)`}}
            viewport={{once: true}}
            transition={{duration: 1.5}}
            className="prograss"
        > 
            <div
                className='inner-contents'
                style={{
                    height: `${thick}%`,
                    width: `${thick}%`,
                   background: 'var(--third-color)' 
                }}
            >
                {children}
            </div>
        </motion.div>
    )
}