import React, { Component } from 'react'
import axios from 'axios'

import LaunchDetailCard from "../components/Launch_Card"

class LaunchDetails extends Component {
    
    constructor() {
        super();
        this.state = {
            launches: []
        }	
    }
    
	componentDidMount() {	
        const id = this.props.match.params.flightNumber;	
		axios.get(`http://localhost:8000/launches/${id}`)
			.then(res => {
				this.setState({
					launches: res.data
				})
				console.log(res.data)
			})

	}

	render() {
		return(
			<LaunchDetailCard data={this.props.location.launches}/>
		)	
	}

}

export default LaunchDetails



	 

