import React, { Component } from 'react'
import { connect } from "react-redux"
import { NavLink } from 'react-router-dom'
import Footer from './footer'
import Animation from '../animation/animi'

class Product extends Component {
    render() {
        const show = this.props.roof;
        const showList = show.length ? (
            show.map(post =>{
                const dry = post.name
                const chair = '/product?name=' + dry
                return(
                    <div className ="items" key={post.id}>
                        <NavLink to={chair} >
                            <div className= "featured-image">
                                <img src= {post.image} alt='pics' />
                            </div>
                            <div className = "info">
                                <span>{post.name}</span>
                                <span>{'\u20A6'} {post.price}</span>
                            </div>
                        </NavLink>
                     </div>
                )
            })
        ) : (
            <div className="center">Loading post...</div>
        )
        const search = this.props.location.search;
        const foo = new URLSearchParams(search);
        const params = foo.get('name');
        const life = this.props.root;
        const lifeList = life.filter(item =>item.name === params).map(item =>{
            const test = item.name;
            const tested = '/payment?name=' + test;
                    return (
                         <div className="products-items" key={item.id}>
                             <div className='product-single'>
                                <div className="featured-image" >
                                    <img src={item.image} alt='pics' />  
                                </div>
                             </div>
                            
                             <div className="content">
                                 <div className="info">
                                     <span>Product: {item.name}</span> 
                                     <br/>
                                     <span>vendor: Tetrax magnificent</span> 
                                     <br/>
                                     <span>price: <span id='price'>{item.price}</span></span> 
                                     <br/>
                                 </div>
                                 <div className="desc">
                                     <b>{item.desc}</b>
                                    <p>
                                        <b>
                                        NB:processing takes up to 10 working days 
                                        and world wide delivery is available.
                                        </b>
                                     </p>
                                 </div>
                                 <NavLink to={tested} >
                                     <button type="submit">purchase</button>
                                 </NavLink>
                             </div>
                         </div>
                     )
                 
        }) 
  
        return (
            <div className = "hide-toggle-menu">
                <Animation />
                <div className = "index-page  product-page">
                    <div className="single-product-wrapper">
                        { lifeList }
                    </div>

                    <div className= "latest-title title">
                        <h3>other product</h3>
                    </div>
                    <div className= "latest-product product-wrapper">
                        { showList }
                    </div>
                   
                </div>
                <Footer />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        roof: state.root.info,
        root: state.root.data
    }
}


export default connect(mapStateToProps)(Product)