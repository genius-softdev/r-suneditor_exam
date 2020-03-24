import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

function App() {
  const handleChange = content => {
    console.log(content);
  };
  const handleBlur = e => {
    console.log(e);
  };
  return (
    <div className="App">
      <p>My Other Contents</p>
      <SunEditor
        setOptions={{
          buttonList: [["bold", "italic", "underline"], ["list"], ["link"]],
          width: "500px",
          height: "200px",
          mode: "classic",
          resizingBar: false
        }}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default App;
