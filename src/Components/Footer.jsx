import React from 'react';
import '../Stylesheets/Footer.css'
import logo from '../images/logo3.png'
import {Link} from 'react-router-dom';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap'
import {BsInstagram} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';
import {FaFacebookF} from 'react-icons/fa';
import {SiTwitter} from 'react-icons/si';
function Footer() {
  return (
  <div>
  {/* <Row className='footer'sm={1} lg={4} >
  <Col className='p-lg-5 d-flex justify-content-sm-center logo' sm={1}>
 
   <div>
    <img src={logo} alt ="logo" id="logo" width={40}></img>Healthy Feeds</div>
  
  </Col>
  <Col sm={1} className='quick_links '>
 
     <h4 id="quick_links">Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signin">Profile</Link></li>
          <li><a href="#">Mental Health</a></li>
          <li><a href="#">Nutrition</a></li>
          <li><a href="#">Covid Updates</a></li>
          </ul> */}
        {/* <Row><Link to="/">Home</Link></Row>
        <Row><Link to="/signin">Profile</Link></Row>
        <Row><a href="#">Mental Health</a></Row>
        <Row><a href="#">Nutrition</a></Row>
        <Row><a href="#">Covid Updates</a></Row> */}
 
  {/* // </Col>
// <Col  sm={1} className='frontend d-flex justify-content-center'>
  
//     <h4 id="frontend">FRONT END DEVELOPERS</h4>
//         <ul>
//             <li>Mythili.E</li>
//             <li>Janani.N</li>
//         </ul>
  
// </Col>
// <Col sm={1} className='backend d-flex justify-content-center'>
 
//     <h4 id="backend">BACK END DEVELOPERS</h4>
//         <ul>
//              <li>Kavyapriya.J.G</li>
//              <li>Kowsika.C</li>
//         </ul>
 
//   </Col>
//   <br></br>
//   <br></br>
//   <br></br>
 
//  </Row> */}

{/* <Row lg={4} sm={4} md={1} className='footer'>
  <Col sm={1}>
  <div className='logo'>
    <img src={logo} alt ="logo" id="logo" width={40}></img>Healthy Feeds
  </div>
  </Col>

  <Col sm={1} className='d-flex justify-content-sm-center'>
  <h4 id="quick_links">Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signin">Profile</Link></li>
          <li><a href="#">Mental Health</a></li>
          <li><a href="#">Nutrition</a></li>
          <li><a href="#">Covid Updates</a></li>
          </ul>
  </Col>

  <Col sm={1}>
  <h4 id="frontend">FRONT END DEVELOPERS</h4>
         <ul>
             <li>Mythili.E</li>
             <li>Janani.N</li>
         </ul>
  </Col>

  <Col sm={1}>
  <h4 id="backend">BACK END DEVELOPERS</h4>
         <ul>
              <li>Kavyapriya.J.G</li>
              <li>Kowsika.C</li>
         </ul>
  </Col>
</Row> */}


<div>
  <ul className='footer'>
  <li>
    <div className='logo'>
    <img src={logo} alt ="logo" id="logo" width={40}></img>Healthy Feeds</div>
   <div className='icons'> <BsInstagram className='icons_footer'></BsInstagram>
   <FaFacebookF className='icons_footer'></FaFacebookF>
    <SiGmail className='icons_footer'></SiGmail>
   <SiTwitter className='icons_footer'></SiTwitter>
   </div>
  </li>
  <li  className='quick_links'>
     <h4 id="quick_links">Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signin">Profile</Link></li>
          <li><Link to="/mental">Fitness</Link></li>
          <li><Link to="/GlobalNews">Global News</Link></li>
          <li><Link to="/covid">Covid Updates</Link></li>
        </ul>
  </li>

  <li className='frontend'>
    <h4 id="frontend">UI/UX,FRONT END..</h4>
        <ul>
            <li>Mythili.E</li>
            <li>Janani.N</li>
        </ul>
  </li>

  <li className='backend'>
    <h4 id="backend">BACK END,DATABASE..</h4>
        <ul>
             <li>Kavyapriya.J.G</li>
             <li>Kowsika.C</li>
        </ul>
  </li>
  <br></br>
  <br></br>
  <br></br>
  </ul>
 
  </div>


  </div>
  );
}

export default Footer
