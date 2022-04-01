import React, { useContext, useState } from "react";

import { Button, Modal, message, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { contextProduct } from "../context/ProductContext";

const AddProduuct = () => {
  const { AddProduct } = useContext(contextProduct);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const error = () => {
    message.error("Please, fill in all inputs!");
  };

  const [newProduct, setNewProduct] = useState({
    brand: "",
    title: "",
    price: "",
    image1: "",
  });

  const handleVal = (e) => {
    let product = {
      ...newProduct,
      [e.target.value]: e.target.value,
    };
    setNewProduct(product);
  };

  const add = () => {
    if (
      !newProduct.brand ||
      !newProduct.title ||
      !newProduct.price ||
      !newProduct.image1
    ) {
      error();
      return;
    }
    AddProduct(newProduct);
    navigate("/list");
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input
          name={newProduct.brand}
          type="text"
          value={newProduct.brand}
          onChange={handleVal}
          placeholder="Brand Name"
        />
        <input
          name={newProduct.title}
          type="text"
          value={newProduct.title}
          onChange={handleVal}
          placeholder="Clothing Name"
        />
        <input
          name={newProduct.price}
          type="text"
          value={newProduct.price}
          onChange={handleVal}
          placeholder="Price"
        />
        <input
          name={newProduct.image1}
          type="text"
          value={newProduct.image1}
          onChange={handleVal}
          placeholder="Image"
        />
        <Button type="primary" onClick={add}>
          Add
        </Button>
      </Modal>
    </>
  );
};

export default AddProduuct;
