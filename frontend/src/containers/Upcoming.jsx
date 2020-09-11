import React, { Component } from 'react'
import axios from 'axios'

import UpcomingList from "../components/Upcoming_List"

class Upcoming extends Component {
    
    constructor() {
        super();
        this.state = {
            launches: []
        }
    }

	componentDidMount() {
		axios.get("http://localhost:8000/launches")
			.then(res => {
				this.setState({
					launches: res.data
				})
				//console.log(res.data)
			})			
	}

	render() {
		return(
			<UpcomingList state={this.state.launches} />
		)	
	}

}

export default Upcoming



	 

