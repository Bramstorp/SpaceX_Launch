import React, { useState, useEffect } from 'react'
import axios from 'axios'

import MissionForm from "../components/Mission_Form"

const Homepage = () => {
	const [planets, setplanets] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true)
        axios.get("http://localhost:8000/planets")
        .then(res => {
			setplanets(res.data);
			setLoading(false)
        })
    }, []);

	return (
		<div>
			<MissionForm planets={planets} loading={loading}/>
		</div>
	)


}

export default Homepage