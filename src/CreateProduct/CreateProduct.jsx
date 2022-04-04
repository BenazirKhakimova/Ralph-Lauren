import React, { useContext, useState } from "react";

import { Button, Modal, Input, Form, InputNumber, Select } from "antd";
import { contextProduct } from "../context/ProductContext";
import { clothes } from "../helpers/clothes";

const CreateProduct = () => {
  const { createProduct } = useContext(contextProduct);
  const [isModalVisible, setIsModalVisible] = useState(false);
  function save(newProduct) {
    createProduct(newProduct);
    setIsModalVisible(false);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Button
        style={{
          backgroundColor: "#041E3A",
          color: "white",
        }}
        onClick={showModal}
      >
        Add Product
      </Button>
      {/* brand , title, price, description, image1, image2, image3, video , clothes*/}
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout="vertical" name="basic" onFinish={save}>
          <Form.Item
            label="Brand"
            name="brand"
            rules={[
              {
                required: true,
                message: "Please input brand!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Clothes"
            name="clothes"
            rules={[
              {
                required: true,
                message: "Please input clothes!",
              },
            ]}
          >
            <Select>
              {clothes.map((item) => (
                <Select.Option key={item.id} value={item.clothe}>
                  {item.clothe}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input title!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input price!",
              },
            ]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Image 1"
            name="image1"
            rules={[
              {
                required: true,
                message: "Please input URL of image 1!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image 2"
            name="image2"
            rules={[
              {
                required: true,
                message: "Please input URL of image 2!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image 3"
            name="image3"
            rules={[
              {
                required: true,
                message: "Please input URL of image 2!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Video"
            name="video"
            rules={[
              {
                required: true,
                message: "Please input URL of video!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateProduct;
