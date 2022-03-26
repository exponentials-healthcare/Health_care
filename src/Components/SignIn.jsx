import React from "react";
import { useState } from "react";
import '../Stylesheets/SignIn.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import goo from '../images/goo.jpg'

// const axios = require('axios')
// var image;



  // axios.get('/signin/server.js')
  //      .then( (response) =>{
  //   console.log(response.data);
  //   image =response.data;

  //   // setNews(myNews);
  // })


// function Loginform(){

 


//     return(
//         <diV className="form">
//         <Form id="login">
//           <Form.Control type="text" 
//                         id="username1"
//                         placeholder="Email id" 
//                         autocomplete="off" 
//                         //className="bg-transparent"
//                         required/>
//                         <br></br>
        
    //        <Form.Control type="password" 
    //                     id="password1"
    //                     placeholder="Password" 
    //                     autocomplete="off"
    //                     //className="bg-transparent"
    //                     required/>
    //                     <br></br>
       
    //     <Button variant="default" type="submit" className="button"  >
    //        SUBMIT
    //     </Button>
    //   </Form>
    //   </diV>
    // );
// }
function Signupform(){
    return(
      <diV className="form">
      <img src={goo} alt="img" height={90} width={90}></img>
         <a href="http://localhost:5000/auth/google"  className="sign_in">  Sign up with google</a>

         {/* <img src={image.dp} height={200} width={200} alt="img"></img> */}
         
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
        {/* <Tab tabClassName="tab" eventKey="Login" title="LOGIN">
          <Loginform/>
        </Tab> */}
        <Tab tabClassName="tab" eventKey="SignUp" title="SIGNUP">
          <Signupform/>
        </Tab>
      </Tabs>
      </div>
    

     


      </div>
    );
  }
  
  
  export default SignIn