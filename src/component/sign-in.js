import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { input } from "./InputControl";
// import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col"
import { formValidatorHelper } from "./FormValidator.js";
import { PaystackButton } from 'react-paystack'
import { connect } from 'react-redux'

 class Sign extends Component {
  render() {
    const { handleSubmit,  pristine, submitting, valid, EmailValue, } = this.props;
    // const fields = [Name, telePhone, Comment, Owner, Type, EmailValue]
    const email = EmailValue
    const config = {
      reference: (new Date()).getTime(),
      email,
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
      <div className="container ">
        
            <Form onSubmit={handleSubmit(values => console.log(values))}>
              <Form.Row>
                <Form.Group as={Col} >
                  <Form.Label>Business Name</Form.Label>
                    <Field
                      name="owner"
                      type="text"
                      component={input}
                      id="business-name"
                      placeholder="Enter your business name"
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
                />
              </Form.Group>
              <Form.Group >
                <Form.Label>Business Type</Form.Label>
                <Field
                  name="type"
                  type="text"
                  component={input}
                  id="type"
                  placeholder="Enter your business type"
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
                  />
                </Form.Group>
              </Form.Row>

              
                <PaystackButton  {...componentProps} disabled={!valid || pristine || submitting}/>
            </Form>
            {/* <Button variant="primary" type="submit" >
                Submit
            </Button> */}

            {/* <Button variant="primary" type="submit">
                Submit
              </Button>
          <Button as="input" type="reset" value="Reset" onClick={reset}/> */}

      </div>
    )
  }
}

Sign = reduxForm({
  form: 'selectingFormValues' ,// a unique identifier for this form
  validate: formValidatorHelper ,
  destroyOnUnmount: false
})(Sign)

const selector = formValueSelector('selectingFormValues')
Sign = connect(state => {
  // can select values individually
  const EmailValue = selector(state, 'email')
  // const favoriteColorValue = selector(state, 'favoriteColor')
  // // or together as a group
  // const { Name, Owner, telePhone, Type, Comment } = selector(state, 'name', 'owner' , 'phone', 'type', 'comment')
  return {
    EmailValue,
    // Name,
    // Owner, 
    // telePhone,
    // Type,
    // Comment
    // favoriteColorValue,
    // fullName: `${firstName || ''} ${lastName || ''}`
  }
})(Sign)


export default Sign