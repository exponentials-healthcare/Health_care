import {React,useState,useEffect} from 'react';
import frontpg from '../images/frontpg.jpg'
import '../Stylesheets/Header.css';
import mentalHealth from '../images/mental_health1.png'
import nutrition from '../images/nutrition1.jpg'
import covid from '../images/covid2.png'
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {MdExpandMore} from 'react-icons/md';
import {Link} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';

const axios = require('axios')

function HomeContent() {

  const[news,setNews]=useState([]);
  const[repeat,setRepeat]=useState(false);
  // const[more,setMore]=useState("For More");   

  
  const countfn = () =>{
   
    setRepeat(true);
    document.getElementById('click').innerHTML=" ";
  }

   const getNews= ()=>{
     axios.get('https://healthcare-00.herokuapp.com/api')
     .then( (response) =>{
       console.log(response.data);
       const myNews=response.data;
  
       setNews(myNews);
     })
   }

   useEffect( () => getNews(),[] );
 
   var count=0;
  const renderNews = (eachNews,index) =>{
    if(eachNews.image&&eachNews.description!=null)
    {
    count++;
    if(count<=4)
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
  
     if(repeat) count=0;
  }
  }
 

        
          
   

  return (
    
  <div className='bg'>
  <Header />
    <img src={frontpg} alt="home_pic" className="bgimg"></img>

    <Container>
    <br></br>
    <br></br>
    <h4 id="explore">EXPLORE BY</h4>
    <hr style={{height:"2px"}} className='separator'></hr>
    {/* <Row>
    <ul className='list' >
    <Col>
      <li>
      <a href="#mental">
        <div class="listitem">
            <img src={mentalHealth} alt="mental" width={250} height={200}></img>
            <div>Mental Health</div>
        </div>
      </a>
      </li>
      </Col>
      <Col>
      <li>
      <a href="#nutrition">
        <div className='listitem'>
            <img src={nutrition} alt="nutrition" width={250} height={200} ></img>
            <div>Nutrition</div>
          </div>
        </a>
      </li>
      </Col>
      <Col>
      <li>
      <a href="#covid">
        <div className='listitem'>
            <img src={covid} alt="covid" width={250} height={200}></img>
            <div>Covid Updates</div>
          </div>
        </a>
      </li>
      </Col>
    </ul>
    </Row> */}


    <Row className='list' lg={3} sm={1}>
      <Col>
      <LinkContainer to="/Mental">
        <Col className="listitem">
            <img src={mentalHealth} alt="mental" width={200} height={200}></img>
            <div>Mental Health</div>
        </Col>
      </LinkContainer>
      </Col>
      <Col>
      <a href="#nutrition">
        <Col className='listitem'>
            <img src={nutrition} alt="nutrition" width={200} height={200} ></img>
            <div>Nutrition</div>
          </Col>
        </a>
      </Col>
      <Col>
      <LinkContainer to="/Covid">
      
        <Col className='listitem'>
            <img src={covid} alt="covid" width={200} height={200}></img>
            <div>Covid Updates</div>
          </Col>
        </LinkContainer>
      </Col>
    </Row>


<br></br>
<br></br>
<br></br>

<div>
<h4>THE JUST IN...</h4></div>
<hr style={{height:"2px"}} className='separator'></hr>
<br></br>
    <div>
      {/* <ul className='news_div'>
        {
          news.map(renderNews)
        }
       
      </ul> */}
      <Row lg={2} sm={1}>
      {
          news.map(renderNews)
        }
      </Row>
      <div className="more">
     <h5  id="click"onClick={countfn}>For More <MdExpandMore  ></MdExpandMore></h5></div>
    </div>

    <br></br>
<br></br>
<br></br>

   </Container>
   <Footer />
  </div>
    );
}
export default HomeContent