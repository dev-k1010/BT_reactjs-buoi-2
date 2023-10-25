import React, { Component } from "react";
import { glassesArr } from "./data";

export default class Chon_kinh extends Component {
  state = {
    color: "v1",
    name: "GUCCI G8850U",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  };
  handleChange = (color, name, desc) => {
    this.setState({
      color: color,
      name: name,
      desc: desc,
    });
  };

  render() {
    return (
      <div>
        {/* Header */}
        <div classname="header ">
          <ul
            className="nav justify-content-center bg-dark "
            style={{
              height: 100,
            }}
          ></ul>
        </div>
        {/* Content */}
        <div
          className="content "
          style={{
            margin: "30px 300px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/*  */}
          <div className="container-before " style={{}}>
            <div
              className="card"
              style={{
                backgroundImage: `url('./glassesImage/model.jpg')`,
                backgroundPosition: " center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "20rem",
                height: 400,
              }}
            ></div>
          </div>

          {/*  */}
          <div
            className="container-after "
            style={{
              textAlign: "center",
            }}
          >
            <div
              className="card"
              style={{
                backgroundImage: `url('./glassesImage/model.jpg')`,
                backgroundPosition: " center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "20rem",
                height: 400,
              }}
            >
              <div>
                <img
                  className="card-img-top"
                  src={`./glassesImage/${this.state.color}.png`}
                  alt="Card image cap"
                  style={{
                    width: "60%",
                    marginTop: 105,
                  }}
                />
              </div>

              <div
                className="card-body-bottom"
                style={{
                  borderRadius: 3,
                  paddingTop: 120,
                }}
              >
                <div
                  className="body-item"
                  style={{ backgroundColor: "#61dafb73" }}
                >
                  <h5
                    className="card-title"
                    style={{ color: "red" }}
                  >{`${this.state.name}`}</h5>
                  <p className="card-text">{`${this.state.desc}`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Button list */}

        <div
          style={{
            height: 250,
            backgroundColor: "white",
            marginLeft: 100,
            marginRight: 100,
          }}
        >
          <button
            className=""
            onClick={() => {
              this.handleChange(
                "v1",
                "GUCCI G8850U",
                "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
              );
            }}
            style={{
              backgroundColor: "white",
              outline: "none",
              padding: 0,
              margin: 0,
              border: "none",
            }}
          >
            <div
              className="row"
              style={{
                justifyContent: "center",
                display: "flex",
                padding: 10,
              }}
            >
              <div className="col-4">
                <img
                  style={{ width: "150%" }}
                  src="./glassesImage/v1.png"
                  alt=""
                />
              </div>
            </div>
          </button>
          <button
            className=""
            onClick={() => {
              this.handleChange(
                "v2",
                "GUCCI G8759H",
                "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
              );
            }}
            style={{
              backgroundColor: "white",
              outline: "none",
              padding: 0,
              margin: 0,
              border: "none",
            }}
          >
            <div
              className="row"
              style={{
                justifyContent: "center",
                display: "flex",
                padding: 10,
              }}
            >
              <div className="col-4">
                <img
                  style={{ width: "150%" }}
                  src="./glassesImage/v2.png"
                  alt=""
                />
              </div>
            </div>
          </button>
          <button
            className=""
            onClick={() => {
              this.handleChange(
                "v3",
                "DIOR D6700HQ",
                "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
              );
            }}
            style={{
              backgroundColor: "white",
              outline: "none",
              padding: 0,
              margin: 0,
              border: "none",
            }}
          >
            <div
              className="row"
              style={{
                justifyContent: "center",
                display: "flex",
                padding: 10,
              }}
            >
              <div className="col-4">
                <img
                  style={{ width: "150%" }}
                  src="./glassesImage/v3.png"
                  alt=""
                />
              </div>
            </div>
          </button>
          <button
            className=""
            onClick={() => {
              this.handleChange(
                "v4",
                "GUCCI D6005U",
                "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
              );
            }}
            style={{
              backgroundColor: "white",
              outline: "none",
              padding: 0,
              margin: 0,
              border: "none",
            }}
          >
            <div
              className="row"
              style={{
                justifyContent: "center",
                display: "flex",
                padding: 10,
              }}
            >
              <div className="col-4">
                <img
                  style={{ width: "150%" }}
                  src="./glassesImage/v4.png"
                  alt=""
                />
              </div>
            </div>
          </button>
          <button
            className=""
            onClick={() => {
              this.handleChange(
                "v5",
                "PRADA P8750",
                "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
              );
            }}
            style={{
              backgroundColor: "white",
              outline: "none",
              padding: 0,
              margin: 0,
              border: "none",
            }}
          >
            <div
              className="row"
              style={{
                justifyContent: "center",
                display: "flex",
                padding: 10,
              }}
            >
              <div className="col-4">
                <img
                  style={{ width: "150%" }}
                  src="./glassesImage/v5.png"
                  alt=""
                />
              </div>
            </div>
          </button>
          <button
            className=""
            onClick={() => {
              this.handleChange(
                "v6",
                "PRADA P9700",
                "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
              );
            }}
            style={{
              backgroundColor: "white",
              outline: "none",
              padding: 0,
              margin: 0,
              border: "none",
            }}
          >
            <div
              className="row"
              style={{
                justifyContent: "center",
                display: "flex",
                padding: 10,
              }}
            >
              <div className="col-4">
                <img
                  style={{ width: "150%" }}
                  src="./glassesImage/v6.png"
                  alt=""
                />
              </div>
            </div>
          </button>
          <button
            className=""
            onClick={() => {
              this.handleChange(
                "v7",
                "FENDI F8750",
                "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
              );
            }}
            style={{
              backgroundColor: "white",
              outline: "none",
              padding: 0,
              margin: 0,
              border: "none",
            }}
          >
            <div
              className="row"
              style={{
                justifyContent: "center",
                display: "flex",
                padding: 10,
              }}
            >
              <div className="col-4">
                <img
                  style={{ width: "150%" }}
                  src="./glassesImage/v7.png"
                  alt=""
                />
              </div>
            </div>
          </button>
          <button
            className=""
            onClick={() => {
              this.handleChange(
                "v8",
                "FENDI F8500",
                "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
              );
            }}
            style={{
              backgroundColor: "white",
              outline: "none",
              padding: 0,
              margin: 0,
              border: "none",
            }}
          >
            <div
              className="row"
              style={{
                justifyContent: "center",
                display: "flex",
                padding: 10,
              }}
            >
              <div className="col-4">
                <img
                  style={{ width: "150%" }}
                  src="./glassesImage/v8.png"
                  alt=""
                />
              </div>
            </div>
          </button>
          <button
            className=""
            onClick={() => {
              this.handleChange(
                "v9",
                "FENDI F4300",
                "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
              );
            }}
            style={{
              backgroundColor: "white",
              outline: "none",
              padding: 0,
              margin: 0,
              border: "none",
            }}
          >
            <div
              className="row"
              style={{
                justifyContent: "center",
                display: "flex",
                padding: 10,
              }}
            >
              <div className="col-4">
                <img
                  style={{ width: "150%" }}
                  src="./glassesImage/v9.png"
                  alt=""
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    );
  }
}
