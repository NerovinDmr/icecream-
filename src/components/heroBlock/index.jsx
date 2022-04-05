import React from "react";
import "./style/heroBlock.scss";
import { Button } from "../../ui";

function HearoBlock(props) {
  return (
    <div className="heroBlock">
      <div className="blockInfo">
        <div className="topText">{props.topText}</div>
        <div>
          <h1>
            {props.header} <span>{props.slogan}</span>
          </h1>
        </div>
        <div className="bottomText">{props.discription}</div>
        <div className="i-btn">
          <Button text={"buy now"} />
        </div>
      </div>
      <div className="visualBlock">
        <div className="mainImg">
          <img src={props.firstImgUrl} alt="ice" />
        </div>
      </div>
    </div>
  );
}

export default HearoBlock;
