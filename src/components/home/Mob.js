import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import {getSizeType} from "../../utils/pageManager";

import './Home-mob.css';


const Mob = () => {

  return (
    <div id="home" class="container">
        <h1>Baby Naam Bos</h1>
        <div className="image-wrapper">
            <div className="image-container">
                <div class="image"></div>
            </div>
        </div>
    </div>
  )
}


export default Mob;

