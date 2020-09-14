import React from "react"
import { BrowserRouter as Router, Link } from 'react-router-dom';

const HistoryList = (props) => {
	
	const launches_data= props.state.filter((launches) => !launches.upcoming).map((launches) => { 
		return (
		  	<div class="row pt-2 pb-2 data-items">

		  		<div class="col-1">
	     	 		{launches.flightNumber} 
		    	</div>
		    	
		    	<div class="col-2">
		    	  {launches.launchDate}
		    	</div>
		    	
		    	<div class="col-2">
		      		{launches.mission}
			    </div>
			    
			    <div class="col-2">
			    	{launches.rocket}
			    </div>

			    <div class="col-4">
		     		{launches.customers}
			    </div>

			    <div class="col-1">
		     		<Link className="view" to={`/launches/${launches.flightNumber}`}> View </Link> 
			    </div>

		  	</div>
        )
	})

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