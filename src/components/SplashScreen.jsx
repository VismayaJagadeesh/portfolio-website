// src/SplashScreen.jsx
import { useEffect, useState } from "react";
import "./SplashScreen.css";

function SplashScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true); // trigger fade out
    }, 2000); // show for 2s

    const timer2 = setTimeout(() => {
      onFinish();
    }, 3000); // fully remove after fade

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div className={`splash-container ${fadeOut ? "fade-out" : ""}`}>
      <p className="splash-text">
        <span style={{ color: "#BD611F" }}>Vismaya</span>
        <span style={{ color: "black" }}>.</span>
      </p>
    </div>
  );
}

export default SplashScreen;
