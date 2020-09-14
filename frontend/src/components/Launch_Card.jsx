import axios from 'axios'
import React, { useEffect, useState } from 'react';

const LaunchDetailCard = (props) => {
    const [launches, setLaunches] = useState([]);

	useEffect(() => {
		console.log(props)
		axios.get("http://localhost:8000/launches/")
		.then(res => {				
			const item = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
			const flightID = res.data.findIndex(function(launches) {
				return launches.flightNumber == item
				setLaunches(res.data[flightID])
			})
		})	


	}, [])

	

	return (
		<div className="container">
			<h5 className="pt-5">This is the mission overview to the Exoplanet: {}</h5>
			<p> This mission was flight number: {} of all SpaceX launch missions</p>
			<p> The launch happend the {}</p>
			<p className="pt-3"> This mission use the {} as the rocket for this mission</p>
			<p>Customers that was part of this current mission: {}</p>

			<p className="pt-5">Details about this mission</p>
			<p>{}</p>

			<p>{}</p>


		</div>
	)
	
}

export default LaunchDetailCard