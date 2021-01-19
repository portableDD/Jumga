import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col"
import { auth } from '../utils/app';
import {  NavLink } from 'react-router-dom'
import Spinner from 'react-spinner-material';


export default class Sign extends Component {
    state = {
        email: '',
        password: '',
        loading: false
    }
    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }
    handleSubmit = async(e) => {
        this.setState({
            loading: true
        })
        e.preventDefault()
        try {
         await auth.signInWithEmailAndPassword(this.state.email,this.state.password)
        this.props.history.push('/shop')
        } catch (error) {
            alert(error)
            this.setState({
                loading: false
            })
        }        
    }
    render() {
        return (
            <Container >
                <div>
                <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={this.state.loading} />
                </div>
                <Col md={{ span: 6, offset: 3 }} >
                <Form onSubmit={this.handleSubmit} className="pt-5">
                    <Form.Group id="Email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange}/>
                        <Form.Text className="text-muted" >
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group id="Password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="text-right">
                        Submit
                    </Button>
                    <Form.Text className="text-muted text-center" >
                        Don't have an account? <NavLink to="/sign-up">Sign up</NavLink>
                    </Form.Text>
                    </Form>
                </Col>
                
            </Container>
        )
    }
}
 