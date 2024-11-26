import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const NewTab = () => {
  return (
    <>
      <div className="bg-gray-600 h-full w-full">
        <div className="text-7xl">React, Typescript, Starter Code</div>
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <NewTab />
  </React.StrictMode>,
  document.getElementById("root")
);
