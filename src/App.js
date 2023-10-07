import "./App.css";

import { useState, useEffect, useCallback } from "react";
import { HexColorPicker } from "react-colorful";
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
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

  // Gradianter component ----------------------------------
  const Gradianter = () => {
    // colorpicker 1 settings
    const [color1, setColor1] = useState("#de71ff");
    const [copied1, setCopied1] = useState(false);

    const onCopy1 = useCallback(() => {
      setCopied1(true);
    }, []);

    const clicked = useCallback(({ target: { innerText } }) => {
      console.log(`Clicked on "${innerText}"!`);
    }, []);

    let styler1 = {
      color: "white",
      "border-radius": "8px",
      background: `linear-gradient(240deg, #ffffff, ${color1})`,
      "box-shadow": `-9px 9px 45px ${color1} , 9px -9px 18px #ffffff`,
      border: copied1 ? "1.5px solid #05ff00" : "white",
    };

    // colorpicker 2 settings
    const [color2, setColor2] = useState("#6fe2f2");
    const [copied2, setCopied2] = useState(false);

    const onCopy2 = useCallback(() => {
      setCopied2(true);
    }, []);

    let styler2 = {
      color: `white`,
      "border-radius": "8px",
      background: `linear-gradient(125deg, #ffffff, ${color2})`,
      "box-shadow": `-9px 9px 45px ${color2} , 9px -9px 18px #ffffff`,
      border: copied2 ? "1.5px solid #05ff00" : "white",
    };

    let grad = {
      "background-image": `linear-gradient(to right, ${color1}, ${color2})`,
    };

    let controlerColor = {
      // background: "#ffffff",
      // background: `linear-gradient(225deg, #eeeeee, #ffffff)`,
      // "box-shadow": ` -10px 10px 70px #e6e6e6 ,
      //  10px -10px 70px #e6e6e6`,
    };

    // copy css
    const [copiedCss, setCopiedCss] = useState(false);
    const onCopyCss = useCallback(() => {
      setCopiedCss(true);
    }, []);

    let copyCssButton = {
      background: `linear-gradient(to left, ${color2}, ${color1})`,
      "box-shadow": `-9px 9px 22px #d1d1d1, 9px 9px 22px #e9e9e9  `,
      border: copiedCss ? "1.5px solid #05ff00" : "",
    };

    return (
      <>
        <div className="main" style={{ ...grad }}>
          <h1 style={{ color: "white" }}>enjoy!</h1>

          <div className="control-box" style={{ ...controlerColor }}>
            <div className="input-color">
              <HexColorPicker
                color={color1}
                onChange={(val) => {
                  setColor1(val);
                  setCopied1(false);
                  setCopiedCss(false);
                }}
              />
              <CopyToClipboard onCopy={onCopy1} text={color1} onClick={clicked}>
                <h1 style={{ ...styler1 }} className="code-button">
                  {color1}
                </h1>
              </CopyToClipboard>
            </div>

            <div className="control-box-buttons">
              <CopyToClipboard
                onCopy={onCopyCss}
                text={`linear-gradient(#${color1}, ${color2})`}
                onClick={clicked}
              >
                <div className="css-button" style={{ ...copyCssButton }}>
                  <h1>copy css</h1>
                </div>
              </CopyToClipboard>
            </div>

            <div className="input-color">
              <HexColorPicker
                color={color2}
                onChange={(val) => {
                  setColor2(val);
                  setCopied2(false);
                  setCopiedCss(false);
                }}
              />
              <CopyToClipboard onCopy={onCopy2} text={color2} onClick={clicked}>
                <h1 style={{ ...styler2 }} className="code-button">
                  {color2}
                </h1>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </>
    );
  };
  // ---------------------------------- Gradianter component

  return (
    <>
      <div style={{ ...getCurrentDimension() }} className="body-box">
        <Gradianter />
      </div>
    </>
  );
}

export default App;
