import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { contextProduct } from "../../context/ProductContext";
import Women from "../Women/Women";
import "./NavBar.css";

let NAV_LIST = [
  {
    title: "Men",
    link: "/men",
    id: 1,
  },
  {
    title: "Women",
    link: "/women",
    id: 2,
  },
  {
    title: "Home",
    link: "/home",
    id: 3,
  },
  {
    title: "Sale",
    link: "/sale",
    id: 4,
  },
];

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const {getProducts} = useContext(contextProduct)
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchValue, setSearchValue] = useState(searchParams.get('q') ? searchParams.get('q') : '')

  useEffect(()=>{
      getProducts()
  },[])

  useEffect(()=>{
      setSearchParams({
          q: searchValue
      })
  }, [searchValue])

  useEffect(()=>
        getProducts(), 
  [searchParams])

  return (
    <div className="navigation">
      <div className="primary-logo">
        <Link className="logo-link" to="/">
          <span className="visually-hidden">Ralph Lauren</span>
        </Link>
      </div>
      <div className="navbar">
        {NAV_LIST.map((item) => (
          <Link className="nav-item logo-link" to={item.link} key={item.id}>
            {item.title}
          </Link>
        ))}
        <Link to="/admin" className="nav-item logo-link">
          ADMIN
        </Link>
      </div>
      <div className="nav-right">
      <div>
        <SearchOutlined style={{ fontSize: "24px" }} onClick={() => setVisible(true)}/>
        <Modal
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width="100%"
        footer={null}
        className='search-navbar'
       >
      <div className='input-content' style={{}}>

        <Input.Search placeholder='Search...' 
        style={{ width: "50%", marginLeft: '25%',  }} 
        value={searchValue} 
        onChange={(e) => setSearchValue(e.target.value)} />

        <br/>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Link to='/men'>
        <Button  onClick={()=> setVisible(false)} 
        style={{backgroundColor: '#041e3a', color: 'white', borderRadius: '2rem', margin: '10px' , width: '100px', textAlign: 'center'}}>Men</Button>
</Link>
<Link to='/women'>
        <Button onClick={()=> setVisible(false)} 
        style={{backgroundColor: '#041e3a', color: 'white', borderRadius: '2rem', width: '100px', textAlign: 'center'}}>Women</Button>
        </Link>
        </div>
        </div>
      </Modal>
        </div>
        <ShoppingCartOutlined style={{ fontSize: "24px" }} />
        <HeartOutlined style={{ fontSize: "24px" }} />
        <UserOutlined style={{ fontSize: "24px" }} />
      </div>
    </div>
  );
};

export default NavBar;
