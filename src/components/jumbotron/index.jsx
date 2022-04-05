import React from "react";
import "./style/jumbotron.scss";
import items from "../../assets/jumbotronDb.json";
import { Button } from "../../ui";
function Jumbotron() {
  const jumboItem = items.items;
  return (
    <div className="container">
      <div className="jumbotron">
        {jumboItem.map((jumboItem) => {
          return (
            <div key={jumboItem.id} className="jumbotron_item">
              <div className="jumboImg">
                <img src={jumboItem.url} alt="img" />
              </div>

              <div className="jumboInfo">
                <div className="jumboInfo_name">{jumboItem.name}</div>
                <div className="jumboInfo_discription">
                  {jumboItem.discription}
                </div>
                <div className="jumboInfo_price">
                  <div className="price">${jumboItem.price}</div>
                  <div className="oldPrice">${jumboItem.oldPrice}</div>
                </div>
                <Button text={"buy now"} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Jumbotron;
