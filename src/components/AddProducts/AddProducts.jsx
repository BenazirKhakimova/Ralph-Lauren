import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { contextProduct } from "../../context/ProductContext";
const AddProducts = () => {
  const { AddProduct } = useContext(contextProduct);
  // title, price, description, image1, image2, video
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
    image1: "",
    image2: "",
    video: "",
  });
  const handleVal = (e) => {
    let product = {
      ...newProduct,
      [e.target.name]: e.target.value,
    };
    setNewProduct(product);
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField
          value={newProduct.title}
          onChange={handleVal}
          name="title"
          helperText="Please enter title of clothes"
          label="Title"
        />
        <TextField label="Title" />
      </Box>
    </div>
  );
};

export default AddProducts;
