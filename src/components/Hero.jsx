import { motion } from "framer-motion"

function Hero(){

return(

<section className="gradient-bg" style={{
padding:"120px 20px",
textAlign:"center"
}}>

<motion.h1
initial={{opacity:0,y:-40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
style={{fontSize:"40px"}}
>

Raghunandan Tiwari Library & Club

</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.5}}
style={{fontSize:"20px"}}
>

Read • Learn • Create

</motion.p>

</section>

)

}

export default Hero