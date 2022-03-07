import {React,useState,useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';


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
        if(eachNews.source!="nytimes.com")
        {
        
        return(
          <Col id={index} className='news_div'> 
                  <a href={eachNews.source}>
                    <Row lg={3} sm={1}>
                     
                     <Col sm={1}><div className='news_title'><h4>{eachNews.title}</h4></div></Col>
                       </Row>
                       
                  
                  </a>
                  <br></br>
          </Col>
            
         
        )
      
      }
      }


  return(
    <div>
    <Header />
      <Container>
       <Row lg={2} sm={1}>
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