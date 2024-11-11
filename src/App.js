import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LightSwitch from "./components/LightSwitch";
import ColorSwitch from "./components/ColorSwitch";

function App() {
  const colors = [
    "#FFFFFF",
    "#ABDEE6",
    "#FFC5BF",
    "#C6DBDA",
    "#FFD8DE",
    "#ECD5E3",
    "#CCE2CB",
  ];
  const [colorIndex, setColorIndex] = useState(0);

  function onChangeColor() {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  }

  return (
    <Router>
      <div
        style={{
          backgroundColor: colors[colorIndex],
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <Routes>
          <Route path="/" element={<h1>홈 페이지에 오신 것을 환영합니다</h1>} />
          <Route path="/lightswitch" element={<LightSwitch />} />
          <Route
            path="/colorswitch"
            element={<ColorSwitch onChangeColor={onChangeColor} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
