import React from 'react';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import Pagination from '../Pagination/Pagination'

const WomenList = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Filter/>
            <Card/>
            <Pagination/>
        </div>
    );
};

export default WomenList;