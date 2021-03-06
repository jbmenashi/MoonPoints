import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import HomeContainer from './containers/HomeContainer'
import StandingsContainer from './containers/StandingsContainer'
import StatsContainer from './containers/StatsContainer'

function App(props) {
  return (
    <div className="App">
         <Router>
            <>
            <h1>Moon Points!</h1>
            <Route exact path="/" render={() => (props.currentUserId !== undefined ? (<Redirect to="/home"/>) : (<Login/>))}/>
            <Route path="/home" component={HomeContainer}/>
            <Route path="/standings" component={StandingsContainer}/>
            <Route path="/stats" component={StatsContainer}/>
            </>
         </Router>
    </div>
  );
}

export default App;
