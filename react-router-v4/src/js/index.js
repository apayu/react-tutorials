import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Link, HashRouter } from 'react-router-dom'
// import Layout from './components/Layout'

const PlayerAPI = {
  players:[
    {number:1, name:"Michael Jordan", position:"G"},
    {number:2, name:"Kobe Bryant", position:"G"},
    {number:3, name:"Tim Duncan", position:"F"},
    {number:4, name:"Dirk nowitzki", position:"F"},
    {number:5, name:"Shaq O'Neal" , position:"G"},
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

const FullRoster = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
  )

const Player = (props) => {
    const player = PlayerAPI.get(
      parseInt(props.match.params.number, 10)
    )
    if (!player) {
      return <div>Sorry, but the player was not found</div>
    }
    return (
      <div>
        <h1>{player.name} (#{player.number})</h1>
        <h2>Position: {player.position}</h2>
        <Link to='/roster'>Back</Link>
      </div>
    )
  }

const Roster = () => (
    <Switch>
      <Route exact path='/roster' component={FullRoster} />
      <Route path='/roster/:number' component={Player} />
    </Switch>
  )

const Schedule = () => (
    <div>
      Schedule
    </div>
  )

const Home = () => (
    <div>
      Home
    </div>
  )

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/roster' component={Roster} />
        <Route path='/schedule' component={Schedule} />
      </Switch>
    </main>
  )

const Header = () => (
    <header>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </header>
  )

const App = () => (
    <div>
      <Header />
      <Main />
    </div>
  )

render((
  <HashRouter>
    <App />
  </HashRouter>
  ),document.getElementById('app'));
