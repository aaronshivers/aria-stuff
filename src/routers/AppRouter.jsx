import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'

function AppRouter(props) {
  return (
    <Router>
      <Breadcrumb/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRouter
