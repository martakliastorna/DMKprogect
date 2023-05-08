import $ from "jquery";
import React from "react";


  $(document).ready(function () {
  $(`.header-burger`).click(function(event) {
    $(`.header-burger,.header-menu`).toggleClass(`active-burger`);
    $(`body`).toggleClass(`lock`);
  });
  });
  
function Burger() {
  return (
      <div className="header-burger">
        <span></span>
    </div>
  );
}


export default Burger;