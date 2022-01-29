import React from 'react';
import frontpg from '../images/frontpg.jpg'
import '../Stylesheets/Header.css';

function HomeContent() {

   const health="Keeping your body healthy is an expression of "
   const quote="    gratitude to the whole cosmos"

  return (
  <div>
    <img src={frontpg} alt="home_pic" className="bgimg"></img>
   
  </div>
  );
}
export default HomeContent