import React, { useState, useEffect } from 'react'
import axios from 'axios'

import HistoryList from "../components/History_List"

const History = () => {
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
		<HistoryList launches={launches} loading={loading}/>
	)	
	

}

export default History



	 

