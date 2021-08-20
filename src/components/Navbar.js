import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {

    const [click, setClick]=useState(false)
    const [button, setButton] = useState(true)

    const handleClick =()=>{
        setClick(!click)
    }

    const closeMenu =() =>{
        setClick(false)
    }
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Guillermo
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMenu}>
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/signup" className="nav-links" onClick={closeMenu}>
                                Sign up
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/login" className="nav-links" onClick={closeMenu}>
                                Login
                            </Link>
                        </li>

                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign UP</Button>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
