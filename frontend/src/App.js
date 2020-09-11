import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import BaseRoutes from "./routes"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/background.css"

import CustomLayout from "./hocs/Layout"

class App extends Component {
  render(){
    return(
      <div>
            <Router>
              <CustomLayout>
                <BaseRoutes />
              </CustomLayout>
            </Router>
        </div>
      )
  }
}

export default App;