import React from "react"

const Navbar = () => {
	return(
		<nav className="navbar navbar-expand-lg navbar-dark">
		  <a className="navbar-brand" href="/">SpaceX Mission Control</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarText">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item active">
		        <a className="nav-link" href="/">[ New Mission ]</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="/upcoming">[ Upcoming ]</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="/history">[ History ]</a>
		      </li>
		    </ul>
		  </div>
		</nav>
	)
}

export default Navbar










