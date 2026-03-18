import { useState } from "react"
import logo from "../assets/logo.png"

function Navbar(){

const [menuOpen,setMenuOpen] = useState(false)

return(

<nav className="navbar">

<div className="logo-section">
<img src={logo} className="logo" />
</div>

{/* Hamburger button */}
<button 
className="menu-btn"
onClick={()=>setMenuOpen(!menuOpen)}
>
☰
</button>

<ul className={`nav-links ${menuOpen ? "active" : ""}`}>

<li>Home</li>
<li>Activities</li>
<li>Gallery</li>
<li>Leadership</li>
<li>Contact</li>

</ul>

</nav>

)

}

export default Navbar