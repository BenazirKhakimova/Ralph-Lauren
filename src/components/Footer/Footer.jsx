import React from "react";
import "./Footer.css";

const Footer = () => {
  let FOOTER_COMPANY = [
    { title: "About US", element: "*", id: 1 },
    { title: "fksksdjflkd", element: "*", id: 2 },
    {
      title: "sfgjasdjf",
      element: "*",
      id: 3,
    },
  ];
  let FOOTER_RANGE = [
    { title: "Men", element: "*", id: 1 },
    { title: "Women", element: "*", id: 2 },
    {
      title: "Home",
      element: "*",
      id: 3,
    },
    {
      title: "Sale",
      element: "*",
      id: 4,
    },
  ];
  let FOOTER_CUSTOMER = [
    { title: "Live Chat", element: "*", id: 1 },
    { title: "Customer Support", element: "*", id: 2 },
    {
      title: "Shopping",
      element: "*",
      id: 3,
    },
    {
      title: "Handling",
      element: "*",
      id: 4,
    },
  ];
  return (
    <div className="footer">
      <div className="footer-blocks container">
        <div className="footer-block">
          <h3 className="footer-block-title">Our Range</h3>
          <div className="footer-block-list">
            {FOOTER_COMPANY.map((item) => (
              <span className="footer-block-items">{item.title}</span>
            ))}
          </div>
        </div>
        <div className="footer-block">
          <h3 className="footer-block-title">Company</h3>
          <div className="footer-block-list">
            {FOOTER_RANGE.map((item) => (
              <span className="footer-block-items">{item.title}</span>
            ))}
          </div>
        </div>
        <div className="footer-block">
          <h3 className="footer-block-title">Customer Assistance</h3>
          <div className="footer-block-list">
            {FOOTER_CUSTOMER.map((item) => (
              <span className="footer-block-items">{item.title}</span>
            ))}
          </div>
        </div>
        <div className="footer-block">
          <h3 className="footer-block-title">SIGN UP FOR EMAILS</h3>
          <input
            type="text"
            placeholder="Enter email address"
            className="footer-input"
          />
          <button className="footer-input-button">Submit</button>
        </div>
      </div>
      <p className="footer-bottom">
        COPYRIGHT 2022 RALPH LAUREN. ALL RIGHTS RESERVED.
      </p>
    </div>
  );
};

export default Footer;
