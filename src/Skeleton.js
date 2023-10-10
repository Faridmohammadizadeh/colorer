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
  const [backgroundColor, setBackgroundColor] = useState("#ADC4CE");
  const [textColor, setTextColor] = useState("#F1F0E8");
  const [buttonColor, setButtonColor] = useState("#EEE0C9");
  const [deatailColor, setDeatailColor] = useState("#96B6C5");

  // nav baneer  components ---------------------------------------------

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
  //cloud button component  ---------------------------------------------

  const clicked = useCallback(({ target: { innerText } }) => {
    console.log(`Clicked on "${innerText}"!`);
  }, []);

  function SaveBtn() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="30"
        height="30"
        class="icon"
      >
        <path d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z"></path>
      </svg>
    );
  }

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
            <div className="control-hex-buttons-container">
              <input
                type="text"
                autocomplete="off"
                name="backgroundField"
                class="input"
                value={"#" + backgroundColor.slice(1)}
                maxLength="7"
                minLength="7"
                onChange={(e) => setBackgroundColor(e.target.value)}
                style={{
                  "box-shadow": `inset 2px 5px 10px ${backgroundColor}`,
                }}
              />

              <CopyToClipboard text={backgroundColor}>
                <button class="btnCloud" style={{ fill: backgroundColor }}>
                  <SaveBtn />
                </button>
              </CopyToClipboard>
            </div>

            <HexColorPicker
              color={backgroundColor}
              onChange={(val) => {
                setBackgroundColor(val);
              }}
            />
          </div>

          <div className="control-section">
            <div className="control-hex-buttons-container">
              <input
                type="text"
                autocomplete="off"
                name="detailField"
                class="input"
                value={"#" + deatailColor.slice(1)}
                maxLength="7"
                minLength="7"
                onChange={(e) => setDeatailColor(e.target.value)}
                style={{
                  "box-shadow": `inset 2px 5px 10px ${deatailColor}`,
                }}
              />

              <CopyToClipboard text={deatailColor}>
                <button class="btnCloud" style={{ fill: deatailColor }}>
                  <SaveBtn />
                </button>
              </CopyToClipboard>
            </div>

            <HexColorPicker
              color={deatailColor}
              onChange={(val) => {
                setDeatailColor(val);
              }}
            />
          </div>

          <div className="control-section">
            <div className="control-hex-buttons-container">
              <input
                type="text"
                autocomplete="off"
                name="textField"
                class="input"
                value={"#" + textColor.slice(1)}
                maxLength="7"
                minLength="7"
                onChange={(e) => setTextColor(e.target.value)}
                style={{
                  "box-shadow": `inset 2px 5px 10px ${textColor}`,
                }}
              />

              <CopyToClipboard text={textColor}>
                <button class="btnCloud" style={{ fill: textColor }}>
                  <SaveBtn />
                </button>
              </CopyToClipboard>
            </div>

            <HexColorPicker
              color={textColor}
              onChange={(val) => {
                setTextColor(val);
              }}
            />
          </div>

          <div className="control-section">
            <div className="control-hex-buttons-container">
              <input
                type="text"
                autocomplete="off"
                name="buttonField"
                class="input"
                value={"#" + buttonColor.slice(1)}
                maxLength="7"
                minLength="7"
                onChange={(e) => setButtonColor(e.target.value)}
                style={{
                  "box-shadow": `inset 2px 5px 10px ${buttonColor}`,
                }}
              />

              <CopyToClipboard text={buttonColor}>
                <button class="btnCloud" style={{ fill: buttonColor }}>
                  <SaveBtn />
                </button>
              </CopyToClipboard>
            </div>

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
