import React, { Component } from "react";
import Category from "./categoryWork.json";
import './typeOfWork.css'
import FormTypeOfWorks from '../formTypeOfWorks/formTypeOfWorks';
import MainAddButton from '../mainAddBtn/mainAddBtn'

export default class typeOfWork extends Component {
  state = {
    showForm: false,
    showCategory: "typeCategory",
    oftenUsed: [],
  }

  closeForm = () => {
    this.setState({ showForm: false})
  }

  render() {
    return (
      <>
        <div className="select-category main-category">
          {/* engine */}
          <div
            className="select-category engine"
            onClick={() =>
              this.setState({
                showForm: true,
                showCategory: "Engine",
                oftenUsed: `${Category.engine.oftenUsed}`
              })
            }
          >
            <h1>Engine</h1>
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
          <div
            className="select-category chassis"
            onClick={() =>
              this.setState({
                showForm: true,
                showCategory: "Chassis",
                oftenUsed: `${Category.chassis.oftenUsed}`
              })
            }
          >
            <h1>Chassis</h1>
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
          <div
            className="select-category body-car"
            onClick={() =>
              this.setState({
                showForm: true,
                showCategory: "Body",
                oftenUsed: `${Category.body.oftenUsed}`
              })
            }
          >
            <h1>Body</h1>
            <img
              src={`/category-work/${Category.body.img1}.png`}
              alt="body1"
            />
            <img
              src={`/category-work/${Category.body.img2}.png`}
              alt="body2"
            />
            <img
              src={`/category-work/${Category.body.img3}.png`}
              alt="body3"
            />
            <img
              src={`/category-work/${Category.body.img4}.png`}
              alt="body4"
            />
          </div>
          {/* other */}
          <div
            className="select-category other"
            onClick={() =>
              this.setState({
                showForm: true,
                showCategory: "Other",
                oftenUsed: `${Category.other.oftenUsed}`
              })
            }
          >
            <h1>Other</h1>
            <img
              src={`/category-work/${Category.other.img1}.png`}
              alt="other1"
            />
            <img
              src={`/category-work/${Category.other.img2}.png`}
              alt="other2"
            />
            <img
              src={`/category-work/${Category.other.img3}.png`}
              alt="other3"
            />
            <img
              src={`/category-work/${Category.other.img4}.png`}
              alt="other4"
            />
          </div>
        </div>
        <div className="form-type-work">
          {this.state.showForm ? (
            <>
              <FormTypeOfWorks
                showCategory={this.state.showCategory}
                oftenUsed={this.state.oftenUsed}
                closeForm={this.closeForm}
              />
              {console.log(this.state.oftenUsed)}
            </>
          ) : null}
        </div>
        {/* <FormTypeOfWorks /> */}
      </>
    );
  }
}
