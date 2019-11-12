import React from 'react'
import './App.css'

// React Router components
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

// Own components
import Header from './components/Header'
import Dailies from './components/pages/Dailies'
import Weeklies from './components/pages/Weeklies'
import Instructions from './components/pages/Instructions'
import Footer from './components/Footer'

// Background image
import Image from './static/images/arcana_forest_wallpaper.png'

// App
function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${Image})`, backgroundSize:'cover' }}>
      <Router>
        <Header/>

        <Switch>
          <Redirect exact from="/" to="/dailies" />

          <Route path="/dailies" component={Dailies}/>
          <Route path="/weeklies" component={Weeklies}/>
          <Route path="/instructions" component={Instructions}/>
        </Switch>
      </Router>

      <Footer/>
    </div>
  )
}

export default App;