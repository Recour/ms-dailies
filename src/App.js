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
import GlobalSnackbar from './components/GlobalSnackbar'

import { ThemeProvider } from '@material-ui/core/styles'
import theme from './style/theme'

// App
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Router>
        <Layout>
          <Header/>

          <GlobalSnackbar/>

          <Switch>
            <Redirect exact from="/" to="/dailies" />

            <Route path="/dailies" component={Dailies}/>
            <Route path="/weeklies" component={Weeklies}/>
            <Route path="/instructions" component={Instructions}/>
          </Switch>

          <StickyFooter/>
        </Layout>
      </Router>
    </div>
    </ThemeProvider>
  )
}

export default App;