import React, {useState, useEffect} from 'react';

import {useSpring, animated, config} from 'react-spring';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

import './Nav.css';

const NavWeb = ({isOpen}) => {
    const [menuStatus, setmenu] = useState(true);

    useEffect(() => {
        isOpen = menuStatus
      }, [menuStatus]);

      console.log("menuStatus", menuStatus)

      if(isOpen && menuStatus === true) {
          isOpen = true
      } else {
        isOpen = false
      }

    const { x } = useSpring({
        x: isOpen ? 0 : 100,
        config: config.molasses
    });

    const props = useSpring({
        config: config.molasses
    })


    return (
        <div className="checkout" style={{pointerEvents: isOpen ? 'all' : 'none'}}>
                   
            <animated.div style={{
                transform: x.interpolate( x => `translate3d(${x * -1}%, 0, 0)` )
            }} className='left-side'>
                <div className='left-wrapper'>
                    <h2>BORN TO BE WILD</h2>
                    <p>29-09-2020</p>
                    <div className="baby-info">
                        <p>56cm</p>
                        <p>3600 gram</p>
                        <p>Leeuw</p>
                    </div>
                    <p>Wij zijn trotse mama's</p>
                    <p>Be & Jo</p>

                </div>
            </animated.div>
            <animated.div style={{
                transform: x.interpolate( x => `translate3d(${x}%, 0, 0)`)
            }} className='right-side'>
                <div className='right-wrapper'>
                <nav>
               
                         <ul>
      <animated.li style={{
            
            transform: x.interpolate( x => `translate3d(${x * 1}%, 0, 0)`)
        }}>
        <Link onClick={() => setmenu(false)} to='home' smooth={true} duration={1000}>Home</Link>
      </animated.li>
      <animated.li style={{
            
            transform: x.interpolate( x => `translate3d(${x * 2}%, 0, 0)`)
        }}>
        <Link onClick={() => setmenu(false)} to='info'>Info</Link>
      </animated.li>
      <animated.li style={{
            
            transform: x.interpolate( x => `translate3d(${x * 3}%, 0, 0)`)
        }}>
        <Link onClick={() => setmenu(false)} to='gallary'>Gallary</Link>
      </animated.li>
      <animated.li style={{
            
            transform: x.interpolate( x => `translate3d(${x * 4}%, 0, 0)`)
        }}>
        <Link onClick={() => setmenu(false)} to='posts'>Berichten</Link>
      </animated.li>
    </ul>
                
               
                {/* <animated.a style={{
            
                transform: x.interpolate( x => `translate3d(${x * 1}%, 0, 0)`)
            }} href='#'>Home</animated.a>
                <animated.a style={{
                transform: x.interpolate( x => `translate3d(${x * 2}%, 0, 0)`)
            }}href='#'>Coco's info</animated.a>
                <animated.a style={{
                transform: x.interpolate( x => `translate3d(${x * 3}%, 0, 0)`)
            }} href='#'>Foto's</animated.a>
                <animated.a style={{
                transform: x.interpolate( x => `translate3d(${x * 4}%, 0, 0)`)
            }} href='#'>Laat een berichtje achter</animated.a>
                <animated.a style={{
                transform: x.interpolate( x => `translate3d(${x * 5}%, 0, 0)`)
            }}href='#'>Profiel</animated.a> */}


            </nav>
                </div>
            </animated.div>
        </div>
    )
}


export default NavWeb
