import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <div className="content-about container main-page">
        <img className="title-img" src="./images/titleimg.png" alt="title-img"/>
        <h1 className="title">Чоловічий одяг, взуття та аксесуари</h1>    
      </div>
      <div className="container text-center">
        <h1 className="title-blog" id="blog">Блог</h1>
        <hr className="underline"/>
        <div className="plasing ">
          <div >
            <img className="blog active-el " src="./images/blog1.jpg" alt="blog1"/>
          </div>
          <div>
              <img className="blog active-el" src="./images/blog2.jpg" alt="blog2"/>
          </div>
          <div>
              <img className="blog active-el" src="./images/blog3.jpg" alt="blog3"/>
          </div>
        </div> 
      </div>

      <div className="content-about container text-center">
        <h1 className="title-blog">Магазин</h1>
        <hr className="underline"/>
        <div className="plasing">
          <div className="position active-el"> 
            <img className="shop" src="./images/shop1.jpg" alt="blog1"/>
          <p className="mark">Взуття</p>
          </div>
          <div className="position active-el">
            <img className="shop" src="./images/shop2.jpg" alt="blog2"/>
            <p className="mark">Одяг</p>
          </div>
            <div className="position active-el">
            <img className="shop" src="./images/shop3.jpg" alt="blog3"/>
            <p className="mark">Аксесуари</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="title-blog">Умови</h1>
        <hr className="underline"/>
        <div className="plasing text-center ">
        <div className="pl-3 pb-3">
          <p className="font-bold font-size" href=""> Доставка і оплата</p>
          <p >Наш інтернет-магазин здійснює доставку по Україні через компанію «Нова Пошта», кур'єром по Одесі, самовивіз у Одесі.</p>
          <NavLink className="active-el color-black" to="/Condition/delivery">Детальніше</NavLink>
        </div>
        <div className="pl-4 pr-4 pb-3">
          <p className="font-bold font-size"> Гарантії</p>
          <p>На весь товар, придбаний у нашому магазині надається гарантія 6 місяців з моменту покупки. Ми замінимо пару, якщо вона
          неякісна.</p>
          <NavLink className="active-el color-black" to="/condition/guaranty">Детальніше</NavLink>
        </div>
        <div className="pr-3 pb-3">
          <p className="font-bold font-size"> Обмін та повернення</p>
          <p>Якщо вам з якихось причин не підійшов чи не сподобався товар, ми можемо запропонувати вам обмін чи повернення.</p>
          <NavLink className="active-el color-black" to="/condition/change">Детальніше</NavLink>
        </div>
        </div>
      </div>
      <Footer />
      <a href="#top" id="go-top">Вгору</a>
  </div>

  );
}


export default Home;