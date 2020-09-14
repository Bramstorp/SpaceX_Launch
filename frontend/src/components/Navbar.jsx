import React from "react"

const Navbar = () => {
	return(
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark">
			  <a className="navbar-brand" href="/">SpaceX Mission Control</a>
			  <div>
			    
			    <ul className="navbar-nav mr-auto">
			      
			      <li className="nav-item">
			        <a className="nav-link" href="/">[ New Mission ]</a>
			      </li>
			      
			      <li className="nav-item">
			        <a className="nav-link" href="/Upcoming">[ Upcoming ]</a>
			      </li>
			      
			      <li className="nav-item">
			        <a className="nav-link" href="/History">[ History ]</a>		      
			      </li>

				  <li className="nav-item">
			        <a className="nav-link" href="/Planets">[ Planets ]</a>		      
			      </li>

			    </ul>

			  </div>
			</nav>
		</div>
	)
}

export default Navbar










