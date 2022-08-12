import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import TeamMatches from './components/TeamMatches'
import MatchCard from './components/MatchCard'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches" component={TeamMatches} />
      <Route exact path="./team-matches/:id" component={MatchCard} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
