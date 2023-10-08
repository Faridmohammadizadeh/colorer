import "./App.css";

import { useEffect, useState } from "react";
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
  return (
    <>
      <div class="navbar-container">
        <button class="btn-nav">GRADIANT</button>
        <Link to="/skatch">
          <button class="btn-nav-on">SKATCH</button>
        </Link>
      </div>
    </>
  );
}

export default Skeleton;
