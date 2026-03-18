import arts from "../assets/arts.png"
import yoga from "../assets/yoga.png"
import sports from "../assets/sports.png"
import dance from "../assets/singing.png"
import singing from "../assets/singing.png"

function Activities(){

const activities=[
{ name:"Arts & Crafts", img:arts },
{ name:"Yoga", img:yoga },
{ name:"Sports", img:sports },
{ name:"Music and Drama", img:singing }
]

return(

<section className="container">

<h2 style={{textAlign:"center",marginBottom:"40px"}}>
Club Activities
</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
gap:"20px"
}}>

{activities.map((a,i)=>(
<div key={i} className="card">

<img src={a.img} alt={a.name} className="activity-img"/>

<h3>{a.name}</h3>

</div>
))}

</div>

</section>

)

}

export default Activities