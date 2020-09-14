import React from "react"

const PlanetList = ({ planets, loading  }) => {
		
	const planet_data = planets.map((planets) => { 
		return (
			<div class="row pt-2 pb-2 data-items">

				<div class="col">
					<div key={planets.id}>{planets.kepid}</div>
				</div>
				
				<div class="col">
					{planets.kepoi_name}
				</div>
				
				<div class="col">
					{planets.kepler_name}
				</div>
				
				<div class="col">
					{planets.koi_srad}
				</div>

				<div class="col">
					{planets.koi_smass}
				</div>

				<div class="col">
					{planets.koi_count}
				</div>

			</div>
		)
	})

  	if (loading) {
		return <div className="container pt-4"><h2>Loading Planets....</h2></div>
  	}

	return (

		<div className="container">
			
			<p className="pt-5">Exoplanet Explorations</p>
			<p>Discover Planets Beyond Our Solar System</p>
        	<p>Note: Not all exo planet are list only confirmed keplers is listed</p>

			<div class="row pt-4">
				
				<div class="col">
					Kepler id
				</div>
				
				<div class="col">
					Koi Name 
				</div>

				<div class="col">
					Kepler Name 
				</div>

				<div class="col">
					Stellar Mass 
				</div>

				<div class="col">
					Steller Radius 
				</div>
									
				<div class="col">
					Number of Planets
				</div>

			</div>
			
			{planet_data}

		</div>
	)
	
}

export default PlanetList