import React, {useState, Fragment} from 'react';
import './App.css';
import {useSpring, animated} from 'react-spring';

import Nav from './components/nav/Nav'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home'
import Info from './components/info/Info'
import Gallary from './components/gallary/Gallary'
import Posts from './components/posts/Posts'


const App = () => {

  const [isMenuOpen, setmenuOpen] = useState(false);

  return (
    <Router>
        <Fragment>
        <animated.div className="App" >
      <header className="App-header">
        <button onClick={() => setmenuOpen(!isMenuOpen)}className="menu-button">Menu</button>
        <Nav isOpen={isMenuOpen}/>
      
      </header>
      <main>
        <Home/>
        <Info/>
        <Gallary/>
        <Posts/>

      {/* <Switch>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/info" component={Info}/>
              <Route exact path="/gallary" component={Gallary}/>
              <Route exact path="/posts" component={Posts}/>
          
            </Switch> */}
       
      </main>
    </animated.div>
        </Fragment>
      </Router>


  );
}

export default App;
