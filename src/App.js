import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeContent from './Components/HomeContent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-bootstrap/dist/react-bootstrap.min.js';
import SignIn from './Components/SignIn';
import Mental from './Components/Mental';
import Covid from './Components/Covid';
function App() {
  return (
    
   <Router>
   
      <Routes>
        <Route path="/" element={<HomeContent />} />
          {/* <Route index element={<HomeContent />} /> */}
          <Route path="/signin" element={<SignIn />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
          <Route path="/Covid" element={<Covid />} />
          <Route path="/Mental" element={<Mental />} />

      </Routes>
    
    
    </Router>
     
  
  );
}

export default App;
