import React from 'react'
import {useState} from 'react'
import logo from '../images/logo.svg'
import {FaAlignRight } from 'react-icons/fa'
import {Link} from 'react-router-dom'


function Navbar() {
    const [isOpen ,setIsOpen]=useState(false);
    const handletoggle=()=>{
        setIsOpen(!isOpen);
    }

    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-logo'>
                    <Link to='/'>
                        <img src={logo} alt='logo'></img>
                    </Link>
                    
                    <button type='button' className='nav-btn' onClick={handletoggle}>
                        <FaAlignRight className='nav-icon'/>
                    </button>
                </div>

                <ul className={`nav-links ${isOpen && 'show-nav'}`}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/rooms'>Rooms</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
