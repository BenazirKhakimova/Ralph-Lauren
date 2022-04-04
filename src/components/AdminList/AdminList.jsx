import React, { useState, useEffect, useContext } from "react";
import { List, Avatar, Popconfirm, message, Col } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import VirtualList from "rc-virtual-list";
import { Link } from "react-router-dom";
import { contextProduct } from "../../context/ProductContext";
import "./AdminList.css";
import { Popconfirm, message, Button } from "antd";

const AdminList = () => {
  const { getProducts, products, deleteProduct } = useContext(contextProduct);

  useEffect(() => {
    getProducts();
  }, []);

  const text = "Are you sure to delete this task?";

  function confirm() {
    message.info("The product has been removed.");
  }

  return (
    <>
      <div
        style={{
          boxShadow: "0 3px 5px white",
          padding: "15px",
          margin: "15px",
        }}
      >
        <List>
          <VirtualList data={products} itemHeight={47}>
            {(item) => (
              <List.Item key={item.id} style={{ margin: "5px" }}>
                <List.Item.Meta
                  avatar={<Avatar src={item.image1} />}
                  title={
                    <span
                      href="#"
                      style={{
                        color: "#041E3A",
                        cursor: "pointer",
                        fontSize: "large",
                        fontWeight: 900,
                        fontFamily: "LeJeuneDeck",
                      }}
                    >
                      {item.brand} {item.title}
                    </span>
                  }
                />
                {/* <Popconfirm
                  placement="top"
                  title={text}
                  onConfirm={confirm}
                  okButtonProps={deleteProduct(item.id)}
                  cancelText="No"
                >
                  <span
                    style={{
                      color: "#041E3A",
                      cursor: "pointer",
                      fontSize: "large",
                      fontWeight: 900,
                      fontFamily: "LeJeuneDeck",
                    }}
                    href="#"
                  >
                    Delete
                  </span>
                </Popconfirm> */}

                <Link
                  to={`/edit/${item.id}`}
                  style={{
                    margin: "auto 20px",
                    color: "#041E3A",
                    cursor: "pointer",
                    fontSize: "large",
                    fontWeight: 900,
                    fontFamily: "LeJeuneDeck",
                  }}
                >
                  Edit
                </Link>
                <Link
                  to={`/details/${item.id}`}
                  style={{
                    color: "#041E3A",
                    cursor: "pointer",
                    fontSize: "large",
                    fontWeight: 900,
                    fontFamily: "LeJeuneDeck",
                  }}
                >
                  Details
                </Link>
              </List.Item>
            )}
          </VirtualList>
        </List>
      </div>
    </>
  );
};

export default AdminList;
