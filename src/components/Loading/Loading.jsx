import { Spin } from "antd";
import React from "react";

const Loading = () => {
  let style = {
    margin: "20px 0",
    marginBottom: "20px",
    padding: "30px 50px",
    textAlign: "center",
    background: "rgba(0, 0, 0, 0.05)",
    borderRadius: "4px",
  };
  return (
    <div style={{ style }}>
      <Spin />
    </div>
  );
};

export default Loading;
