import React, { useState, useEffect } from 'react'
import axios from 'axios'

import HistoryList from "../components/History_List"

const History = () => {
    const [launches, setlaunches] = useState([]);

	useEffect(() => {
        axios.get("http://localhost:8000/launches")
        .then(res => {
            setlaunches(res.data);
        })
    }, []);

	return(
		<HistoryList state={launches}/>
	)	
	

}

export default History



	 

