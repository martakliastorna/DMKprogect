import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Delivery from "../components/delivery";
import Guaranty from "../components/guaranty";
import Change from "../components/change";

function Conditions() {
  return (
    <div>
      <Header />
      <div className="container p-4">
        <Delivery/>
        <Guaranty/>
        <Change />
      </div>
      <Footer />
      <a href="#top" id="go-top">Вгору</a>
  </div>
  );  
}

export default Conditions;
