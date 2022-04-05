import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Modal } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { contextProduct } from '../../context/ProductContext';

import './Search.css';

const Search = () => {
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
      <div className='input-content' >

        <Input.Search placeholder='Search...' 
        style={{ width: "50%", marginLeft: '25%',  }} 
        value={searchValue} 
        onChange={(e) => setSearchValue(e.target.value)} />

        <br/>
        <div className='btn-search-inp'>
    <Link to='/men'>
        <Button onClick={()=> setVisible(false)} 
        className='btn-search'
        style={{}}>Men</Button>
    </Link>
    
    <Link to='/women'>
        <Button className='btn-search' onClick={()=> setVisible(false)} 
        >Women</Button>
    </Link>
        </div>
        </div>
      </Modal>
        </div>
        
    );
};

export default Search;