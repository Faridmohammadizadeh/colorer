import "./App.css";

import { useState, useEffect, useCallback } from "react";
import { HexColorPicker } from "react-colorful";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

function Skeleton() {
  // screen size ----------------------------------
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  // ---------------------------------- screen size

  // color picker settings ---------------------------------------------
  const [backgroundColor, setBackgroundColor] = useState("#e7e7e7");
  const [textColor, setTextColor] = useState("#4b4b4b");
  const [buttonColor, setButtonColor] = useState("#70efff");
  const [deatailColor, setDeatailColor] = useState("#3f9681");

  // color picker settings ---------------------------------------------
  function NavItem() {
    return (
      <div
        className="skatch-nav-item"
        style={{ "background-color": textColor }}
      ></div>
    );
  }
  function NavBtn() {
    return (
      <div
        className="skatch-nav-btn"
        style={{ "background-color": buttonColor }}
      ></div>
    );
  }
  //  --------------------------------------------- color picker settings

  return (
    <>
      <div class="navbar-container">
        <Link to="/">
          <button class="btn-nav">GRADIANT</button>
        </Link>
        <button class="btn-nav-on">SKATCH</button>
      </div>

      <div>
        <div
          className="skatch-body"
          style={{ "background-color": backgroundColor }}
        >
          <div
            className="skatch-nav"
            style={{ "background-color": deatailColor }}
          >
            <div className="skatch-nav-item-container">
              <NavItem />
              <NavItem />
              <NavItem />
              <NavItem />
            </div>
            <div
              className="skatch-nav-item-container"
              style={{ direction: "rtl" }}
            >
              <NavBtn />
            </div>
          </div>

          <div
            className="skatch-banner"
            style={{ "background-color": backgroundColor }}
          >
            <div
              className="circle-one"
              style={{ "background-color": buttonColor }}
            >
              <div>
                <div
                  className="skatch-banner-title"
                  style={{
                    "background-color": textColor,
                    width: "10rem",
                    "margin-top": "4rem",
                  }}
                ></div>
                <div
                  className="skatch-banner-title"
                  style={{
                    "background-color": textColor,
                    width: "16rem",
                    "margin-top": "8rem",
                  }}
                ></div>
                <div
                  className="skatch-banner-title"
                  style={{
                    "background-color": deatailColor,
                    width: "10rem",
                    "margin-top": "12rem",
                  }}
                ></div>
              </div>
            </div>

            <div
              className="skatch-banner-info"
              style={{
                border: `0.5rem solid ${deatailColor}`,
                "background-color": backgroundColor,
              }}
            >
              <div
                className="skatch-banner-text"
                style={{
                  "background-color": textColor,
                }}
              ></div>
              <div
                className="skatch-banner-text"
                style={{
                  "background-color": textColor,
                }}
              ></div>
              <div
                className="skatch-banner-text"
                style={{
                  "background-color": textColor,
                  width: "80%",
                }}
              ></div>
              <div className="skatch-banner-button-container">
                <div
                  className="skatch-banner-button"
                  style={{
                    "background-color": buttonColor,
                  }}
                >
                  <div
                    className="skatch-banner-text"
                    style={{
                      "background-color": deatailColor,
                    }}
                  ></div>
                </div>
                <div
                  className="skatch-banner-button"
                  style={{
                    "background-color": buttonColor,
                  }}
                >
                  <div
                    className="skatch-banner-text"
                    style={{
                      "background-color": textColor,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="control-box">
          <div className="control-section">
            <h1 style={{ color: backgroundColor }}>{backgroundColor}</h1>
            <HexColorPicker
              color={backgroundColor}
              onChange={(val) => {
                setBackgroundColor(val);
              }}
            />
          </div>

          <div className="control-section">
            <h1 style={{ color: deatailColor }}>{deatailColor}</h1>
            <HexColorPicker
              color={deatailColor}
              onChange={(val) => {
                setDeatailColor(val);
              }}
            />
          </div>

          <div className="control-section">
            <h1 style={{ color: textColor }}>{textColor}</h1>
            <HexColorPicker
              color={textColor}
              onChange={(val) => {
                setTextColor(val);
              }}
            />
          </div>

          <div className="control-section">
            <h1 style={{ color: buttonColor }}>{buttonColor}</h1>
            <HexColorPicker
              color={buttonColor}
              onChange={(val) => {
                setButtonColor(val);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skeleton;
