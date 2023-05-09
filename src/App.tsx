import React from "react";
import "./App.css";
import SideBar from "./components/side-bar/SideBar";
import Split from "react-split";
import MainContent from "./components/main-content/MainContent";

function App() {
  return (
    <Split
      sizes={[20, 80]}
      expandToMin={false}
      gutterSize={5}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction="horizontal"
      cursor="col-resize"
      className="split-component"
    >
      <SideBar />
    </Split>
  );
}

export default App;
