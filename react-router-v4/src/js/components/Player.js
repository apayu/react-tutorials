import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route } from 'react-router-dom'

export default class Player extends React.Component{
  render(){
    const playerNum = this.props.match.params.number;
    return (
      <div>
      {playerNum}
      </div>
    );
  }
}
