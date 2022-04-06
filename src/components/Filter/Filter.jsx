import React from "react";
import { Slider } from "antd";

const Filters = ({ price, setPrice }) => {
  return (
    <div style={{ width: "26%" }}>
      <p>Price</p>
      <Slider
        value={price}
        onChange={(e) => setPrice(e)}
        defaultValue={[1, 500]}
        min={50}
        max={500}
        step={1}
        range
      />
    </div>
  );
};

export default Filters;
