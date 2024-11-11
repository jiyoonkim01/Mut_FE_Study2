import React, { useState, useEffect } from "react";

export default function ColorSwitch({ onChangeColor }) {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handlePageClick = () => setClickCount((prevCount) => prevCount + 1);

    document.addEventListener("click", handlePageClick);

    return () => {
      document.removeEventListener("click", handlePageClick);
    };
  }, []);

  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onChangeColor();
        }}
      >
        Change color
      </button>
      <p>Clicks on the page: {clickCount}</p>
    </div>
  );
}
