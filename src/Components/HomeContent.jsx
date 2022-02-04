import {React,useState,useEffect} from 'react';
import frontpg from '../images/frontpg.jpg'
import '../Stylesheets/Header.css';
import mentalHealth from '../images/mental_health1.png'
import nutrition from '../images/nutrition1.jpg'
import covid from '../images/covid2.png'
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';

const axios = require('axios')

function HomeContent() {

  const[news,setNews]=useState([]);
   

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
    // count++;
    // if(count<=4)
    return(
      <li id={index}> 
              <a href={eachNews.source}>
                <div className='div_news'>
                  <img src={eachNews.image} alt="news_img" width={270} height={150}></img>
                   <div className='news_title'><h4>{eachNews.title}</h4></div>
                   </div>
                    <div className='news_description'>{eachNews.description}</div>
                  
              
              </a>
            </li>
          
    )}
  }

  return (
    
  <div className='bg'>
  <Header />
    <img src={frontpg} alt="home_pic" className="bgimg"></img>

    <Container>
    <br></br>
    <br></br>
    <h4 id="explore">EXPLORE BY</h4>
    <hr style={{height:"2px"}}></hr>
    <ul className='list' >
      <li>
      <a href="#mental">
        <div class="listitem">
            <img src={mentalHealth} alt="mental" width={250} height={200}></img>
            <div>Mental Health</div>
        </div>
      </a>
      </li>
      <li>
      <a href="#nutrition">
        <div className='listitem'>
            <img src={nutrition} alt="nutrition" width={250} height={200} ></img>
            <div>Nutrition</div>
          </div>
        </a>
      </li>
      <li>
      <a href="#covid">
        <div className='listitem'>
            <img src={covid} alt="covid" width={250} height={200}></img>
            <div>Covid Updates</div>
          </div>
        </a>
      </li>
    </ul>
<br></br>
<br></br>
<br></br>

<h4>THE JUST IN...</h4>
<hr style={{height:"2px"}}></hr>
<br></br>
    <div>
      <ul className='news_div'>
        {
          news.map(renderNews)
        }
       
      </ul>
     
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