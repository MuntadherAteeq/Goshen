import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Popup = () => {
  useEffect(() => {
    // create new Tab if extension is clicked
    chrome.tabs.create({ url: "newtab.html" });
  }, []);

  return (
    <>
      <div className="bg-gray-200 h-full w-full">
        <div className="text-7xl">React, Typescript, Starter Code</div>
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
