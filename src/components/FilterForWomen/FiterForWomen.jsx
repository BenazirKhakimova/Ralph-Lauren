import React from 'react';
import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { clothesForWomen } from '../../helpers/clothes';

const FiterForWomen = () => {
    const [type, setType] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        setSearchParams({
            type: type,
        })
    }, [type])

    useEffect(() => {
        getProducts()
    }, [searchParams])
    return (
        <div style={{ marginTop: "20px" }}>
            <Select value={type} onChange={(e) => setType(e)} placeholder="Filter by brand" style={{ width: "100%" }} allowClear mode='multiple'>
                {clothesForWomen.map((item) => (<Select.Option
                    key={item.id} value={item.type}>{item.type}</Select.Option>))}
            </Select>
        </div>
    );
};

export default FiterForWomen;