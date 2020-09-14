import React, { useState, useEffect } from 'react'
import axios from 'axios'

import MissionForm from "../components/Mission_Form"

const Homepage = () => {
	const [planets, setplanets] = useState([]);

	useEffect(() => {
        axios.get("http://localhost:8000/planets")
        .then(res => {
            setplanets(res.data);
        })
    }, []);

	return (
		<div>
			<MissionForm state={planets} />
		</div>
	)


}

export default Homepage