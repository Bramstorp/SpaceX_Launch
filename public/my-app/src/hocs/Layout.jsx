import React from "react"
import Navbar from "../components/Navbar"
import space from "../videos/space.mp4"

const CustomLayout = (props) => (
  <div>
  	<Navbar />
	{props.children}

  	<video id="spacevideo" autoPlay loop muted>
		<source src={space} type="video/mp4"/>
  	</video>

  </div> 
)

export default CustomLayout