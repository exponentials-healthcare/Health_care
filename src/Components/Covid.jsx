import {React,useState,useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
import '../Stylesheets/Content.css';
import covidbg from '../images/covidbg.png';



const axios = require('axios')
function Covid(){

    const[news,setNews]=useState([]);

    const getNews= ()=>{
        axios.get('https://healthy2.herokuapp.com/api')
        .then( (response) =>{
          console.log(response.data);
          const myNews=response.data;
     
          setNews(myNews);
        })
      }

      useEffect( () => getNews(),[] );

     
      const renderNews = (eachNews,index) =>{
        if(eachNews.title!==null)
        {
       
        return(
        // <Container>
        //   <Col id={index} className='news_div' lg={3}> 
        //   <a href={eachNews.source}>
        //     {/* <Row > */}
        //      {/* <Col sm={1}><img src={eachNews.image} alt="news_img" width={270} height={150}></img></Col> */}
        //      <Col sm={1}><div className='news_title'><h4>{eachNews.title}</h4></div></Col>
        //        {/* </Row> */}
        //         {/* <Row className='news_description'>{eachNews.description}</Row> */}
        //    </a>
        //   <br></br>
        //   </Col> 
        //   </Container>
        <Col className='news' sm={1}>
            
             
              <a href={eachNews.source}>
              <div className='news_title'><h4>{eachNews.title}</h4></div>
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
   
     <div className='extra'>
     <img src={covidbg} alt="img" className='covid_bg'></img>
     <br></br>
     <br></br>
     <br></br>
    
     
     </div>
     
    
      <Container>
      
      <br></br>
      <br></br>
      <h3 style={{color:"brown"}}>  COVID UPDATES..</h3>
      <br></br>
      <br></br>
       <Row lg={3} >
       {
        news.map(renderNews)
       }
       </Row>
      </Container>
       
      </div>
  
  );
}
export default Covid