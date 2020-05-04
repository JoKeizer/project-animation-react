import React from 'react'
import {useSpring, animated} from 'react-spring';
import './NavMob.css'


const NavMob = ({style}) => {
    return (
        <animated.div className='nav-wrapper' style={style}>
            <nav>
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Store</a>
                <a href='#'>Tutorials</a>
            </nav>
        </animated.div>
    )
}

export default NavMob
