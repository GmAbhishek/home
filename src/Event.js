import React from 'react'
import img1 from './images/pastevent.jpg';
import img2 from './images/presentevent.jpg';
import img3 from './images/futureevent.jpg';
import imglogo from './images/IT Logo.jpg';
import imgdp from './images/dp.png';
import imginsta from './images/instagram.png';
import './Eventeve.css'


function Event() {
  return (
    <>
    <div id="head">
    <hr/>
        <div id='logo'>
        <img src={imglogo} id='imglogo' alt='' width='90'/>
        </div>
        <div id="home">
            HOME
        </div>
        <div id="gallery">
            GALLERY
        </div>
        <div id="events">
            EVENTS
        </div>
        <div id="uploads">
            UPLOADS
        </div>
        <div id="support">
            SUPPORT
        </div>
        <div id='dps'>
        <img src={imgdp} id='dp' alt='' width='40'/>
        </div>
        <hr/>
        <div id="EventHead"><h1>EVENTS</h1></div>
        <hr/>
        <h2>PAST EVENTS :</h2>
        <hr/>
        <div id='container1'>
       <img src={img1} id='img1' alt='' width='300'/>
       <p id='Para1'><h3><u>Date</u> : 10.12.2022<br/><br/><u>Time</u> : 11:00am - 1:00pm<br/><br/><u>Venue</u> : CC3 / IT-BLOCK / SKCT</h3></p>
       </div>
        <hr/>
        <h2>PRESENT EVENTS : </h2>
        <hr/>
        <div id="container2">
        <img src={img2} id='img2' alt='' width='300'/>
        <p id='Para2'><h3><u>Date</u> : 10.12.2022<br/><br/><u>Time</u> : 11:00am - 1:00pm<br/><br/><u>Venue</u> : CC3 / IT-BLOCK / SKCT</h3></p>
        </div>
        <hr/>
        <h2>FUTURE EVENTS : </h2>
        <hr/>
        <div id="container3">
        <img src={img3} id='img3' alt='' width='300'/>
        <p id='Para3'><h3><u>Date</u> : 14.12.2022<br/><br/><u>Time</u> : 10:00am<br/><br/><u>Venue</u> : CC1 / IT-BLOCK / SKCT</h3></p>
        </div>
        <hr/>
        <div id="contact">
        <br/>
        <h2 id='contacthead'>Contact Us</h2>
        <p id='Para4'><u><b>Phone</b></u> : 1234567890<br/><br/><u><b>E-Mail</b></u> : itmedia@gmail.com</p>
        <img src={imginsta} id='imginsta' alt='' width='45'/>
        <br/>
        </div>


        </div>
</>



        
  )
}

export default Event