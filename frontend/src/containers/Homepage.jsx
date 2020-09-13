import React, { Component, useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'

import MissionForm from "../components/Mission_Form"



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
				//console.log(res.data)
			})

	}

	render() {	
		return(
			<div>
				<MissionForm state={this.state.planets} />
			</div>
		)
	}

}

export default Homepage