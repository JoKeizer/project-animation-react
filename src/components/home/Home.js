import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import {getSizeType} from "../../utils/pageManager";
import Web from './Web'
import Mob from './Mob'
import './Home.css';

function Home() {
  if(getSizeType() === 'web'){
    console.log("web is running")
    return <Web/>
} else {
    console.log("mob is running")
    return <Mob/>;
}
}

export default Home;

