import React, { Component } from 'react'
import  NavBar  from './Components/NavBar/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// ------------------------------
import About from './Components/About'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
// ------------------------------
export class App extends Component {
   render() {
    
    return (
      <div>
        <Router> 
          <NavBar />
            <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route render={ () => <p>Uh oh, you seem to have lost your way! Click home! </p> } />
            </Switch> 
        </Router>
      </div>
    )
  }
}
export default App
