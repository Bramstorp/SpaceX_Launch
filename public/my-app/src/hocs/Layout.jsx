import React from "react"
import Navbar from "../components/Navbar"

const CustomLayout = (props) => (
  <div>
  	<Navbar />
	{props.children}
  </div> 
)

export default CustomLayout