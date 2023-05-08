import React from "react";
import Iframe from "react-iframe";
import Header from '../components/header';
import Footer from '../components/footer';
import Call_us from "../components/call_us";


function Contacts() {
  return (
    <div>
      <Header />
<div className="container plasing p-3 place-block">
    <div className="call-info ">
      <p className="font-size">Контактна інформація:</p>
          <div>
      <div>
            <span className="social-icon social-icon-telephone m-0"></span>
      </div>
            <div className="main-page">
              <div>
      <a className="color-black pl-3" href="tel:0508886567">050 888 65 67</a>
      <br/>
      <a className="color-black pl-3" href="tel:0508886567">050 888 65 67</a>
      <br/>
      <a className="color-black pl-3" href="tel:0508886567">050 888 65 67</a>
      <br/><br/></div></div>   
      <div className="main-page">
      <span className="social-icon social-icon-gmail m-1"></span>
      <a className="color-black" href="email:dmk.style@gmail.com">dmk.style@gmail.com</a>  
      <br/></div>
    </div>      
  </div>
<Call_us/>
  </div>
  <div className="container text-center pb-5 ">
    <Iframe className="video"
      url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.12720162526!2d30.52098391554664!3d50.438731296090566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cefe0307e81f%3A0x1f234c3b0a0b492!2z0JPRg9C70ZbQstC10YA!5e0!3m2!1suk!2sua!4v1673444914509!5m2!1suk!2sua"
      width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></Iframe>
      </div>
      <Footer />
    </div>
  );
}


export default Contacts; 
