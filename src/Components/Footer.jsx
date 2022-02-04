import React from 'react';
import '../Stylesheets/Footer.css'
import logo from '../images/logo3.png'
import {Link} from 'react-router-dom';
function Footer() {
  return (
  <div>
  <ul className='footer'>
  <li>
    <div className='logo'>
    <img src={logo} alt ="logo" id="logo" width={40}></img>Healthy Feeds</div>
  </li>
  <li  className='quick_links'>
     <h4 id="quick_links">Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signin">Profile</Link></li>
          <li><a href="#">Mental Health</a></li>
          <li><a href="#">Nutrition</a></li>
          <li><a href="#">Covid Updates</a></li>
        </ul>
  </li>

  <li className='frontend'>
    <h4 id="frontend">FRONT END DEVELOPERS</h4>
        <ul>
            <li>Mythili.E</li>
            <li>Janani.N</li>
        </ul>
  </li>

  <li className='backend'>
    <h4 id="backend">BACK END DEVELOPERS</h4>
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
  );
}

export default Footer
