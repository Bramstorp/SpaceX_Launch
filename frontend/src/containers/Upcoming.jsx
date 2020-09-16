import React, { useState, useEffect } from 'react'
import axios from 'axios'

import UpcomingList from "../components/Upcoming_List"

const Upcoming = () => {
    
	const [launches, setlaunches] = useState([]);
    const [loading, setLoading] = useState(false);

	useEffect(() => {
        setLoading(true)
        axios.get("http://localhost:8000/launches")
        .then(res => {
            setlaunches(res.data);
            setLoading(false)
        })
    }, []);

	
	return(
		<UpcomingList launches={launches} loading={loading}/>
	)	
	

}

export default Upcoming



	 

