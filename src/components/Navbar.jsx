import {useEffect,useState} from "react";

import {
FaBell,
FaHeart,
FaMoon
} from "react-icons/fa";


import "../css/navbar.css";


export default function Navbar(){


const [time,setTime]=useState("");



useEffect(()=>{


const t=setInterval(()=>{

setTime(
new Date().toLocaleTimeString(
"en-IN",
{
hour:"2-digit",
minute:"2-digit"
}
)
)

},1000);


return()=>clearInterval(t);


},[]);



return(

<div className="navbar">


<h2>
🎂 Birthday Dashboard
</h2>



<div className="nav-right">


<div className="clock">

🕒 {time}

</div>



<div className="icon">
<FaBell/>
</div>


<div className="icon">
<FaHeart/>
</div>


<div className="icon">
<FaMoon/>
</div>



<div className="profile">

<img
src="/images/6311860629874087161_121.jpg"
/>


<div>

<h4>
Falak
</h4>

<small>
Birthday Girl ❤️
</small>

</div>


</div>



</div>


</div>

)

}