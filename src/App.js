import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeContent from './Components/HomeContent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-bootstrap/dist/react-bootstrap.min.js';
import SignIn from './Components/SignIn';

function App() {
  return (
   <Router>
   
      <Routes>
        <Route path="/" element={<HomeContent />} />
          {/* <Route index element={<HomeContent />} /> */}
          <Route path="/signin" element={<SignIn />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        
      </Routes>
    
    
    </Router>
    

     
  
  );
}

export default App;
