import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { clothesForMen } from '../../helpers/clothes';

const Filters = ({getProducts}) => {
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
                {clothesForMen.map((item) => (<Select.Option
                    key={item.id} value={item.type}>{item.type}</Select.Option>))}
            </Select>
        </div>
    );
};

export default Filters;