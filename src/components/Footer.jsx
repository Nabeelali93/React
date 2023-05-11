import React from "react";
import { BsFacebook,  } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';

import { BsInstagram } from 'react-icons/bs';

function Footer(){
    return (
        <div style={{display:"flex"  ,justifyContent:"center" , backgroundColor:"black", overflow:"hidden"}}>
          <span style={{color:"white"}}>Apna</span><span style={{color:"white"}}>Libas</span>
          

<div style={{marginLeft:"20px"}}>

<i style={{color:"white"}}>{<BsFacebook/>} </i>
<i style={{color:"white"}}>{<AiFillTwitterCircle/>} </i>
<i style={{color:"white"}}>{<BsInstagram/>}</i>


</div>

        </div>
    )
}

export default Footer