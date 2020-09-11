import React from "react"

class UpcomingList extends React.Component{
	
	render() {
		const upcoming_launch_data= this.props.state.filter((launches) => launches.upcoming).map((launches) => { 
			return (
			  	<div class="row pt-2 pb-2 data-items">

			  		<div class="col-1">
			  			<a className="delete" href="">X</a> {launches.flightNumber}
			    	</div>
			    	
			    	<div class="col-3">
			    	  	{launches.launchDate}
			    	</div>
			    	
			    	<div class="col-2">
			      		{launches.mission}
				    </div>
				    
				    <div class="col-3">
				    	{launches.rocket}
				    </div>

				    <div class="col-3">
			     		{launches.destination}
				    </div>

			  	</div>
	        )
		})

		return(

			<div className="container">
	        	
	        	<p className="pt-5">Upcoming missions</p>
	        	<p>Warning! Clicking on the <span class="delete">✖</span> aborts the mission.</p>
			  	
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

				    <div class="col-3">
			     		Destination
				    </div>

			  	</div>

			  	<br />

		    	{ upcoming_launch_data }

				<br />

			</div>
		)
	}

}

export default UpcomingList