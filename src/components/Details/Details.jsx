import Item from "antd/lib/list/Item";
import React from "react";
import "./Details.css";

const Details = () => {
  return (
    <div className="container">
      <div className="details-blocks">
        <div className="details-block-l">
          <img
            src="https://www.rlmedia.io/is/image/PoloGSI/s7-1429052_alternate10?$rl_df_pdp_5_7_a10$"
            alt=""
            className="detail-block-img"
          />
          <img
            src="https://www.rlmedia.io/is/image/PoloGSI/s7-1429052_lifestyle?$rl_df_pdp_5_7_lif$"
            alt=""
            className="detail-block-img"
          />
        </div>
        <div className="detail-block-r">
          <h1>Polo Ralph Lauren</h1>
          <p>The Iconic Mesh Polo Shirt - All Fits</p>
          <h2>$95.00</h2>
        </div>
      </div>
    </div>
  );
};

export default Details;
