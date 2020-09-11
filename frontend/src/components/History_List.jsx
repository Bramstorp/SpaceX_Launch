import React from "react"

class HistoryList extends React.Component {
	
	render() {
		
		const launches_data= this.props.state.filter((launches) => !launches.upcoming).map((launches) => { 
			return (
			  	<div class="row pt-2 pb-2 data-items">

			  		<div class="col-1">
		     	 		{launches.flightNumber} 
			    	</div>
			    	
			    	<div class="col-3">
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
			    	
			    	<div class="col-3">
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

			  	</div>

			  	<br />

			  	{ launches_data }

			  	<br />



			</div>
		)
	}
}

export default HistoryList