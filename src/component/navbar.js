import React from "react";

function Navbar() {
    return(
        
      <nav className="navbar navbar-expand-lg bg-dark data-bs-theme=dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">Start Boostrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-light"><i className="fas fa-bars" style={{color: "white" }}></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  text-light" aria-current="page" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  text-light" aria-current="page" href="#">Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  text-light" aria-current="page" href="#">Commit</a>
                </li>
              </ul>
  
          </div>
        </div>
      </nav>
    );   
}

export default Navbar ;