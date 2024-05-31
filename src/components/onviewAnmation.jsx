import { motion } from "framer-motion"


export default function OnviewAnmation({duration = 1.5, dir = "y", dirValue = 100,children}){
    return (
        <motion.div 
            initial={{ opacity: 0, [dir]: dirValue}}
            whileInView={{ opacity: 1, [dir]: 0}}
            viewport={{ once: true}}
            transition={{duration: duration}}
        >
            {children}
        
        </motion.div>
    )
}