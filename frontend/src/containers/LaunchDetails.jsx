import React, { useEffect, useState } from 'react';
import axios from 'axios'

import LaunchDetailCard from "../components/Launch_Card"

const LaunchDetails = (props) => {
    
    const [launches, setLaunches] = useState({});

    useEffect(() => {
        const id = props.match.params.id;

        axios.get(`http://localhost:8000/launches/${id}`)
        .then(res => {
            setLaunches(res.data);
        })
        .catch(err => {

        });
    }, [props.match.params.id]);
	
	return(
		<LaunchDetailCard state={launches}/>
	)	
	
}

export default LaunchDetails



	 

