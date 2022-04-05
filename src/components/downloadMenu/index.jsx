import React from "react";
import "./style/downloadMenu.scss"
import list from "../../assets/dwList.json";

function DownloadMenu() {
  const listItems = list.list;

  return (
    <div className="dowmloadMenu">
      <div className="download_imgBlock">
        
        <img src="/images/smart.png" alt="smart" />
      </div>
      <div className="download_infoBlock">
        <div className="infoBlock_header">
          <h1>Simple Way To Order Your Food</h1>
        </div>
        <div className="infoBlock_discription">
          Some food has looked so awful that it's looked like something that the
          dog's brought home, yet after one mouthful I've been left eating my
          thoughts.
        </div>
        <div className="infoBlock_list">
          {listItems.map((listItems) => {
            return (
              <div key={listItems.id} className="infoBlock_list_item">
                <div className="list_img">
                  <img src={listItems.url} alt="img" />
                </div>
                <div className="list_links">{listItems.text}</div>
              </div>
            );
          })}
        </div>
        <div className="vendor">
          <div className="google">
            <img src="/images/goggle.png" alt="google" />
          </div>
          <div className="apple">
            <img src="/images/apple.png" alt="apple" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadMenu;
