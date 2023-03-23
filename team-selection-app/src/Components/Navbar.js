import React from 'react'
import { Link } from 'react-router-dom';
// import logo from '../Images/logo_2.jpg';
import '../App.css';
function Navbar() {

    return (  
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
                <div className="container-fluid">
                <Link to="/" className='nav-link active' aria-current="page">
                    <img src="https://img.icons8.com/clouds/100/null/american-football-player.png" alt="" width="100" height="80"
                        className="d-inline-block align-text-top " />
                </Link> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navBarCss">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                                <Link to="/" className='nav-link ' aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="">Position</a> */}
                                <Link to="/Playground" className='nav-link'>Playground</Link>
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar