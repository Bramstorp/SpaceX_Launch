import React from "react"
import axios from 'axios'

class LaunchDetailCard extends React.Component {
	
	state = {
		launches: []
	}

	componentDidMount() {
		if (this.props.data == null) {
			axios.get("http://localhost:8000/launches/")
			.then(res => {				
				const item = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
				const flightID = res.data.findIndex(function(launches) {
					return launches.flightNumber == item
				})
				this.setState({
					launches: res.data[flightID]
				})
				console.log(res.data[flightID])
			})	
		}

		else {
			this.setState({
				launches: this.props.data
			})
		}
	}

	render() {	
		const launchData = this.state.launches		
		return(
			<div className="container">
				<h5 className="pt-5">This is the mission overview to the Exoplanet: {launchData.target}</h5>
				<p> This mission was flight number: {launchData.flightNumber} of all SpaceX launch missions</p>
				<p> The launch happend the {launchData.launchDate}</p>
				<p className="pt-3"> This mission use the {launchData.rocket} as the rocket for this mission</p>
				<p>Customers that was part of this current mission: {launchData.customers}</p>

				<p className="pt-5">Details about this mission</p>
				<p>{launchData.details}</p>

			</div>
		)
	}
}

export default LaunchDetailCard