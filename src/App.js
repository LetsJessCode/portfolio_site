import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Sidebar from './Components/Sidebar/SideBar'
import About from './Components/About/About'
import Textbook from './Components/Project/Textbook'
import Soaps from './Components/Project/Soaps'
import DateNight from './Components/Project/DateNight'


export class App extends Component {
   render() {
    
    return (
      <div className="App">
          <Router>
            <Sidebar className="sidebar" />
            <div className="body">
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/projects/textbook" component={Textbook} />
              <Route exact path="/projects/soap" component={Soaps} />
              <Route exact path="/projects/date-night" component={DateNight} />
              <Route render={ () => <p>Uh oh, you seem to have lost your way! Click home! </p> } /> 
            </Switch>
            </div>
          </Router>
      </div>
    )
  }
}
export default App
