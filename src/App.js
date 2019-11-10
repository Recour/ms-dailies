import React from 'react'
import './App.css'

// React Router imports
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

// Component imports
import Header from './components/Header'
import Dailies from './components/pages/Dailies'
import Weeklies from './components/pages/Weeklies'
import About from './components/pages/About'
import Time from './components/Time'
import Footer from './components/Footer'

// App
function App() {
  return (
    <div className="App">
      <Time/>

      <Router>
        <Header/>

        <Switch>
          <Redirect exact from="/" to="/dailies" />

          <Route path="/dailies" component={Dailies}/>
          <Route path="/weeklies" component={Weeklies}/>
          <Route path="/about" component={About}/>
        </Switch>
      </Router>

      <Footer/>
    </div>
  )
}

export default App;