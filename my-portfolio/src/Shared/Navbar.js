import React from 'react'
import Logo from '../Images/logo4.png'   
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg " style={{backgroundColor:'#21325e'}}>
            <div className="container-fluid ">
                <Link className="navbar-brand" to="/">
                    <div style={{paddingRight:"230px"}}>
                        <img src={Logo} width="150px" height="75px"/>
                    </div>
                </Link>
                <button  className="navbar-toggler " style={{color:"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav" >
                    <Link className="nav-link" style={{color:"white",fontSize:"larger"}} aria-current="page" to="/">Home</Link>
                    <Link className="nav-link" style={{color:"white",fontSize:"larger"}} to="/projects">Projects</Link>
                    <Link className="nav-link" style={{color:"white",fontSize:"larger"}} to="/experience">Experience</Link> 
                    <Link className="nav-link" style={{color:"white",fontSize:"larger"}} to="/experience">Contact Us</Link>     
                </div>
                </div>
            </div> 
        </nav>
      
    </div>
  )
}

export default Navbar
