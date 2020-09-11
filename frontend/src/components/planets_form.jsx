import React, { useState } from 'react'
import axios from 'axios'

const PlanetForm = (props) =>  {
	    
	    const [formData, setFormData] = useState({
	        flightNumber:"1",
	        launchDate: "",
	        mission: "",
	        rocket: "",
	        target: "",
	        upcoming: true,
	      	customers: ["Mathias", "SpaceX"],
    	});

    	const {launchDate, mission, rocket, target, upcoming, customers, flightNumber} = formData;

	    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

        const onSubmit = e => {
	        e.preventDefault();

	        const config = {
	            headers: {
	                'Content-Type': 'application/json'
	            }
	        };

	        axios.post("http://localhost:8000/launches", { launchDate, mission, rocket, target, upcoming, customers, flightNumber }, config)
	        .then(res => {
	            console.log(res.data)
	        })
    	}

		const planet_options = props.state.map((planets) => {
			return (
        		<option>{planets.kepler_name}</option>
	        )
		})


		return(
			<div className="container">
		        <p className="pt-5">Schedule a mission launch for intersteller travel to one of the kepler Exoplanets.</p>

		        <ul>
		            <li>0.78 M☉ &lt; Solar Mass &lt; 1.04 M☉</li>
		            <li>0.99 R☉ &lt; Solar Radius &lt; 1.01 R☉</li>
		            <li>0.50 R⊕ &lt; Planetary Radius &lt; 1.50 R⊕</li>     
	          	</ul>
		        
		        <form onSubmit={e => onSubmit(e)}>

		          <div className="form-group">
		            <label>Launch Date</label>
		            <input className="form-control" type="date" name="launchDate" onChange={e => onChange(e)} value={launchDate} />
		          </div>

		          <div className="form-group">
		            <label>Mission Name</label>
		            <input className="form-control" type="text" name="mission" onChange={e => onChange(e)} value={mission} />
		          </div>

		          <div className="form-group">
		            <label>Rocket Type</label>
		            <select className="form-control" name='rocket' onChange={e => onChange(e)} value={rocket}>
		            	<option>Falcon 1</option>
		            	<option>Falcon 9</option>
		            	<option>Falcon Heavy</option>
		            </select>
		          </div>

		          <div className="form-group">
		            <label>Destination Exoplanet</label>
		            <select className="form-control" name='target' onChange={e => onChange(e)} value={target}>
		            	{ planet_options }
		            </select>
		          </div>

		          <button type="submit">[ Save Mission ]</button>
		        </form>

			</div>
		)
	
}

export default PlanetForm
 