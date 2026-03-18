import presidentImg from "../assets/president.png"
import secretaryImg from "../assets/president.png"

function Leadership(){

return(

<section className="container leadership">

<h2 style={{textAlign:"center",marginBottom:"40px"}}>
Leadership
</h2>

<div className="leaders">

{/* PRESIDENT */}

<div className="leader-card">

<img 
src={presidentImg}
alt="Smt. Naina Shukla"
className="leader-img"
/>

<h3>President</h3>
<h4>Smt. Naina Shukla</h4>

<p>
An entrepreneur and social worker dedicated to the progress of 
Raghunandan Pushtakalaya and Club. She encourages students to 
read more books and participate in co-curricular activities.
</p>

</div>


{/* SECRETARY */}

<div className="leader-card">

<img 
src={secretaryImg}
alt="Shri Balram Upadhyay"
className="leader-img"
/>

<h3>Secretary</h3>
<h4>Shri Balram Upadhyay</h4>

<p>
Shri Balram Upadhyay serves as the Secretary of Raghunandan
Pushtakalaya and Club and manages the day-to-day functioning
of the organization, ensuring events and activities run smoothly.
</p>

</div>

</div>

</section>

)

}

export default Leadership