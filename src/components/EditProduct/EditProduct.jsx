import { Form } from "antd";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { contextProduct } from "../../context/ProductContext";

const EditProduct = () => {
  const { editProduct } = useContext(contextProduct);
  const params = useParams();

  useEffect(() => {
    editProduct(params.id);
  }, []);
  return (
    <div className="container">
      <h2>Edit product</h2>
      <Form></Form>
    </div>
  );
};

export default EditProduct;
