import React, { Component } from "react";
import Category from "./categoryWork.json";

export default class typeOfWork extends Component {
  render() {
    return (
      <div class="select-category">
        {/* engine */}
        <div class="select-category">
          <img
            src={`/category-work/${Category.engine.img1}.png`}
            alt="Category.engine.img1"
          />
          <img
            src={`/category-work/${Category.engine.img2}.png`}
            alt="Category.engine.img2"
          />
          <img
            src={`/category-work/${Category.engine.img3}.png`}
            alt="Category.engine.img3"
          />
          <img
            src={`/category-work/${Category.engine.img4}.png`}
            alt="Category.engine.img4"
          />
        </div>
        {/* chassis */}
        <div class="select-category">
          <img
            src={`/category-work/${Category.chassis.img1}.png`}
            alt="other1"
          />
          <img
            src={`/category-work/${Category.chassis.img2}.png`}
            alt="other2"
          />
          <img
            src={`/category-work/${Category.chassis.img3}.png`}
            alt="other3"
          />
          <img
            src={`/category-work/${Category.chassis.img4}.png`}
            alt="other4"
          />
        </div>
        {/* body */}
        <div class="select-category">
          <img src={`/category-work/${Category.body.img1}.png`} alt="body1" />
          <img src={`/category-work/${Category.body.img2}.png`} alt="body2" />
          <img src={`/category-work/${Category.body.img3}.png`} alt="body3" />
          <img src={`/category-work/${Category.body.img4}.png`} alt="body4" />
        </div>z
        {/* other */}
        <div class="select-category">
          <img src={`/category-work/${Category.other.img1}.png`} alt="other1" />
          <img src={`/category-work/${Category.other.img2}.png`} alt="other2" />
          <img src={`/category-work/${Category.other.img3}.png`} alt="other3" />
          <img src={`/category-work/${Category.other.img4}.png`} alt="other4" />
        </div>
      </div>
    );
  }
}
