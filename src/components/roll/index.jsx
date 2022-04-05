import React from "react";
import "./style/roll.scss";
import rollItems from "../../assets/RollItemDb.json";
function Roll() {
  const items = rollItems.rollItems;

  return (
    <div className="wrapper">
      <div className="container">
        <div className="roll">
          {items.map((rollItems) => {
            return (
              <div key={rollItems.id} className="roll_item">
                <div>
                  <img src={rollItems.url} alt="" />
                </div>
                <div className="roll_item_name">{rollItems.name}</div>
                <div className="roll_item_disicription">
                  {rollItems.discription}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Roll;
