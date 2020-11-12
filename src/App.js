import React, { Component } from 'react'
import  Header  from './Components/Sidebar/NavBar/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import photo from './Components/images/Jess.jpg'
import Sidebar from './Components/Sidebar/SideBar'
// ------------------------------
import About from './Components/About/About'
import Projects from './Components/Project/Projects'
import Home from './Components/Home'
import Footer from './Components/Sidebar/Footer/Footer'
// ------------------------------
export class App extends Component {
   render() {
    
    return (
      <div className="App">
      <Router>
        <Sidebar className="sidebar" />
        <div className="body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route render={ () => <p>Uh oh, you seem to have lost your way! Click home! </p> } /> 
        </Switch>
        </div>
      </Router>
      </div>
    )
  }
}
export default App
