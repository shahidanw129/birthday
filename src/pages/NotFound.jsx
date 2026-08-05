import { Link } from "react-router-dom";

export default function NotFound(){

return(

<div

style={{

display:"flex",

justifyContent:"center",

alignItems:"center",

height:"100vh",

flexDirection:"column",

background:"#111",

color:"white"

}}

>

<h1 style={{fontSize:"90px"}}>

404

</h1>

<h2>

Page Not Found

</h2>

<p>

Oops! This page doesn't exist.

</p>

<Link to="/">

<button

style={{

padding:"15px 30px",

marginTop:"20px",

cursor:"pointer"

}}

>

Go Back

</button>

</Link>

</div>

)

}