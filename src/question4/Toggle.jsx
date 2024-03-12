import React from "react";
import { useTheme } from "./Context";

const ToggleTheme = () => {
  const { toggleTheme } = useTheme();
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
};

export default ToggleTheme;
