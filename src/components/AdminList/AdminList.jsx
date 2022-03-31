import { Avatar, List } from "antd";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { contextProduct } from "../../context/ProductContext";
import VirtualList from "rc-virtual-list";

const AdminList = () => {
  const { getProducts, products, deleteProduct } = useContext(contextProduct);
  useEffect(() => getProducts(), []);

  return (
    <>
      <List style={{ width: "100%" }}>
        <VirtualList data={products} itemHeight={47} itemKey="email">
          {(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={<a href="#">{item.title}</a>}
                description={item.description}
              />
              <a onClick={() => deleteProduct(item.id)}>Delete</a>
              <Link to={`/edit/:${item.id}`} style={{ margin: "auto 20px" }}>
                Edit
              </Link>
              <Link to={`/description`}>Description</Link>
            </List.Item>
          )}
        </VirtualList>
      </List>
    </>
  );
};

export default AdminList;
