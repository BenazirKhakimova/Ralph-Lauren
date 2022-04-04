import { Select } from 'antd';
import React, { useState } from 'react';
import { men } from '../../helpers/clothes';

const Filter = () => {
    const [clothes, setClothes] = useState([])
    return (
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
             <Select value={clothes} 
             onChange={(e) => setClothes(e)} 
             placeholder="Filter by brand" 
             style={{ width: "100%" }} 
             allowClear mode='multiple'>
                {men
                .map((item) => (<Select.Option
                    key={item.id} value={item.clothes}>{item.clothes}</Select.Option>))}
            </Select>
        </div>
    );
};

export default Filter;