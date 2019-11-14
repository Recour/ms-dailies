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
import Layout from './components/Layout'
import Header from './components/Header'
import Dailies from './components/pages/Dailies'
import Weeklies from './components/pages/Weeklies'
import Instructions from './components/pages/Instructions'
import StickyFooter from './components/StickyFooter'

// App
function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Header/>
          <Switch>
            <Redirect exact from="/" to="/dailies" />

            <Route path="/dailies" component={Dailies}/>
            <Route path="/weeklies" component={Weeklies}/>
            <Route path="/instructions" component={Instructions}/>
          </Switch>
          <StickyFooter/>
        </Router>
      </Layout>
    </div>
  )
}

export default App;