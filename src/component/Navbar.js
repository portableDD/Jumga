import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <div>
            <header>
                <div className="site-header">
                    <div className = "site-logo">
                        <a href= "/">
                            JUMGA
                        </a>
                    </div>

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
                                <NavLink to="/sign-in">
                                    Sign in as seller
                                </NavLink>
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
                        <NavLink to="/sign-in">
                            Sign in as seller
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar