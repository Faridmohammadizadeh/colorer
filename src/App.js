import "./App.css";

import { HexColorPicker } from "react-colorful";
import { useState, useEffect } from "react";

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
    let styler1 = {
      color: "white",
      "border-radius": "8px",
      background: `linear-gradient(240deg, #ffffff, ${color1})`,
      "box-shadow": `-9px 9px 45px ${color1} , 9px -9px 18px #ffffff`,
    };

    // colorpicker 1 settings

    const [color2, setColor2] = useState("#6fe2f2");
    let styler2 = {
      color: `white`,
      "border-radius": "8px",
      background: `linear-gradient(125deg, #ffffff, ${color2})`,
      "box-shadow": `-9px 9px 45px ${color2} , 9px -9px 18px #ffffff`,
    };

    let grad = {
      "background-image": `linear-gradient(to right, ${color1}, ${color2})`,
    };

    let controlerColor = {
      background: "#ffffff",
      background: `linear-gradient(225deg, #eeeeee, #ffffff)`,
      "box-shadow": ` -10px 10px 70px #e6e6e6 ,
       10px -10px 70px #e6e6e6`,
    };

    return (
      <>
        <div className="main" style={{ ...grad }}>
          <h1>enjoy!</h1>
          <div className="control-box" style={{ ...controlerColor }}>
            <div className="input-color">
              <HexColorPicker color={color1} onChange={setColor1} />
              <h1 style={{ ...styler1 }} className="code-button">
                {color1}
              </h1>
            </div>
            <div className="input-color">
              <HexColorPicker color={color2} onChange={setColor2} />
              <h1 style={{ ...styler2 }} className="code-button">
                {color2}
              </h1>
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
