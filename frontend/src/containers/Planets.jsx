import React, { Component } from 'react'
import axios from 'axios'

import PlanetList from "../components/Planets_List"

class Planets extends Component {
    
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
			<PlanetList state={this.state.planets}/>
		)	
	}

}

export default Planets



	 

