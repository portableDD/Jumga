import React, { Component } from 'react'
import { connect } from "react-redux"
import { NavLink } from 'react-router-dom'
import Footer from './footer'
import Animation from '../animation/animi'

class Slippers extends Component {
    render(){
        const view = this.props.data;
        const post = view.length ? (
            view.map(pod => {
                const stew = pod.name
                const fry= '/product?name=' + stew
                return (
                    <div className ="items" key={pod.id}>
                        <NavLink to= {fry}>
                            <div className= "featured-image">
                                <img src= {pod.image} alt='pics'/>
                            </div>
                            <div className = "info">
                                <span>{pod.name}</span>
                                <span>{'\u20A6'} {pod.price}</span>
                            </div>
                        </NavLink>                  
                     </div>
                ) 
            })
            ) : (
                <div className="center">Loading post...</div>
            )
         
        return(            
            <main className = "hide-toggle-menu">
                <Animation />
                <div className = "index-page ">
                    <div className= "latest-title title">
                        <h3>LATEST</h3>
                    </div>
                    <div className = "latest-product product-wrapper">
                        { post }
                    </div>
                </div> 
                <Footer />
            </main>           
        ) 
    }
}

const mapStateToProps = (state) => {
    return{
        data: state.data.filter(item => {
            return item.category === 'slipper'
        })
    }
}
    

export default connect(mapStateToProps)(Slippers)