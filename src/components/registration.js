import $ from "jquery";
import React from "react";
import { NavLink } from 'react-router-dom';

$(document).ready(function () {
  $(`.registration-img`).click(function(event) {
    $(`.registration-active`).toggleClass(`active-registration`);
    $(`body`).toggleClass(`lock`);
  });
});

function Registration() {
  return (
    <div className="registration-active">
    <button className="btn active"> <NavLink className="color-black" to="/sign_in">Реєстрація</NavLink></button>
    <br/><button className="btn active"> <NavLink className="color-black" to="/login">Вхід</NavLink></button>
    </div>
  );
}

export default Registration;