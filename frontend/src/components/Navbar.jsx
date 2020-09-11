import React from "react"

const Navbar = () => {
	return(
		<nav className="navbar navbar-expand-lg navbar-dark">
		  <a className="navbar-brand" href="/">SpaceX Mission Control</a>
		  <div>
		    
		    <ul className="navbar-nav mr-auto">
		      
		      <li className="nav-item">
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










