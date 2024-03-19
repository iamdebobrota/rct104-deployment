import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useWindowSize from "./hooks/useWindowSize";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const { width, height } = useWindowSize();
  const isMobile = useMediaQuery(`(max-width: 380px)`);
  const isTable = useMediaQuery(`(max-width: 786px)`);

  console.log(isMobile ? "TRUE" : "FALSE");
  return (
    <div
      className="App"
      style={{ color: isMobile ? "green" : isTable ? "blue" : "red" }}>
      <h1>
        {width} X {height}
      </h1>
    </div>
  );
}

export default App;
