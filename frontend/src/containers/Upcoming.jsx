import React, { useState, useEffect } from 'react'
import axios from 'axios'

import UpcomingList from "../components/Upcoming_List"

const Upcoming = () => {
    
	const [launches, setlaunches] = useState([]);

	useEffect(() => {
        axios.get("http://localhost:8000/launches")
        .then(res => {
            setlaunches(res.data);
        })
    }, []);

	
	return(
		<UpcomingList state={launches} />
	)	
	

}

export default Upcoming



	 

