import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { input } from "./InputControl";
import Col from "react-bootstrap/Col"
import { formValidatorHelper } from "./FormValidator.js";
import { FlutterWaveButton } from 'flutterwave-react-v3';
import { connect } from 'react-redux'
import {  auth, db } from '../utils/app';

 class SignUp extends Component {

    constructor (props) {
        super(props)
        this.state = {
            password:'',
            useremail:'',
            phonenumber: '',
            address: '',
            businessName: '',
            ownerName: '',
            businessType: ''
        }
    }

    handleEmailChange = event => {
        this.setState({useremail: event.target.value})
    
    }

    handlePasswordChange = event => {
        this.setState({password: event.target.value})
    
    }

    handleNameChange = event => {
        this.setState({ownerName: event.target.value})
    }

    handlePhoneChange = event => {
        this.setState({phonenumber: event.target.value})
    }

    handleBusinessNameChange = event => {
      this.setState({businessName: event.target.value})
    }

    handleBusTypeChange = event => {
      this.setState({businessType: event.target.value})
    }

    handleAddressChange = event => {
      this.setState({address: event.target.value})
    }
   

    handleFbAuth = async () => {
      const { useremail, password, businessName, businessType, address, phonenumber, ownerName } = this.state  
      try {
        console.log(useremail)
       const user =  await auth.createUserWithEmailAndPassword(useremail, password);
       if (user) {
          await db.collection('sellers').add({
          address,
          business_name: businessName,
          business_type: businessType,
          email: useremail,
          name: ownerName,
          phone_number: phonenumber
         })
       }
      } catch (error) {
          console.log(error)
          alert(error)
      }  
    }


   

  render() {
    const { handleSubmit, pristine, submitting, valid, EmailValue, } = this.props;
    const email = EmailValue
        const config = {
            tx_ref: (new Date()).getTime(),
            amount: 20,
            public_key: `${process.env.REACT_APP_FLUTTER_WAVE_PUBLIC_KEY}`,
            currency: 'USD',
            payment_options: 'card,mobilemoney,ussd',
            customer: {
                email,
                phonenumber: '08165656988',
                name: 'Ayooluwa Olosunde',
              },
            customizations: {
            title: 'Jumga',
            description: 'Payment for shop creation',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
          },
        }; 
       
   
  const handleSuccessAction = (reference) => {
      alert("Transaction complete!! Thanks for doing business with us! Come back soon!!") 
      this.props.history.push('/shop')    
    };
    const handleCloseAction = () => {
      alert("whoops! Transaction cancelled ")   
    }

    const componentProps = {
        ...config,
        text: 'Create a seller account',
        callback: (reference) => handleSuccessAction(reference),
        onClose: handleCloseAction,
    };
    

    return (
      <div className="container ">
            <Form onSubmit={handleSubmit(this.handleFbAuth)}>
              <Form.Row>
                <Form.Group as={Col} >
                  <Form.Label>Business Name</Form.Label>
                    <Field
                      name="owner"
                      type="text"
                      component={input}
                      id="business-name"
                      placeholder="Enter your business name"
                      onChange= {this.handleBusinessNameChange}
                    />
                </Form.Group>
                  
                <Form.Group as={Col} >
                  <Form.Label>Owner's Name</Form.Label>
                  <Field
                    name="name"
                    type="text"
                    component={input}
                    id="owner-name"
                    placeholder="Enter your full name"
                    onChange={this.handleNameChange}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group >
                <Form.Label>Address</Form.Label>
                <Field
                  name="comment"
                  type="textarea "
                  component={input}
                  id="comment"
                  placeholder="Enter your business address"
                  onChange = {this.handleAddressChange}
                />
              </Form.Group>
              
              <Form.Group>
                <Form.Label>Business Type</Form.Label>
                <Field
                  name="type"
                  type="text"
                  component={input}
                  id="type"
                  placeholder="Enter your business type"
                  onChange= {this.handleBusTypeChange}
                />
              </Form.Group>

              
              

              <Form.Row>
                <Form.Group as={Col} >
                  <Form.Label>Email</Form.Label>
                  <Field
                    name="email"
                    type="text"
                    component={input}
                    id="email"
                    placeholder="Enter your email"
                    onChange={this.handleEmailChange}
                  />
                </Form.Group>
                
                <Form.Group as={Col} >
                  <Form.Label>Phone Number</Form.Label>
                  <Field
                    name="phone"
                    type="text"
                    component={input}
                    id="phone-num"
                    placeholder="Enter your phone"
                    onChange = {this.handlePhoneChange}
                  />
                </Form.Group>

                <Form.Group as={Col} >
                  <Form.Label>Password</Form.Label>
                  <Field
                    name="password"
                    type="text"
                    component={input}
                    id="password"
                    placeholder="Enter your password"
                    onChange= {this.handlePasswordChange}
                  />
                </Form.Group>
              </Form.Row>

              
                <FlutterWaveButton  {...componentProps} disabled={!valid || pristine || submitting}/>
            </Form>
           

      </div>
    )
  }
}

SignUp = reduxForm({
  form: 'selectingFormValues' ,// a unique identifier for this form
  validate: formValidatorHelper ,
  destroyOnUnmount: false
})(SignUp)

const selector = formValueSelector('selectingFormValues')
SignUp = connect(state => {
  const EmailValue = selector(state, 'email')
  return {
    EmailValue,
    
  }
})(SignUp)


export default SignUp