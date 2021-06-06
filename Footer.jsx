import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();

  return (
    <footer>
      <p>Project Done Georgina</p>
      <br />
      <p>Copyright @ {currYear}</p>
    </footer>
  );
}
export default Footer;
