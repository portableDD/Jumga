import React, { Component } from 'react'
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { input } from "./InputControl";
import { SelectField } from './SelectField'
import { selectForm } from './selectFormvalidate'
import Col from "react-bootstrap/Col"
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Form from "react-bootstrap/Form";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from "react-bootstrap/Button";
import './shop.css'
import {  auth, db } from '../utils/app';
class Shop extends Component {

  constructor (props) {
    super(props)
    this.state = {
        useremail:'',
        phonenumber: '',
        address: '',
        businessName: '',
        ownerName: '',
        businessType: ''
    }
}

  componentDidMount() {
    this.handleFetchData()
  }

  handleFetchData = () => {
    db.collection("sellers").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().name}`);
          const x = doc.data()
          if (auth.currentUser.email === x.email) {
            this.setState({
              useremail: x.email,
              phonenumber: x.phone_number,
              address: x.address,
              businessName: x.business_name,
              businessType: x.business_type,
              ownerName: x.name
            })
          }
         
      });
  });
  }


  handleClick = () => {
    this.props.history.push('/')   
  }
  handleDisplay = () => {
    const form = document.getElementById("addProductSection")
    const homem = document.getElementById("homeSection")
      form.style.display = 'block';
      homem.style.display = 'none';
    
  }

  handleHome = () => {
    const form = document.getElementById("addProductSection")
    const homem = document.getElementById("homeSection")
      form.style.display = 'none';
      homem.style.display = 'block';
      
  }

  render() {
    
    const { Name, Phone, EmailValue, Type, Comment, Owner, handleSubmit, pristine, submitting, valid, } = this.props
    const ownerName = Name
    const phoneNum = Phone
    const email = EmailValue
    const busType = Type
    const busAddress = Comment
    const busName = Owner
    console.log(Name, Phone, EmailValue, Type, Comment, Owner);
    return (
      <Container>
        <h1 className="text-center text-uppercase font-weight-bold" >{this.state.businessName || busName}</h1>
        <Row>
          <Col  xs={12} md={3} sm={4}  xl={2} lg={3}>
            <Navbar bg="light" variant="light">
              <Nav className="flex-column" variant="pills" defaultActiveKey="#homeSection">
                <Nav.Item>
                  <Nav.Link href="#homeSection" id="pure" onClick={this.handleHome}>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#addProductSection" id="display" onClick={this.handleDisplay}>Add Product</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar>
          </Col>
          <Col className="freeze pb-3" sm={1} lg={1}></Col>
          <Col className="bg-light" sm={8} md={8} lg={8}>
            <div id="homeSection" className=" pt-3" >
              <h6 className="pl-5"> Owner's Name : {this.state.ownerName || ownerName}</h6>
              <h6 className="pt-2 pl-5">Business Address : {this.state.address || busAddress}</h6>
              <h6 className="pt-2 pl-5">Business Type: {this.state.businessType || busType}</h6>
              <h6 className="pt-2 pl-5">Phone Number: {this.state.phonenumber || phoneNum}</h6>
              <h6 className="pt-2 pl-5 pb-2">Email Address: {this.state.useremail || email}</h6>
            </div>
            <div id='addProductSection' style={{display:'none'}} >
              <Form onSubmit={handleSubmit} className='pt-3'>
                <Form.Row>
                  <Form.Group as={Col} >
                    <Form.Label>Name of product</Form.Label>
                    <Field
                      name="name"
                      type="text"
                      component={input}
                      id="product-name"
                      placeholder="Enter your product name "
                    />
                  </Form.Group>

                  <Form.Group as={Col} >
                    <Form.Label>Price </Form.Label>
                    <Field
                      name="price"
                      type="text"
                      component={input}
                      id="price"
                      placeholder="Amount it cost"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group >
                  <Form.Label>Description</Form.Label>
                  <Field
                    name="desc"
                    type="textarea "
                    component={input}
                    id="comment"
                    placeholder="Give a description about the product"
                  />
                </Form.Group>
                <Form.Row>

                  <Form.Group as={Col} >
                    <Form.Label>Category</Form.Label>
                    <Field name="category" component={SelectField} id="select" defaultValue="Choose...">
                      <option value="" disabled="disabled">Choose ...</option>
                      <option value="Shoes">Shoes</option>
                      <option value="Slippers">Slippers</option>
                      <option value="Sandals">Sandals</option>
                    </Field>
                  </Form.Group>
                </Form.Row>
                <Button  variant="primary" type="submit" disabled={!valid || pristine || submitting}>
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
Shop = reduxForm({
  form: 'selecting',// a unique identifier for this form
  validate: selectForm,
  destroyOnUnmount: false
})(Shop)


const mapDispatchToProps = (dispatch) => {
  const Id = `id_${Math.round(Math.random() * 100)}`;
  return {
    onSubmit: data => {
      // return console.log(data);
      dispatch({
        type: "ADD_DATA",
        data: { id: Id, ...data  }
      })
    }
  }
}

const selector = formValueSelector('selectingFormValues')
Shop = connect(
  state => {
    const EmailValue = selector(state, 'email')
    const Name = selector(state, 'name')
    const Owner = selector(state, 'owner')
    const Phone = selector(state, 'phone')
    const Type = selector(state, 'type')
    const Comment = selector(state, 'comment')

    return {
      EmailValue,
      Name,
      Owner,
      Phone,
      Type,
      Comment
    }
  }, mapDispatchToProps)(Shop)




export default Shop