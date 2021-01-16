import React, { Component } from 'react'
import { PaystackButton } from 'react-paystack'

export default class Sign extends Component {
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
          errors["name"] = "Please enter your Business name.";
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
          errors["comment"] = "Please enter your  Business address.";
        }
    
        this.setState({
          errors: errors
        });
    
        return isValid;
    }
    render() {
        const config = {
            reference: (new Date()).getTime(),
            email: this.state.input.email,
            amount: 2000,
            publicKey: "pk_test_82ce23694563611af6015b7bdfc1dd4a1f044acf",
        }; 
        const handlePaystackSuccessAction = (reference) => {
            alert("Transaction complete!! Thanks for doing business with us! Come back soon!!") 
            this.props.history.push('/shop')    
          };
          const handlePaystackCloseAction = () => {
            alert("whoops! Transaction cancelled ")   
          }
      
          const componentProps = {
              ...config,
              text: 'Sign up',
              onSuccess: (reference) => handlePaystackSuccessAction(reference),
              onClose: handlePaystackCloseAction,
          };
        return (
            <div className="sign-page">
                <form className="sign-form" onSubmit={this.handleSubmit}>
                    <div className="bus-name">
                        <label for="name" class="text-white">Name of Business</label>
                        <input 
                            type="text" 
                            name ="name" 
                            value={this.state.input.name} 
                            onChange={this.handleChange} 
                            className='shape'  
                            placeholder="Enter full Name" 
                            id="name"
                        />
                        <p>{this.state.errors.name}</p>
                    </div>
                    <div className="bus-address">
                        <label for="address" className="text-white">Address of Business</label> 
                        <textarea 
                            name="comment"
                            value={this.state.input.comment} 
                            onChange={this.handleChange}
                            placeholder="Enter Residential Address"
                            className='shape'
                        /> 
                        <p>{this.state.errors.comment}</p>       
                    </div>
                    <div className="email">
                        <label for="email" className="text-white">Email Address</label>
                        <input 
                            type="text"  
                            name="email" 
                            value={this.state.input.email} 
                            onChange={this.handleChange} 
                            className='shape'  
                            placeholder="Enter Email Address" 
                            id="email"
                        />
                        <p>{this.state.errors.email}</p>
                    </div>
                    <div className="phone">
                        <label for="phone number" className="text-white">Phone Number</label>
                        <input 
                            type="text" 
                            name="phone" 
                            value={this.state.input.phone} 
                            onChange={this.handleChange} 
                            className='shape'  
                            placeholder="Enter Phone Number" 
                            id="phone"
                        />
                        <p>{this.state.errors.phone}</p>
                    </div>
                    Note: you are to pay $20 before you can have your shop
                    <PaystackButton {...componentProps} />
                </form>
            </div>
        )
    }
}
