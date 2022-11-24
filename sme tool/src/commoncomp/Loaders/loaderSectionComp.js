import React from "react";
import "./loaderComp.css";
const LoaderSectionComp = () => {

  return (
    <>
    <div className="loaderComp">
      <div class="overlay__inner">
        <div class="overlay__content"><span class="spinner"></span></div>
      </div>
    </div>
    </>
  );
};

export default LoaderSectionComp;
