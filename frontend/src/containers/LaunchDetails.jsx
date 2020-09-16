import React, { useEffect, useState } from 'react';
import axios from 'axios'

import MissionDetailView from "../components/Mission_DetailView"

const LaunchDetails = (props) => {
    
    const [launches, setLaunches] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const id = props.match.params.id;

        setLoading(true)
        axios.get(`http://localhost:8000/launches/${id}`)
        .then(res => {
            setLaunches(res.data);
            setLoading(false)
        })
        .catch(err => {

        });
    }, [props.match.params.id]);
	
	return(
		<MissionDetailView launches={launches} loading={loading}/>
	)	
	
}

export default LaunchDetails



	 

