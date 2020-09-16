import React from "react"
import axios from 'axios'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Moment from 'moment';

const UpcomingList = ({ launches, loading }) => {
	
	const deleteobject = (flightNumber) => {
		axios.delete(`http://localhost:8000/launches/${flightNumber}`)
		.then(res => {
			window.location.reload(true);
			//console.log(res.data)
		})
	}

	if (loading) {
		return <div className="container pt-4"><h2>Loading Upcoming List....</h2></div>
	}
	  
	const upcoming_launch_data= launches.filter((launches) => launches.upcoming).map((launches) => { 
		return (
		  	<div class="row pt-2 pb-2 data-items">

		  		<div class="col-1">
					{launches.flightNumber}
		    	</div>
		    	
		    	<div class="col-3">
		    	  	{Moment(launches.launchDate).calendar()}
		    	</div>
		    	
		    	<div class="col-2">
		      		{launches.mission}
			    </div>
			    
			    <div class="col-3">
			    	{launches.rocket.rocket_name}
			    </div>

			    <div class="col-2">
		     		{launches.target}
			    </div>

			    <div class="col-1">
					<div className="btn-group btn-block">
			    		<Link type="button" class="btn btn-outline-info mr-1 rounded" to={`/launches/${launches.flightNumber}`}> View </Link> 
		  				<button type="button" class="btn btn-outline-danger ml-1 rounded" href="" onClick={deleteobject.bind(this, launches.flightNumber)}> Delete </button> 								
					</div>
				</div>

		  	</div>
        )
	})

	return(

		<div className="container">
        	
        	<p className="pt-5">Upcoming missions</p>
        	<p>Warning! Clicking on the <span class="delete">X</span> aborts the mission.</p>
		  	
		  	<div class="row pt-4">
		    	
		    	<div class="col-1">
	     	 		No  
		    	</div>

		    	<div class="col-3">
	     	 		Date  
		    	</div>
		    	
		    	<div class="col-2">
		      		Mission
			    </div>
			    
			    <div class="col-3">
			    	Rocket
			    </div>

			    <div class="col-2">
		     		Destination
			    </div>

			    <div class="col-1">
	     	 		Action  
		    	</div>

		  	</div>

		  	<br />

	    	{ upcoming_launch_data }

			<br />

		</div>
	)
	

}

export default UpcomingList