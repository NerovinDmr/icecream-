import React from "react";
import "./style/showCase.scss";
function ShowCase() {
  const navItems = [
    "ICE CREAM",
    "CAYENNE CHOCOLATE",
    "CAKE BATTER",
    "CANDY CANE",
    "PLATTERS",
    "DESSERT",
  ];
  return (
    <div className="container">
      <div className="showCase">
        <div className="showCase_header">
          <h1>Our Product </h1>
        </div>
        <div className="nav">
          <ul className="showCase_nav">
            {navItems.map((navItems, index) => {
              return <li key={index}>{navItems}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShowCase;
