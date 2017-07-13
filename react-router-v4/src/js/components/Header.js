import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

export default class Header extends React.Component{
  render(){
    return (
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/roster">Roater</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <Link to={{ pathname: '/roster/7' }}>Player #7</Link>
          </ul>
        </nav>
      </header>
    );
  }
}
