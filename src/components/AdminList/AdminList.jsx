import React, { useEffect, useContext } from "react";
import { List, Avatar, Popconfirm, message } from "antd";
import VirtualList from "rc-virtual-list";
import { Link } from "react-router-dom";
import "./AdminList.css";
import { contextProduct } from "../../context/ProductContext";

const AdminList = () => {
  const { getProducts, products, deleteProduct } = useContext(contextProduct);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div
        style={{
          padding: "15px",
          margin: "15px",
        }}
      >
        <List>
          <VirtualList data={products} itemHeight={47}>
            {(item) => (
              <List.Item key={item.id} style={{ margin: "5px" }}>
                <List.Item.Meta
                  avatar={<Avatar src={item.image1} size="large" />}
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
                <span
                  style={{
                    color: "#041E3A",
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
