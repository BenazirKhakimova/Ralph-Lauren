import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { contextProduct } from '../../context/ProductContext';

const Pagination = () => {
    const { getProducts, productsCount } = useContext(contextProduct)
    const [limit, setLimit] = useState(4)
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(searchParams.get("_page") ? searchParams.get("_page") : 1)
    useEffect(() => {
        setSearchParams({
            _page: page,
            _limit: limit
        })
    }, [page, limit])
    useEffect(() => {
        getProducts()
    }, [searchParams])
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Pagination total={+productsCount}
                    current={+page}
                    pageSize={+limit}
                    defaultCurrent={1}
                    onChange={(page, limit) => {
                        setPage(page);
                        setLimit(limit)
                    }} />
            </div>
        </div>
    );
};

export default Pagination;