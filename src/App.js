import React, { Component } from 'react'
import  NavBar  from './Components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
// ------------------------------

export class App extends Component {
  render() {
    return (
      <div>
        <Router> 
          <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />

            </Switch> 
        </Router>
      </div>
    )
  }
}
export default App
