import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import About from './components/About'
import quizz from './components/QuizzStartPage'
import quizzStart from './components/QuizzForm'
import results from './components/Results'

export default (
  <Route path="/" component={App}>

    <Route path="/About"
           component={About} />
      <Route path="/Quizz"
             component={quizz} />
      <Route path="/QuizzForm"
             component={quizzStart} />
      <Route path="/Results"
             component={results} />
  </Route>
)
