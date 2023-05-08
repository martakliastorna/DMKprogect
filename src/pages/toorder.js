import React from "react";

import { NavLink } from "react-router-dom";
import {useRef, useState, useEffect} from "react";
import Header from '../components/header';
import Footer from '../components/footer';


function Toorder() {

  const [delivery, setDelivery] = useState({});

  const telRef = useRef(null);
  const fistnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  

  function userDelivery() {
    let newDelivery = {tel: telRef.current.value, fistname: fistnameRef.current.value, lastname: lastnameRef.current.value, email: emailRef.current.value, };
    //..validation
    localStorage.setItem('delivery', JSON.stringify(newDelivery));
    setDelivery(newDelivery);
  }

  return (

    <div>
      <Header />
      <div className="container pl-5 pb-5 header">
      <p className="title-blog text-center pb-5 pt-5">Oформити замовлення</p>
        <form action="" method="post">
        <div className="mb-3">
        <input ref={fistnameRef} defaultValue={delivery.fistname} type="name" placeholder="Ім'я" autofocus className="form-control form-width"/>
          </div>
          <div className="mb-3">
        <input ref={lastnameRef} defaultValue={delivery.lastname} type="text" placeholder="Прізвище" autofocus className="form-control form-width"/>
        </div>
        <div className="mb-3">
            <input ref={telRef} defaultValue={delivery.tel} type="tel" placeholder="099 999 99 99"  name="Телефон" min="9"
            className="form-control form-width" />
          </div>
        <div className="mb-3">
        <input ref={emailRef} defaultValue={delivery.email} type="email" placeholder="E-mail" autofocus min="5" className="form-control form-width"/>
        </div>
        <NavLink to="/"><button onClick={userDelivery} className="btn btn-dark mb-5 form-width"> Замовити </button> </NavLink> <br/>
      </form> 
      
      </div>
      <Footer />
    </div>
  );
}


export default Toorder; 
