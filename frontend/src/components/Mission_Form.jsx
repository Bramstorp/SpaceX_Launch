import React, { useState } from 'react'
import axios from 'axios'

const MissionForm = ({ planets, loading }) =>  {
	    
	    const [formData, setFormData] = useState({
	        flightNumber: 200,
	        launchDate: "",
	        mission: "",
	        rocket: "Falcon 1",
	        target: "Kepler-227 b",
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
				//console.log(res.data)
				alert("mission has been made")
				window.location.reload(true);
			})
		}	

		const planet_options = planets.map((planets) => {
			return (
        		<option>{planets.kepler_name}</option>
	        )
		})

		if (loading) {
			return <div className="container pt-4"><h2>Loading Mission....</h2></div>
		}
		
		return(
			<div className="container">
		        <p className="pt-5">Schedule a mission launch for intersteller travel to one of the kepler Exoplanets.</p>
		        
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

		          <div className="form-group pb-2">
		            <label>Destination Exoplanet</label>
		            <select className="form-control" name='target' onChange={e => onChange(e)} value={target}>
		            	{ planet_options }
		            </select>
		          </div>
				  
		          <button className="btn btn-outline-info" type="submit">Save Mission</button>
		        </form>

			</div>
		)
	
}

export default MissionForm
 