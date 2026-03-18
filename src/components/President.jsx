import presidentImg from "../assets/president.png"

function President(){

return(

<section className="container president-section">

<h2 style={{textAlign:"center",marginBottom:"40px"}}>
Our President
</h2>

<div className="president-card">

<img 
src={presidentImg} 
alt="Smt. Naina Shukla"
className="president-img"
/>

<div className="president-info">

<h3>President (Smt. Naina Shukla)</h3>

<p>
An entrepreneur and social worker dedicated to the progress of 
<b> Raghunandan Tiwari Pushtakalaya and Club</b>.
</p>

<p>
She continuously encourages students to read more books and
participate in co-curricular activities, helping build a culture
of learning, creativity, and community engagement.
</p>

</div>

</div>

</section>

)

}

export default President