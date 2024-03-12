import React from "react";
import { useTheme } from "./Context";

const ComponentNumTwo = () => {
  const { theme } = useTheme();
  return (
    <>
      <div
        style={{
          background: theme === "light" ? "#FFF" : "#333",
          color: theme === "light" ? "#000" : "#FFF",
        }}
      >
        <div className="my-2">
          <h1>Component 2</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </>
  );
};

export default ComponentNumTwo;
