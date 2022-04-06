import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { contextProduct } from "../../context/ProductContext";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import Card from "../Card/Card";
import Collection from "../Collection/Collection";
import { Empty, Pagination } from "antd";
import Filters from "../Filter/Filter";

const Jackets = () => {
  const { products, getProducts, productsCount } = useContext(contextProduct);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [price, setPrice] = useState([1, 500]);
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(3);
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      type: "jackets",
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: limit,
    });
  }, [price, page, limit]);
  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <div className="collection-blocks">
      <BreadCrumb />
      <h1 className="dresses collection-title">Women's jackets</h1>

      <div className="dresses collection-block">
        <Collection />
        <div>
          <div
            style={{ cursor: "pointer", marginLeft: "4.5%" }}
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? <h3>HIDE FILTERS</h3> : <h3>SHOW FILTERS</h3>}
            {showFilters ? <Filters price={price} setPrice={setPrice} /> : null}
          </div>
        </div>
        <div className="card-block">
          {products.length > 0 ? (
            products.map((item) => <Card key={item.id} item={item} />)
          ) : (
            <Empty />
          )}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          total={+productsCount}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
        />
      </div>
    </div>
  );
};

export default Jackets;
