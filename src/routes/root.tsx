import Split from "react-split";
import SideBar from "../components/side-bar/SideBar";
import MainContent from "../components/main-content/MainContent";
import "./root.scss";
const RootComponent = () => {
  return (
    <Split
      sizes={[20, 80]}
      minSize={[50, 500]}
      // maxSize={[30, 90]}
      expandToMin={false}
      gutterSize={5}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction="horizontal"
      cursor="col-resize"
      className="split-component"
      style={{ display: "flex" }}
    >
      <SideBar />
      <MainContent />
    </Split>
  );
};

export default RootComponent;
