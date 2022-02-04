import React from "react";
import { useState } from "react";
import '../Stylesheets/SignIn.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Loginform(){
    return(
        <diV className="form">
        <Form>
          <Form.Control type="text" 
                        placeholder="USERNAME" 
                        //className="bg-transparent"
                        required/>
                        <br></br>
        
          <Form.Control type="password" 
                        placeholder="PASSWORD" 
                        //className="bg-transparent"
                        required/>
                        <br></br>
       
        <Button variant="default" type="submit" className="button">
           SUBMIT
        </Button>
      </Form>
      </diV>
    );
}
function Signupform(){
    return(
        <diV className="form">
        <Form>
          <Form.Control type="text" 
                        placeholder="NAME"
                        //className="bg-transparent" 
                        required/>
                        <br></br>
        
          <Form.Control type="email" 
                        placeholder="EMAIL" 
                        //className="bg-transparent"
                        required/>
                        <br></br>

          <Form.Control type="password" 
                        placeholder="PASSWORD" 
                        //className="bg-transparent"
                        required/>
                        <br></br>
       
          <Form.Control type="password" 
                        placeholder="CONFIRM PASSWORD" 
                        //className="bg-transparent"
                        required/>
                        <br></br>

        <Button variant="default" type="submit" className="button">
           SUBMIT
        </Button>
      </Form>
      </diV>
    );
}
function SignIn() {
    const [key, setKey] = useState("Login");
  
    return (
        <div className="background">
          <br></br>
          <br></br>
        <div className="tabs">
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 nav-justified"
      >
        <Tab tabClassName="tab" eventKey="Login" title="LOGIN">
          <Loginform/>
        </Tab>
        <Tab tabClassName="tab"eventKey="SignUp" title="SIGNUP">
          <Signupform/>
        </Tab>
      </Tabs>
      </div>
      </div>
    );
  }
  
  export default SignIn