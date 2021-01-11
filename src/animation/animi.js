import React, { Component } from 'react'
import Background1 from '../pics/animi pics/slide 1/slide-background.png'
import Slide1 from '../pics/animi pics/slide 1/slide-shoe1.png' 
import Background2 from '../pics/animi pics/slide 2/slide-background2.jpg'
import Slide2 from '../pics/animi pics/slide 2/slide-shoe2.png'
import Background3 from '../pics/animi pics/slide 3/slide-background3.png'
import Slide3 from '../pics/animi pics/slide 3/slide-shoe3.png'
import Background4 from '../pics/animi pics/slide 4/slide-background4.jpg'
import { Spring } from 'react-spring/renderprops'
import { animated } from 'react-spring/renderprops'



export default class animi extends Component {
    
    render() {
        return (
                <div className="slide-show-container">
                    <Spring native to={{x: 0}}
                        config={{duration: 10000}}>
                        {props => (
                            <animated.div className="slide-show slide-1" id='1' style={{
                                display: 'none',
                                opacity: props.x
                                .interpolate({ 
                                    range: [0,0.30, 1], 
                                    output: [0.5, 1, 1] })
                              }}>
                                <img className="slide-img-background" 
                                    src= {Background1} 
                                    alt="banner"
                                />	
                                <Spring native to={{x: 0}}
                                        config={{duration: 5000}}>
                                        {props => (
                                            <div  className="slide-product"  style={{
                                                opacity: props.x
                                                .interpolate({ 
                                                    range: [0,0.60,0.80, 1], 
                                                    output: [0, 0, 1, 1] }),
                                                transform: props.x
                                                  .interpolate({
                                                    range: [0, 0.60, 0.80, 1],
                                                    output: [0.4, 0.4, 0.8, 0.8]
                                                  })
                                                  .interpolate(x => `scale(${x})`)
                                              }}>
                                                <img src= {Slide1} alt="slides"/>
                                            </div> 
                                        )}
                                </Spring>
                                <Spring native to={{x: 0}}
                                    config={{duration: 5000}}>
                                        {props => (
                                            <div  className="info"  style={{
                                                opacity: props.x
                                                .interpolate({ 
                                                    range: [0, 0.30, 0.60, 1], 
                                                    output: [0.1, 0.1, 1, 1] }),
                                                transform: props.x
                                                  .interpolate({
                                                    range: [0, 0.30, 0.60, 1],
                                                    output: [0.90, 0.90, 0, 0]
                                                  })
                                                  .interpolate(x => `rotatey(${x}deg)`)
                                              }}>
                                                <span>DISCOUNT<br/>FOR COMFORT</span>
                                                <span>Get your footwears at 20% off</span>
                                                <a href="mjndcuiHNDJUHUE">shop now</a>
                                            </div>
                                        )}      
                                </Spring>
                            </animated.div>	
                        )}
                    </Spring>
                    <Spring native to={{x: 0}}
                        config={{duration: 10000}}>
                        {props => (
                            <animated.div className="slide-show slide-2"  id='2' style={{
                                display: 'none',
                                opacity: props.x
                                .interpolate({ 
                                    range: [0, 0.30, 1], 
                                    output: [0.5, 1, 1] })
                              }}>
                                <img className="slide-img-background" 
                                    src= {Background2}
                                    alt="banner"
                                />
                                <Spring native to={{x: 0}}
                                        config={{duration: 5000}}>
                                        {props => (
                                                <div className="slide-product"  style={{
                                                    opacity: props.x
                                                    .interpolate({ 
                                                        range: [0,0.60,0.80, 1], 
                                                        output: [0,0,1, 1] }),
                                                    transform: props.x
                                                      .interpolate({
                                                        range: [0, 0.60, 0.80, 1],
                                                        output: [0.4, 0.4, 0.8, 0.8]
                                                      })
                                                      .interpolate(x => `scale(${x})`)
                                                  }}>
                                                    <img src= {Slide2} alt="slides"/>
                                                </div>
                                        )}
                                </Spring>
                                <Spring native to={{x: 0}}
                                    config={{duration: 5000}}>
                                        {props => (
                                            <div className="info" style={{
                                                opacity: props.x
                                                .interpolate({ 
                                                    range: [0, 0.30, 0.60, 1], 
                                                    output: [0.1, 0.1, 1, 1] }),
                                                transform: props.x
                                                  .interpolate({
                                                    range: [0, 0.30, 0.60, 1],
                                                    output: [0.90, 0.90, 0, 0]
                                                  })
                                                  .interpolate(x => `rotatey(${x}deg)`)
                                              }}>
                                                <span>BESPOKE<br/>FOOTWEARS</span>
                                                <span>Your feet deserves the best</span>
                                                <a href="mnbhcjgUWKENFCJ">shop now</a>
                                            </div>
                                        )}      
                                </Spring>
                            </animated.div>
                        )}
                    </Spring>
                    <Spring native to={{x: 0}}
                        config={{duration: 10000}}>
                        {props => (
                            <animated.div className="slide-show slide-3" id='3' style={{
                                display:'none',
                                opacity: props.x
                                .interpolate({ 
                                    range: [0, 0.30, 1], 
                                    output: [0.5, 1, 1] })
                              }}>
                                <img className="slide-img-background" 
                                    src= {Background3}
                                    alt="banner"
                                />
                                <Spring native to={{x: 0}}
                                        config={{duration: 5000}}>
                                        {props => (
                                                <div className="slide-product"  style={{
                                                    opacity: props.x
                                                    .interpolate({ 
                                                        range: [0,0.60,0.80, 1], 
                                                        output: [0,0,1, 1] }),
                                                    transform: props.x
                                                      .interpolate({
                                                        range: [0, 0.60, 0.80, 1],
                                                        output: [0.4, 0.4, 0.8, 0.8]
                                                      })
                                                      .interpolate(x => `scale(${x})`)
                                                  }}>
                                                    <img src={Slide3} alt="slides"/>
                                                </div>
                                        )}
                                </Spring>
                                <Spring native to={{x: 0}}
                                    config={{duration: 5000}}>
                                        {props => (
                                            <div className="info" style={{
                                                opacity: props.x
                                                .interpolate({ 
                                                    range: [0, 0.30, 0.60, 1], 
                                                    output: [0.1, 0.1, 1, 1] }),
                                                transform: props.x
                                                  .interpolate({
                                                    range: [0, 0.30, 0.60, 1],
                                                    output: [0.90, 0.90, 0, 0]
                                                  })
                                                  .interpolate(x => `rotatey(${x}deg)`)
                                              }}>
                                                <span>LOOK<br/>DIFFERENT</span>
                                                <span>The confidence you need native to walk the world</span>
                                                <a href="jkdvuiscnkjd">shop now</a>
                                            </div>
                                        )}      
                                </Spring>
                            </animated.div>
                        )}
                </Spring>
                <Spring native to={{x: 0}}
                        config={{duration: 10000}}>
                        {props => (
                            <animated.div className="slide-show slide-4" id='4' style={{
                                display: 'flex',
                                opacity: props.x
                                .interpolate({ 
                                    range: [0, 0.30, 1], 
                                    output: [0.5, 1, 1] })
                              }}>
                                <img className="slide-img-background" 
                                    src={Background4}
                                    alt="banner"
                                />
                            </animated.div>
                        )}
                </Spring>
                </div>

        )
    }
}
