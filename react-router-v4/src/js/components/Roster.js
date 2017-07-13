import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route } from 'react-router-dom'

import FullRoster from './FullRoster'
import Player from './Player'

export default class Roster extends React.Component{
  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/roster' component={FullRoster} />
          <Route path='/roster/:number' component={Player} />
        </Switch>
      </div>
    );
  }
}
