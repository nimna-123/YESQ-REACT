import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from './components/Login'
import Register from './components/Register'

export default function App() {
  return (
    <div>
      <Router>
      
      <Route exact path="/">
        <Register/>
      </Route>
     <Route path="/Login">
      <Login/>
     </Route>
      

      </Router>
      
      
    </div>
  )
}

