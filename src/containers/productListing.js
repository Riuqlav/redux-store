import React from "react";
import { useSelector } from "react-redux";

const productListing = () => {
  const products = useSelector((state) => state);
  console.log(products);
  return (
    <div className="ui grid container">
      <h1>productListing</h1>
    </div>
  );
};

export default productListing;
