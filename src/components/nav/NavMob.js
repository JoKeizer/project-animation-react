import React, {useState, useEffect} from 'react'
import {useSpring, animated} from 'react-spring';
import { Link } from 'react-scroll';

import './NavMob.css'


const NavMob = ({style, isOpen}) => {
    const [menuStatus, setmenu] = useState(true);

    useEffect(() => {
        isOpen = menuStatus
      }, [menuStatus]);

      if(isOpen && menuStatus === true) {
          isOpen = true
      } else {
        isOpen = false
      }

    const closeStyle = useSpring({
        transform: menuStatus  
        ? `translate3d(0, 0, 0) scale(1)` 
        : `translate3d(0, 0%, 0) scale(0)`
    })

    return (
        <animated.div className='nav-wrapper' style={menuStatus ? style : closeStyle}>
            <nav className="nav-mob">
            <Link onClick={() => setmenu(false)} to='home' smooth={true} duration={1000}>Home</Link>
            <Link onClick={() => setmenu(false)} to='info'>Info</Link>
            <Link onClick={() => setmenu(false)} to='gallary'>Gallary</Link>
            <Link onClick={() => setmenu(false)} to='posts'>Berichten</Link>

            </nav>
        </animated.div>
    )
}

export default NavMob
