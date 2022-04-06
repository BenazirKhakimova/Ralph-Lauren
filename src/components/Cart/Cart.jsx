import { Button, InputNumber, List } from "antd";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import "./Cart.css";
const Cart = () => {
  const { getCart, cart, deleteFromCart, changeProductCount } =
    useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="container" style={{ marginTop: "6%" }}>
      <List
        itemLayout="horizontal"
        dataSource={cart.products}
        footer={<h2>Total: ${cart.totalPrice}</h2>}
        renderItem={(item) => (
          <List.Item
            extra={<img src={item.item.image1} alt="img" width={272} />}
          >
            <List.Item.Meta
              title={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h3>{item.item.brand}</h3>
                    <h4>{item.item.title}</h4>
                  </div>
                  <h3>{"$" + item.item.price}</h3>
                </div>
              }
              description={
                <>
                  <div>{item.item.description}</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "40%",
                      marginTop: "20px",
                    }}
                  >
                    <div>
                      <h4>Quantity</h4>
                      <Button
                        className="btn-art"
                        onClick={() =>
                          changeProductCount(item.count - 1, item.item.id)
                        }
                      >
                        -
                      </Button>
                      <InputNumber disabled value={item.count} />
                      <Button
                        className="btn-art"
                        onClick={() =>
                          changeProductCount(item.count + 1, item.item.id)
                        }
                      >
                        +
                      </Button>
                    </div>
                    <div>
                      <h4>SubPrice</h4>
                      <h3>{"$" + item.subPrice}</h3>
                    </div>
                  </div>
                  <Button
                    className="btn-art"
                    onClick={() => deleteFromCart(item.item.id)}
                  >
                    Remove from cart
                  </Button>
                  <Link to={"/payment"}>
                    <Button className="btn-art">Buy now</Button>
                  </Link>
                </>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Cart;
