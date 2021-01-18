import React from 'react'
import Button from "react-bootstrap/Button";
// import logo from '../pics/logo.oni.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <div>
            <header>
                <div className="site-header">
                    {/* <div className = "site-logo">
                        <a href= "/">
                            <img src= {logo} alt= "the logo"/>
                        </a>
                    </div> */}

                    <nav className="site-menu">
                        <form className= "search">
                            <input type="text" id= "try" value="search" onChange=''/>
                            <button>Submit</button>
                        </form>

                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><NavLink to="/shoes">Shoes</NavLink></li>
                            <li><NavLink to="/sandal">Sandals</NavLink></li>
                            <li><NavLink to="/slipper">Slippers</NavLink></li>
                            <li><NavLink to="/contact">Contact Us </NavLink></li>
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <li>
                                <Button variant="link" size="sm">
                                    <NavLink to="/sign-in">
                                        Sign up as seller
                                    </NavLink>
                                </Button>
                            </li>                        
                        </ul>
                    </nav>
                </div>
                <div className = "toggle-menu">
                    
                    <span></span>
                
                </div>
            </header>
            <div className = "hide-toggle-menu side-menu" id="side-menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/shoes">Shoes</NavLink></li>
                    <li><NavLink to="/sandal">Sandals</NavLink></li>
                    <li><NavLink to="/slipper">Slippers</NavLink></li>
                    <li><NavLink to="/contact">Contact Us </NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                    <li>
                        <Button>
                            <NavLink to="/sign-up">
                                Sign up as seller
                            </NavLink>
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar