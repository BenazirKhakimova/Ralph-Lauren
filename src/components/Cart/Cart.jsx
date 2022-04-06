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
            extra={
              <img
                src={item.item.image1}
                alt="img"
                width={272}
                className="cart-img"
              />
            }
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
                    <h3 style={{ fontFamily: "Northwell", fontSize: "25px" }}>
                      {item.item.brand}
                    </h3>
                    <h2 style={{ fontFamily: "LeJeuneDeck" }}>
                      {item.item.title}
                    </h2>
                    <h3 style={{ fontFamily: "LeJeuneDeck" }}>
                      {"$" + item.item.price}
                    </h3>
                  </div>
                </div>
              }
              description={
                <>
                  <div>
                    {" "}
                    <h4 style={{ fontFamily: "Copyright Klim Type Foundry" }}>
                      {item.item.description}
                    </h4>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "20px",
                    }}
                  >
                    <div>
                      <h4
                        style={{ fontFamily: " Copyright Klim Type Foundry" }}
                      >
                        Quantity
                      </h4>
                      <Button
                        className="btn-cart"
                        onClick={() =>
                          changeProductCount(item.count - 1, item.item.id)
                        }
                      >
                        -
                      </Button>
                      <InputNumber disabled value={item.count} />
                      <Button
                        className="btn-cart"
                        onClick={() =>
                          changeProductCount(item.count + 1, item.item.id)
                        }
                      >
                        +
                      </Button>
                    </div>
                    <div>
                      <h4
                        style={{ fontFamily: " Copyright Klim Type Foundry" }}
                      >
                        SubPrice
                      </h4>
                      <h3
                        style={{ fontFamily: " Copyright Klim Type Foundry" }}
                      >
                        {"$" + item.subPrice}
                      </h3>
                    </div>
                    <div className="btn-cart-content">
                      <Button
                        className="btn-cart-remove"
                        onClick={() => deleteFromCart(item.item.id)}
                      >
                        Remove from cart
                      </Button>

                      <Link to={"/payment"}>
                        <Button className="btn-cart-remove">Buy now</Button>
                      </Link>
                    </div>
                  </div>
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
