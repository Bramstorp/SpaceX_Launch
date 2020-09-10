import React from "react"

const Upcoming = () => {
	return(
		<div className="container">
        	
        	<p className="pt-5">Upcoming missions</p>
        	<p>Warning! Clicking on the <span class="delete">✖</span> aborts the mission.</p>
		  	
		  	<div class="row pt-4">
		    	
		    	<div class="col-sm">
	     	 		No. Date  
		    	</div>
		    	
		    	<div class="col-sm">
		      		Mission
			    </div>
			    
			    <div class="col-sm">
			    	Rocket
			    </div>

			    <div class="col-sm">
		     		Destination
			    </div>

		  	</div>
		</div>
	)
}

export default Upcoming