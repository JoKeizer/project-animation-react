import React, {useState, Fragment, useEffect} from 'react';
import './App.css';
import {useSpring, animated} from 'react-spring';

import NavWeb from './components/nav/NavWeb'
import NavMob from './components/nav/NavMob'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home'
import Info from './components/info/Info'
import Gallary from './components/gallary/Gallary'
import Posts from './components/posts/Posts'
import {getSizeType} from "./utils/pageManager";


const App = () => {

  const [isMenuOpen, setmenuOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);

  const navAnimation = useSpring({
    transform: isNavOpen 
    ? `translate3d(0, 0, 0) scale(1)` 
    : `translate3d(100%, 0, 0) scale(0.6)`
  })

  const [sizeType, setSizeType] = useState(getSizeType());

  useEffect(()=>{
    document.addEventListener('resize', ()=>{
      setSizeType(getSizeType());
    });
  }, []);


  return (
    <Router>
        <Fragment>
        <animated.div className="App" >
      <header className="App-header">
        
        {getSizeType() === 'web' ? (<Fragment>
          <button onClick={() => setmenuOpen(!isMenuOpen)}className="menu-button">Menu</button>
          <NavWeb isOpen={isMenuOpen}/>

        </Fragment>) 
        : (
          <Fragment>
          <button onClick={() => setNavOpen(!isNavOpen)}className="menu-button">Mob</button> 

          <NavMob style={navAnimation}/>
          </Fragment>
        )}
      
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
