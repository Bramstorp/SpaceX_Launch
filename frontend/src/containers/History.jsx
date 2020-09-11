import React, { Component } from 'react'
import axios from 'axios'

import HistoryList from "../components/History_List"

class History extends Component {
    
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
			<HistoryList state={this.state.launches}/>
		)	
	}

}

export default History



	 

