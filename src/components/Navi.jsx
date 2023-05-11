import React from "react";
import { Route,Routes } from "react-router-dom";
import Slider from "./Slider";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";


function Navi(){
    return(
        <div>
<Routes>
    <Route path="/" element={<Slider/>}></Route>
    <Route path="Gallery" element={<Gallery/>}></Route>
    <Route path="About" element={<About/>}></Route>
    <Route path="Contact" element={<Contact/>}></Route>



</Routes>

        </div>
    )
}

export default Navi 