import React from 'react'

class PlanetForm extends React.Component {
	
	render() {
		
		const planet_options = this.props.state.map((planets) => {
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
		        
		        <form>
		          <div className="form-group">
		            <label>Launch Date</label>
		            <input className="form-control" type="date" id="launch-day" max="2030-12-31" min="2020-09-10" value="2020-09-10"/>
		          </div>

		          <div className="form-group">
		            <label>Mission Name</label>
		            <input className="form-control" type="text"/>
		          </div>

		          <div className="form-group">
		            <label>Rocket Type</label>
		            <select className="form-control">
		            	<option>Falcon 9</option>
		            </select>
		          </div>

		          <div className="form-group">
		            <label>Destination Exoplanet</label>
		            <select className="form-control">
		            	{ planet_options }
		            </select>
		          </div>

		          <a href="#">[ Save Mission ]</a>
		        </form>

			</div>
		)
	}
}

export default PlanetForm