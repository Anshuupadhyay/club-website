import { motion } from "framer-motion"

function Gallery(){

const images=[
"/image1.jpg",
"/image2.jpg",
"/image3.jpg"
]

return(

<section className="container">

<h2 style={{textAlign:"center"}}>Gallery</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"20px"
}}>

{images.map((img,i)=>(
<motion.img
key={i}
src={img}
whileHover={{scale:1.1}}
style={{width:"100%",borderRadius:"10px"}}
/>
))}

</div>

</section>

)

}

export default Gallery