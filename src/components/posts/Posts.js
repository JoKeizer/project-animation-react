import React, {useState} from 'react'
//waypoint libary
import {Waypoint} from 'react-waypoint';
import {animated, useSpring, config} from 'react-spring';

import './Posts.css';


const Posts = () => {


    const [on, toggle] = useState(false);
    const animation = useSpring({

        bottomOffset:"30%",
        opacity: on ? 1 : 0,
        transform: on ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
        config: config.molasses
    })

  return (
        <div id="posts" className="posts">
            <div className="posts-container">
                <div>
                    <Waypoint onEnter={ () => { if(!on) toggle(true) }} />
                    <animated.p style={animation}>
                        <h1>Posts</h1>
                    </animated.p>
                </div>
                <p>
                    Health goth af scenester irony, farm-to-table austin intelligentsia man bun celiac flexitarian yuccie marfa kickstarter banh mi gluten-free.
                    Pabst vape bespoke banjo umami next level tumblr offal wolf kombucha. Jean shorts direct trade distillery yr glossier dreamcatcher,
                    before they sold out butcher. Fixie unicorn leggings pabst forage neutra. 3 wolf moon microdosing food truck hell of keytar,
                    bitters disrupt flannel chartreuse knausgaard affogato ethical pickled. Humblebrag small batch meh glossier mixtape.
                </p>    
            </div>    
        </div>
  )
}

export default Posts;

