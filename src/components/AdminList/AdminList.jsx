import React, { useState, useEffect, useContext } from "react";
import { List, Avatar, Popconfirm, message } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import VirtualList from "rc-virtual-list";
import { Link } from "react-router-dom";
import { contextProduct } from "../../context/ProductContext";

const AdminList = () => {
  const { getProducts, products, deleteProduct } = useContext(contextProduct);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <List>
        <VirtualList data={products} itemHeight={47} itemKey="email">
          {(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src={item.image1} />}
                title={
                  <a href="#">
                    {item.brand},{item.title}
                  </a>
                }
              />
              <Popconfirm
                title="Are you sure?"
                icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              >
                <a href="#" onClick={() => deleteProduct(item.id)}>
                  Delete
                </a>
              </Popconfirm>
              <Link to={`/edit/${item.id}`} style={{ margin: "auto 20px" }}>
                Edit
              </Link>
              <Link to={`/products/${item.id}`}>Details</Link>
            </List.Item>
          )}
        </VirtualList>
      </List>
    </>
  );
};

export default AdminList;
