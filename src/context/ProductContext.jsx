import axios from "axios";
import React, { useReducer } from "react";
import { CASE_GET_ONE_PRODUCT, CASE_GET_PRODUCTS } from "../helpers/cases";
import { PRODUCTS_API } from "../helpers/consts";

export const contextProduct = React.createContext();

const INIT_STATE = {
  products: [],
  oneProduct: null,
  productsCount: 0
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
        productsCount: action.payload.headers['x-total-count']
      };
    case CASE_GET_ONE_PRODUCT:
      return {
        ...state,
        oneProduct: action.payload.data,
      };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    let result = await axios(PRODUCTS_API);

    dispatch({
      type: CASE_GET_PRODUCTS,
      payload: result,
    });
}


    const createProduct = async (newProduct) => {
      await axios.post(PRODUCTS_API, newProduct);
      getProducts();
    };

    const getOneProduct = async (id) => {
      let result = await axios(`${PRODUCTS_API}/${id}`);
      dispatch({
        type: CASE_GET_ONE_PRODUCT,
        payload: result,
      });
    };
    const deleteProduct = async (id) => {
      await axios.delete(`${PRODUCTS_API}/${id}`);
      getProducts();
    };

    const upDateProduct = async (id, editedProduct) => {
      await axios.patch(`${PRODUCTS_API}/${id}`, editedProduct);
      getProducts();
    };
    return (
      <contextProduct.Provider
        value={{
          products: state.products,
          oneProduct: state.oneProduct,
          productsCount: state.productsCount,
          getProducts,
          createProduct,
          deleteProduct,
          getOneProduct,
          upDateProduct,
        }}
      >
        {children}
      </contextProduct.Provider>
    );
  
};
export default ProductsContextProvider;
