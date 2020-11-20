import React, { Component } from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import Animation from '../animation/animi';
import Footer from './footer';
import { PaystackButton } from 'react-paystack'


class payment extends Component{
    state ={
        input: {},
        errors: {},
        
    }
    handleChange = (event) => {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
      }
      handleSubmit = (event) => {
        event.preventDefault();
      
        if(this.validate()){
            
            console.log(this.state);
      
            let input = {};
            input["name"] = "";
            input["phone"]="";
            input["email"] = "";
            input["comment"] = "";
            this.setState({input:input});
      
            alert('Demo Form is submited');
            
        }
      }
      validate = () => {
        let input = this.state.input;
        let errors = {};
        let isValid = true;
    
        if (!input["name"]) {
          isValid = false;
          errors["name"] = "Please enter your name.";
        }
        
        if (!input["phone"]) {
            isValid = false;
            errors["phone"] = "Please enter your phone number.";
        }

        if (typeof input["phone"] !== "undefined") {
            const pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(input["phone"])) {
                isValid = false;
                errors["phone"] = "Please enter only number.";
            }else if(input["phone"].length !== 11){
                isValid = false;
                errors["phone"] = "Please enter valid phone number.";
            }
        }
        

        if (!input["email"]) {
          isValid = false;
          errors["email"] = "Please enter your email Address.";
        }
    
        if (typeof input["email"] !== "undefined") {
            
          const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(input["email"])) {
            isValid = false;
            errors["email"] = "Please enter valid email address.";
          }
        }
    
        if (!input["comment"]) {
          isValid = false;
          errors["comment"] = "Please enter your address.";
        }
    
        this.setState({
          errors: errors
        });
    
        return isValid;
    }
       
    

    
    
    render() {
        const sea = this.props.location.search;
        const foot = new URLSearchParams(sea);
        const param = foot.get('name');
        const face = this.props.data;
        const priceTag = face.filter(items =>items.name === param).map(item => { 
            return item.price
        })
       const price = priceTag.toString().replace(',','') 
        console.log(price)
        const config = {
            reference: (new Date()).getTime(),
            email: this.state.input.email,
            amount: price + '00',
            publicKey: "pk_test_82ce23694563611af6015b7bdfc1dd4a1f044acf",
        }; 
        const handlePaystackSuccessAction = (reference) => {
            alert("Transaction complete!! Thanks for doing business with us! Come back soon!!")        
          };
          const handlePaystackCloseAction = () => {
            alert("whoops! Transaction cancelled ")   
          }
      
          const componentProps = {
              ...config,
              text: 'Pay now',
              onSuccess: (reference) => handlePaystackSuccessAction(reference),
              onClose: handlePaystackCloseAction,
          };
    
        const show = this.props.info;
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
        const life = this.props.data;
        const lifeList = life.filter(items =>items.name === params).map(item =>{
            return (
                <div className="products-items" key={item.id}>
                        <div className="product-single">
                            <div className="featured-image">
                                <img src={item.image} alt='the pics'/>
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
                            <form className="pay-bitch" onSubmit={this.handleSubmit} >
                                <p className="name">
                                    <input 
                                    type="text" 
                                    name ="name" 
                                    value={this.state.input.name} 
                                    onChange={this.handleChange} 
                                    className='shape'  
                                    placeholder="Enter full Name" 
                                    id="name"/>
                                </p>
                                <p>{this.state.errors.name}</p>
                                <p className="phone">
                                    <input 
                                    type="text" 
                                    name="phone" 
                                    value={this.state.input.phone} 
                                    onChange={this.handleChange} 
                                    className='shape'  
                                    placeholder="Enter Phone Number" 
                                    id="phone"/>
                                </p>
                                <p>{this.state.errors.phone}</p>
                                <p className="email">
                                    <input 
                                    type="text"  
                                    name="email" 
                                    value={this.state.input.email} 
                                    onChange={this.handleChange} 
                                    className='shape'  
                                    placeholder="Enter Email Address" 
                                    id="email"/>
                                </p>
                                <p>{this.state.errors.email}</p>
                                <p className="house">
                                <textarea 
                                    name="comment"
                                    value={this.state.input.comment} 
                                    onChange={this.handleChange}
                                    placeholder="Enter Residential Address"
                                    className='shape'/>
                                </p>
                                <p>{this.state.errors.comment}</p>
                                <p className="size">
                                    <select id="size" name="size" >
                                        <option>Select shoe size</option>
                                        <option>20</option>
                                        <option>22</option>
                                        <option>25</option>
                                        <option>27</option>
                                        <option>30</option>
                                    </select>
                                </p>
                               <PaystackButton {...componentProps} />
                            </form>
                        </div>
                    </div>    
            )
        })

        return(
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
        info: state.info,
        data: state.data
    }
}

export default connect(mapStateToProps)(payment)