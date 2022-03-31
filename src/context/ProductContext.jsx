import axios from "axios";
import React, { useReducer } from "react";
import { CASE_GET_ONE_PRODUCT, CASE_GET_PRODUCTS } from "../helpers/cases";
import { PRODUCTS_API } from "../helpers/consts";

export const contextProduct = React.createContext();

const INIT_STATE = {
  products: [],
  oneProduct: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
      };
    case CASE_GET_ONE_PRODUCT:
      return {
        ...state,
        oneProducts: action.payload.data,
      };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    let result = await axios(PRODUCTS_API);
    // console.log(result);
    let action = {
      type: CASE_GET_PRODUCTS,
      payload: result,
    };
    dispatch(action);
  };

  const AddProduct = async (newProduct) => {
    await axios.post(PRODUCTS_API, newProduct);
    getProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${PRODUCTS_API}/${id}`);
    getProducts();
  };
  const editProduct = async (id, editedProduct) => {
    await axios.patch(`${PRODUCTS_API}/${id}`, editedProduct);
    getProducts();
  };
  return (
    <contextProduct.Provider
      value={{
        products: state.products,
        getProducts,
        AddProduct,
        deleteProduct,
        editProduct,
      }}
    >
      {children}
    </contextProduct.Provider>
  );
};
export default ProductsContextProvider;
