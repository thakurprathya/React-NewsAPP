import React from 'react'
import { Link } from 'react-router-dom';

const Navbar =()=>{
    return (
      <div>
          {/* including bootstrap navbar and making changes to it for acceptance in jsx, also replacing anchor tag with Link of react-router-dom ,and href with to for use router */}
          <nav className={`navbar fixed-top navbar-expand-lg bg-black`}>
              <div className="container-fluid" style={{display:"flex", justifyContent:"flex-start"}}>
                  <Link className={`navbar-brand text-light my-2`} to="/" style={{fontWeight:"bold", fontSize:"25px", marginRight:"95px", marginLeft:"10px"}}>News React App</Link>
                  <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon bg-light"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className='navbar-nav me-auto mb-2 mb-lg-0' style={{fontSize:"17px"}}>  {/*overwriting bootstrap class size by providing size*/}
                          <li className='nav-item'><Link className={`nav-link text-light mx-4 mb-1`} to="/"><b>Home</b></Link></li>
                          <li className='nav-item'><Link className={`nav-link text-light mx-4 mb-1`} to="/world"><b>World</b></Link></li>
                          <li className='nav-item'><Link className={`nav-link text-light mx-4 mb-1`} to="/business"><b>Business</b></Link></li>
                          <li className='nav-item'><Link className={`nav-link text-light mx-4 mb-1`} to="/entertainment"><b>Entertainment</b></Link></li>
                          <li className='nav-item'><Link className={`nav-link text-light mx-4 mb-1`} to="/health"><b>Health</b></Link></li>
                          <li className='nav-item'><Link className={`nav-link text-light mx-4 mb-1`} to="/science"><b>Science</b></Link></li>
                          <li className='nav-item'><Link className={`nav-link text-light mx-4 mb-1`} to="/sports"><b>Sports</b></Link></li>
                      </ul>
                  </div>
              </div>
          </nav>
      </div>
    )
}

export default Navbar;