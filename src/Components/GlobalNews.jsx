import {React,useState,useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
import '../Stylesheets/Header.css'
import global_bg from '../images/global_bg.png'

const axios = require('axios')
function Global_news(){

    const[news,setNews]=useState([]);

    const getNews= ()=>{
        axios.get('https://medics1.herokuapp.com/api')
        .then( (response) =>{
          console.log(response.data);
          const myNews=response.data;
     
          setNews(myNews);
        })
      }

      useEffect( () => getNews(),[] );

     
      const renderNews = (eachNews,index) =>{
        if(eachNews.image!==null)
        {
        
        return(
          <Col id={index} className='news_div'> 
          <a href={eachNews.source}>
            <Row lg={2} sm={1}>
             <Col sm={1}><img src={eachNews.image} alt="news_img" width={270} height={150}></img></Col>
             <Col sm={1}><div className='news_title'><h4>{eachNews.title}</h4></div></Col>
               </Row>
                <Row className='news_description'>{eachNews.description}</Row>
              
          
          </a>
          <br></br>
  </Col> 
            
         
        )
      
      }
      }
    

  return(
    <div>
   
    <br></br>
    <br></br>
   
      <Container>
      <img src={global_bg} alt="img" className='mental_bg' ></img>
      <br></br>
      <br></br>
      <h3 style={{color:"brown"}}>  MEDICAL UPDATES..</h3>
      <br></br>
      <br></br>
       <Row lg={2}>
       {
        news.map(renderNews)
       }
       </Row>
      </Container>
     
      </div>

  
  );
}
export default Global_news