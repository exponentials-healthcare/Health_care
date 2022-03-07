import {React,useState,useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
import '../Stylesheets/Content.css'
import bgpic from '../images/New health-wellness.jpg'


const axios = require('axios')
function Mental(){

    const[news,setNews]=useState([]);

    const getNews= ()=>{
        axios.get('https://healthy3.herokuapp.com/api')
        .then( (response) =>{
          console.log(response.data);
          const myNews=response.data;
     
          setNews(myNews);
        })
      }

      useEffect( () => getNews(),[] );

     
      const renderNews = (eachNews,index) =>{
        if(eachNews.source!=="nytimes.com")
        {
        
        return(
          <Col className='news' sm={1}>
            
             
          <a href={eachNews.source}>
          <div className='news_title'><h5>{eachNews.title}</h5></div>
          </a>
         
          <br></br>
        <br></br>
        <br></br>
        </Col>
            
         
        )
      
      }
      }


  return(
    <div>
    <Header />
    <br></br>
    <br></br>
   
      <Container>
      <img src={bgpic} alt="img" className='mental_bg' ></img>
      <br></br>
      <br></br>
      <h3 style={{color:"brown"}}>  FITNESS UPDATES..</h3>
      <br></br>
      <br></br>
       <Row lg={3}>
       {
        news.map(renderNews)
       }
       </Row>
      </Container>
      <Footer />
      </div>

  
  );
}
export default Mental