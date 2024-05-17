import './skill-prograss.css'
import{motion} from "framer-motion"
export default function PrograssBar({
    thick = 70,
    percentColor = 'green',
    emptyColor = '#777',
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
            animate={{background: [`conic-gradient(${percentColor} 0, ${emptyColor} 0)`,`conic-gradient(${percentColor} ${percentage}%, ${emptyColor} 0)`]}}
            transition={{duration: 2}}
            className="prograss"
        > 
            <div
                className='inner-contents'
                style={{
                    height: `${thick}%`,
                    width: `${thick}%`,
                   background: 'var(--primary-color)' 
                }}
            >{children}</div>
        </motion.div>
    )
}