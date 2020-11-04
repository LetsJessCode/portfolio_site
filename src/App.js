import React, { Component } from 'react'
import  NavBar  from './Components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// ------------------------------
import Home from './Components/Home'
import Bio from './Components/Bio'
import Projects from './Components/Projects'
// ------------------------------
export class App extends Component {

  render() {
    return (
      <div>
        <Router> 
          <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/bio" component={Bio} />
                <Route exact path="/projects" component={Projects} />
                <Route render={ () => <p>Uh oh, you seem to have lost your way! Click home! </p> } />
            </Switch> 
        </Router>
      </div>
    )
  }
}
export default App
