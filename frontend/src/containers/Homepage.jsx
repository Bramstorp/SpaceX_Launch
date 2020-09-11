import React, { Component } from 'react'
import axios from 'axios'

import PlanetForm from "../components/planets_form"



class Homepage extends Component {
	 
    constructor() {
        super();
        this.state = {
            planets: []
        }	
    }

	componentDidMount() {		
		axios.get("http://localhost:8000/planets")
			.then(res => {
				this.setState({
					planets: res.data
				})
				console.log(res.data)
			})

	}

	render() {	

		return(
			<div>
				<PlanetForm state={this.state.planets} />
			</div>
		)
	}

}

export default Homepage