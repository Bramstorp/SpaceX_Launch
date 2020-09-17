import React from "react"
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Moment from 'moment';

const HistoryList = ({ launches, loading }) => {
	
	const launches_data= launches.filter((launches) => !launches.upcoming).map((launches) => { 
		return (
		  	<div class="row pt-2 pb-2 data-items">

		  		<div class="col-1">
	     	 		{launches.flightNumber} 
		    	</div>
		    	
		    	<div class="col-2">
		    	  {Moment(launches.launchDate).calendar()}
		    	</div>
		    	
		    	<div class="col-2">
		      		{launches.mission}
			    </div>
			    
			    <div class="col-2">
			    	{launches.rocket.rocket_name}
			    </div>

			    <div class="col-4">
		     		{launches.customers}
			    </div>

			    <div class="col-1">
		     		<Link className="history-view" type="button" class="btn btn-outline-info" to={`/launches/${launches.flightNumber}`}> View </Link> 
			    </div>

		  	</div>
        )
	})

	if (loading) {
		return <div className="container pt-4"><h2>Loading History....</h2></div>
  	}
	  
	return(
		
		<div className="container">
        	
        	<p className="pt-5">History of tracked mission launches. Includes SpaceX launches starting from the year 2006.</p>
		  	
		  	<div class="row pt-4">

		  		<div class="col-1">
	     	 		No 
		    	</div>
		    	
		    	<div class="col-2">
	     	 		Date  
		    	</div>
		    	
		    	<div class="col-2">
		      		Mission
			    </div>
			    
			    <div class="col-2">
			    	Rocket
			    </div>

			    <div class="col-4">
		     		Customers
			    </div>

			    <div class="col-1">
		     		Action
			    </div>

		  	</div>

		  	<br />

		  	{ launches_data }

		  	<br />

		</div>
	)
}


export default HistoryList