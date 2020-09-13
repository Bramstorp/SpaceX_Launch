import React, { Component } from 'react'

import LaunchDetailCard from "../components/Launch_Card"

class LaunchDetails extends Component {
	render() {
		return(
			<LaunchDetailCard data={this.props.location.planetData}/>
		)	
	}

}

export default LaunchDetails



	 

