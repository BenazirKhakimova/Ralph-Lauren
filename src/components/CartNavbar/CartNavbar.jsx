import { ShoppingOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";

const CartNavbar = () => {
  const { getCart, cartLength } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  return (
    <Link to="/cart">
      <Badge count={+cartLength}>
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
