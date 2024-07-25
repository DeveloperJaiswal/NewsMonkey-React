import React from "react";
import searchLoader from "../searchLoader.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img className="my-5" src={searchLoader} alt="loading" />
    </div>
  );
};

export default Spinner;
