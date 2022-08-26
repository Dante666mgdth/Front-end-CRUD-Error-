import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
      
      
      <a href="https://tiermaker.com/create/jdm-cars-42192">Create your own JDM Tier List Here :
      JDM CARS Tier List Maker
</a>

      <p> &copy; Dante's JDM List.com</p>

      <p> Gmail: shadlybenhajel@gmail.com</p>
    </div>
  );
}

export default Footer;
