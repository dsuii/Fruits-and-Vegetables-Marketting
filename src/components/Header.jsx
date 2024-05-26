import { useState } from "react"
import { Link } from "react-router-dom"

const Header=()=>{
return(
    <>
    <div className="o">
    <div className="outer">
       
       <a href="Home">Home</a>
        <a href="Contact">Contact</a>
        <a href="Login">Login</a>
        <a href="Register">Register</a>
       
        </div>
    </div> 
    </>
)
}
export default Header;