import React from "react";

function Footer() {
  return (
  <footer className="main-page container pt-4 pb-4">
    <div> <img className="logotype" src="../images/logo.png" alt="logotype"/>
    </div>
  <div className="show-hide">
    <a className="social-icon social-icon-facebook" href="https://facebook.com/dmk.style.man" target="_blank"></a>
    <a className="social-icon social-icon-instagram" href="https://www.instagram.com/dmk.style_man_/?hl=uk" target="_blank"></a>
    <a className="social-icon social-icon-tiktok" href="https://www.tiktok.com/@dmk.style_man_" target="_blank"></a>
  </div>
    <p className="style-foot">© 2018 - 2023 DMK</p>
</footer>
  );
}


export default Footer;