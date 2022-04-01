import React, { useState, useEffect, useContext } from "react";
import { List, Avatar, Popconfirm, message, Col } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import VirtualList from "rc-virtual-list";
import { Link } from "react-router-dom";
import { contextProduct } from "../../context/ProductContext";
import "./AdminList.css";

const AdminList = () => {
  const { getProducts, products, deleteProduct } = useContext(contextProduct);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div>
        <List>
          <VirtualList data={products} itemHeight={47}>
            {(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src={item.image1} />}
                  title={
                    <span
                      href="#"
                      style={{
                        color: "black",
                        cursor: "pointer",
                        fontSize: "large",
                        fontWeight: 900,
                        fontFamily: "LeJeuneDeck",
                      }}
                    >
                      {item.brand},{item.title}
                    </span>
                  }
                />
                {/* <Popconfirm
                  title="Are you sure?"
                  icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                >
                  
                </Popconfirm> */}
                <span
                  style={{
                    color: "black",
                    cursor: "pointer",
                    fontSize: "large",
                    fontWeight: 900,
                    fontFamily: "LeJeuneDeck",
                  }}
                  href="#"
                  onClick={() => deleteProduct(item.id)}
                >
                  Delete
                </span>
                <Link
                  to={`/edit/${item.id}`}
                  style={{
                    margin: "auto 20px",
                    color: "black",
                    cursor: "pointer",
                    fontSize: "large",
                    fontWeight: 900,
                    fontFamily: "LeJeuneDeck",
                  }}
                >
                  Edit
                </Link>
                <Link
                  to={`/products/${item.id}`}
                  style={{
                    color: "black",
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
