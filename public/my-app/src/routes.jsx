import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Homepage from "./containers/Homepage.jsx"
import Upcoming from "./containers/Upcoming.jsx"
import History from "./containers/History.jsx"


const BaseRoutes  = () => (
	<Switch>
		<Route exact path="/" component={Homepage} />
		<Route exact path="/upcoming" component={Upcoming} />
		<Route exact path="/history" component={History} />
	</Switch>
)

export default BaseRoutes;