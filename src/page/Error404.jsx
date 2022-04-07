import React from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Result
        style={{ marginTop: "5%" }}
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button onClick={() => navigate("/")}>Back Home</Button>}
      />
    </div>
  );
};

export default Error404;
