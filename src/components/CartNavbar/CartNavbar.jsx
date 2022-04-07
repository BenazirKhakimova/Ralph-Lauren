import { ShoppingOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";

const CartNavbar = () => {
  const { getCart, cartLength } = useContext(cartContext);
  const [length, setLength] = useState(0);
  useEffect(() => {
    getCart();
    console.log(cartLength);
    setLength(cartLength);
  }, [cartLength, length]);

  return (
    <Link to="/cart">
      <Badge count={+length}>
        <ShoppingOutlined
          style={{
            fontSize: "24px",
          }}
        />
      </Badge>
    </Link>
  );
};

export default CartNavbar;
