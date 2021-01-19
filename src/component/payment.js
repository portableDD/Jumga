import React, { Component } from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import Animation from '../animation/animi';
import Footer from './footer';
import { PaystackButton } from 'react-paystack';
import { FlutterWaveButton } from 'flutterwave-react-v3';



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
        const config = {
            public_key: "FLWPUBK_TEST-cc5cd42f6cd21196275f0021533d0ac9-X",
            tx_ref: (new Date()).getTime(),
            amount: price,
            currency: "USD",
            payment_options: "card,ussd,qr,barter",
            customer: {
              email: 'olifedayo94@gmail.com',
              phonenumber: "08165656988",
              name: param,
            },
            subaccounts: [
              {
                id: "RS_A8EB7D4D9C66C0B1C75014EE67D4D663",
                transaction_split_ratio: 2,
              },
              {
                id: "RS_006C1B504310E09B9F4697E409FF2BC0",
                transaction_split_ratio: 2,
              },
            ],
            customizations: {
              title: "Jumga",
              description: "Payment for item",
              logo: "https://assets.piedpiper.com/logo.png",
            },
          }; 
        const handleSuccessAction = (reference) => {
            alert("Transaction complete!! Thanks for doing business with us! Come back soon!!")        
          };
          const handleCloseAction = () => {
            alert("whoops! Transaction cancelled ")   
          }
      
          const componentProps = {
              ...config,
              text: 'Pay now',
              callback: (reference) => handleSuccessAction(reference),
              onClose: handleCloseAction,
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
                                <span>vendor: Portable Wears</span> 
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
                                <input 
                                    type="text"  
                                    name="size" 
                                    value={this.state.input.size} 
                                    onChange={this.handleChange} 
                                    className='shape'  
                                    placeholder="Enter shoe size" 
                                    id="size"/>
                                    {/* <select id="size" name="size" >
                                        <option>Select shoe size</option>
                                        <option>20</option>
                                        <option>22</option>
                                        <option>25</option>
                                        <option>27</option>
                                        <option>30</option>
                                    </select> */}
                                </p>
                               <FlutterWaveButton {...componentProps} />
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
        info: state.root.info,
        data: state.root.data
    }
}

export default connect(mapStateToProps)(payment)