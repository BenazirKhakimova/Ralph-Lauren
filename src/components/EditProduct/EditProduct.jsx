import { Button, Col, Form, Input, InputNumber, Select } from "antd";
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contextProduct } from "../../context/ProductContext";


const EditProduct = () => {
  const { getOneProduct, oneProduct, upDateProduct } =
    useContext(contextProduct);
  const params = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  useEffect(() => {
    form.setFieldsValue(oneProduct);
  }, [oneProduct]);

  const save = (value) => {
    upDateProduct(params.id, value);
    navigate("/admin");
  };
  return (
      <>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Col span={12}>
    <div style={{margin: '85px 25px'}}>
      <h1 style={{color: 'black', fontFamily: 'LeJeuneDeck'}} >Edit product</h1>
      <Form size='large' layout="vertical" name="basic" form={form} onFinish={save}>
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
          <Input style={{color: 'black'}}s />
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
        <div>
        <Form.Item style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button  style={{backgroundColor: '#041e3a', color: 'white' }} htmlType="submit">
            Save
          </Button>
        </Form.Item>
        </div>
      </Form>
    </div>
    </Col>
    </div>
    </>
  );
};

export default EditProduct;
