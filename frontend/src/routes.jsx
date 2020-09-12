import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Homepage from "./containers/Homepage.jsx"
import Upcoming from "./containers/Upcoming.jsx"
import History from "./containers/History.jsx"
import Planets from "./containers/Planets.jsx"



const BaseRoutes  = () => (
	<Switch>
		<Route exact path="/" component={Homepage} />
		<Route exact path="/upcoming" component={Upcoming} />
		<Route exact path="/history" component={History} />
		<Route exact path="/Planets" component={Planets} />
	</Switch>
)

export default BaseRoutes;