import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./style/reviewsBlock.scss";

function ReviewsBlock() {
  return (
    <div className="container">
      <div className="reviews">
        <div className="comments">
          <div className="comments_author">
            <div className="comments_author_avatar">
              <img src="/images/w.png" alt="avatar" />
            </div>
            <div className="comments_author_info">
              <div className="author_name">Adele A. McNeill</div>
              <dir className="author_sign">AMIRICAN</dir>
            </div>
          </div>
          <div className="comment_text">
            <b>"</b>Thanks a lot for the prompt service. Really appreciate.
            Excellence taste in Every Bite.Add a joy of best Taste. Foodie
            Moments<b>"</b>
          </div>
          <div className="slider">
            <div className="slider_btn">
              <FiChevronLeft />
            </div>
            <div children="slider_field"></div>
            <div className="slider_btn">
              <FiChevronRight />
            </div>
          </div>
        </div>
        <div className="prodactImg">
          <img src="images/ice3.png" alt="ice3" />
        </div>
      </div>
    </div>
  );
}

export default ReviewsBlock;
