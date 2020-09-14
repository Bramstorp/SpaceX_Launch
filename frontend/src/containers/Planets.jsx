import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PlanetList from "../components/Planets_List"
import Pagination from "../components/Pagination"

const Planets = () => {
    
	const [planets, setPlanets] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [planetsPerPage] = useState(100);

	useEffect(() => {
		setLoading(true)
        axios.get("http://localhost:8000/planets")
        .then(res => {
            setPlanets(res.data);
            setLoading(false)
        })
    }, []);

  	const indexOfLastPost = currentPage * planetsPerPage
  	const indexOfFirstPost = indexOfLastPost - planetsPerPage
  	const currentPlanets = planets.slice(indexOfFirstPost, indexOfLastPost)

  	const paginate = pageNumber => setCurrentPage(pageNumber)

	return(
		<div>
			<PlanetList planets={currentPlanets} loading={loading} />
	      	<Pagination
	       		planetsPerPage={planetsPerPage}
	        	totalPosts={planets.length}
	        	paginate={paginate}
	      	/>
      	</div>
	)	
	

}

export default Planets



	 

