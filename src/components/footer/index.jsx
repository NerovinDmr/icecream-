import React from "react";
import "./style/footer.scss";
import { Button } from "../../ui/"

function Footer() {
  return (
    <div className="footer_wrapper">
      <div className="footer">
        <div className="leftSide">
          <div className="leftSide_wrapper">
          <div className="logo">
            <img src="/images/images-removebg-preview 1.png" alt="" />
          </div>
          <div className="leftSide_text">
            Some food has looked so awful that it's looked like something that
            the dog's brought home.
          </div>
          <div className="leftSide_social">
            <div className="leftSide_social_title">Fllow Us</div>
            <div className="leftSide_social_roll">
              <div className="facebook">
                <img src="/images/facebook.png" alt="fasebook" />
              </div>
              <div className="twitter">
                <img src="/images/twitter.png" alt="twitter" />
              </div>
              <div className="instagram">
                <img src="/images/instagram.png" alt="instagram" />
              </div>
              <div className="linkedin">
                <img src="/images/linkedin.png" alt="linkedin" />
              </div>
            </div>
          </div>
          </div>
        </div>
        <dir className="rightSide">
          <div className="rightSide_title">
              Newsletter
          </div>
          <div className="rightSide_input">
          <div className="input_wrapper">
          <div className='inputArea'>
            <input type="text" placeholder='Your Email' />
          </div>
            <div  className='btn_send'>
              <Button text={"Subscribe"}/>
            </div>
            </div>
          </div>
          <div className="payment">
            <div className="pp">
              <img src="/images/pp.png" alt="payment" />
            </div>
            <div className="masterCard">
              <img src="/images/mastercard.png" alt="payment" />
            </div>
            <div className="visa">
              <img src="/images/visa.png" alt="payment" />
            </div>
          </div>
        </dir>
      </div>
    </div>
  );
}

export default Footer;
